import axios from "axios";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

import FormInput from "../../components/owner/organization/FormInput";
import ImageUpload from "../../components/owner/organization/ImageUpload";
import MembersSection from "../../components/owner/organization/MembersSection";
import { useState } from "react";
import { organizationSchema } from "../../validations/organizationSchema";
import { getToken } from "@clerk/react";
import { ORG_BACKEND_API } from "../../utils/constant";
import { useNavigate } from "react-router";

const CreateOrganization = () => {
  const navigate = useNavigate();

  // Image
  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  // Form Setup
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(organizationSchema),

    defaultValues: {
      name: "",
      description: "",
      email: "",
      phone: "",
      website: "",

      organizationType: "other",

      foundedYear: "",

      location: {
        address: "",
        city: "",
        state: "",
        country: "",
      },

      members: [],
    },
  });

  // dynamic members
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  // Character Counter
  const descriptionValue = watch("description") || "";

  // Logo Upload
  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  // Banner Upload
  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setBannerFile(file);
    setBannerPreview(URL.createObjectURL(file));
  };

  // Submit Form
  const onSubmit = async (data) => {
    const token = await getToken();

    try {
      if (!logoFile) {
        return toast.error("Logo is required");
      }

      if (!bannerFile) {
        return toast.error("Banner is required");
      }

      // FormData Creation
      const formData = new FormData();

      formData.append("logo", logoFile);
      formData.append("banner", bannerFile);

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("website", data.website);

      formData.append("organizationType", data.organizationType);

      formData.append("foundedYear", data.foundedYear);

      formData.append("location", JSON.stringify(data.location));

      formData.append("members", JSON.stringify(data.members));

      formData.append("totalWorkshops", 0);
      formData.append("totalHackathons", 0);
      formData.append("totalCulturalEvents", 0);
      formData.append("totalRevenue", 0);

      // for (const [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      const res = await axios.post(`${ORG_BACKEND_API}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        // Reset Form
        reset();
        setLogoFile(null);
        setBannerFile(null);

        setLogoPreview("");
        setBannerPreview("");

        navigate("/organizer/organizations");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Failed to create organization",
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">
          Create Organization
        </h1>

        <p className="text-[#666666] mt-2">
          Create and manage your organization.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Image Section */}
        <section className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-5">Organization Images</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ImageUpload
              label="Organization Logo"
              preview={logoPreview}
              onChange={handleLogoChange}
            />

            <ImageUpload
              label="Organization Banner"
              preview={bannerPreview}
              onChange={handleBannerChange}
            />
          </div>
        </section>

        {/* Basic Info */}

        <section className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-5">Basic Information</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              label="Organization Name"
              required
              error={errors.name}
              {...register("name")}
            />

            <FormInput
              label="Email"
              required
              type="email"
              error={errors.email}
              {...register("email")}
            />

            <FormInput
              label="Phone"
              required
              error={errors.phone}
              {...register("phone")}
            />

            <FormInput
              label="Website"
              placeholder="https://example.com"
              type="url"
              error={errors.website}
              {...register("website")}
            />
          </div>

          {/* Organization Type */}

          <div className="mt-5">
            <label className="text-sm font-medium">Organization Type</label>

            <select
              {...register("organizationType")}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 "
            >
              <option value="college">College</option>

              <option value="company">Company</option>

              <option value="community">Community</option>

              <option value="startup">Startup</option>

              <option value="ngo">NGO</option>

              <option value="school">School</option>

              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}

          <div className="mt-5">
            <label className="text-sm font-medium">Description</label>

            <textarea
              rows={5}
              {...register("description")}
              className="
                mt-1
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
              "
            />

            <div className="flex justify-between mt-1">
              <span className="text-red-500 text-sm">
                {errors.description?.message}
              </span>

              <span className="text-xs text-gray-500">
                {descriptionValue.length}
              </span>
            </div>
          </div>
        </section>

        {/* Location */}

        <section className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-5">Location</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              label="Address"
              error={errors.location?.address}
              required
              placeholder="Sector 62"
              {...register("location.address")}
            />

            <FormInput
              label="City"
              error={errors.location?.city}
              required
              placeholder="Noida"
              {...register("location.city")}
            />

            <FormInput
              label="State"
              error={errors.location?.state}
              required
              placeholder="Uttar Pradesh"
              {...register("location.state")}
            />

            <FormInput
              label="Country"
              error={errors.location?.country}
              required
              placeholder="India"
              {...register("location.country")}
            />
          </div>
        </section>

        {/* Organization Details */}
        <section className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-5">Organization Details</h2>

          <FormInput
            label="Founded Year"
            type="number"
            error={errors.foundedYear}
            {...register("foundedYear")}
          />
        </section>

        {/* Members */}
        <section className="bg-white rounded-2xl border p-6">
          <MembersSection
            fields={fields}
            register={register}
            append={append}
            remove={remove}
            errors={errors}
          />
        </section>

        {/* Submit */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              px-8
              py-3
              rounded-xl
              bg-[#054C73]
              text-white
              font-medium
              hover:opacity-90
              disabled:opacity-60
            "
          >
            {isSubmitting ? "Creating..." : "Create Organization"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganization;
