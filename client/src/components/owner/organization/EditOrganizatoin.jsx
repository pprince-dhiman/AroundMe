import axios from "axios";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getToken } from "@clerk/react";
import { toast } from "react-toastify";

import FormInput from "./FormInput";
import ImageUpload from "./ImageUpload";
import MembersSection from "./MembersSection";

import { organizationSchema } from "../../../validations/organizationSchema";
import { ORG_BACKEND_API } from "../../../utils/constant";
import { useDispatch } from "react-redux";
import { setDashboardOrgDetails } from "../../../features/dashboard/dashboardSlice";

const EditOrganization = ({ isOpen, onClose, org, events }) => {
  const dispatch = useDispatch();

  // files to choose, not choosen initially.
  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(organizationSchema),
  });

  // members (dynamic)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  // prefill form details
  useEffect(() => {
    if (!org) return;

    reset({
      name: org.name || "",
      description: org.description || "",
      email: org.email || "",
      phone: org.phone || "",
      website: org.website || "",

      organizationType: org.organizationType || "other",

      foundedYear: org.foundedYear || "",

      location: {
        address: org.location?.address || "",
        city: org.location?.city || "",
        state: org.location?.state || "",
        country: org.location?.country || "",
      },

      members: org.members || [],
    });

    // Existing image previews
    setLogoPreview(org.logo || "");
    setBannerPreview(org.banner || "");

    // Reset selected files
    setLogoFile(null);
    setBannerFile(null);
  }, [org, reset]);

  // Character Counter
  const descriptionValue = watch("description") || "";

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setBannerFile(file);
    setBannerPreview(URL.createObjectURL(file));
  };

  const submitForm = async(data) => {
    try {
      const token = await getToken();
      const formData = new FormData();

      // Only send files if user selected new ones
      if (logoFile) {
        formData.append("logo", logoFile);
      }
      if (bannerFile) {
        formData.append("banner", bannerFile);
      }

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("website", data.website);

      formData.append("organizationType", data.organizationType);

      formData.append("foundedYear", data.foundedYear);

      formData.append("location", JSON.stringify(data.location));

      formData.append("members", JSON.stringify(data.members));

      console.log([...formData.entries()]);

      const res = await axios.patch(`${ORG_BACKEND_API}/${org._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        toast.success(res.data.message || "Organization updated");
        // trying
        const updatedData = { org: res.data.updatedOrg, orgEvents: events };
        dispatch(setDashboardOrgDetails(updatedData));
        // -----
        onClose();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Failed to update organization",
      );
    }
  };

  // Don't Render if Closed
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className=" w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl ">
        {/* Header */}

        <div className=" sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4 ">
          <h2 className="text-2xl font-bold">Edit Organization</h2>

          <button
            onClick={onClose}
            className=" rounded-lg p-2 hover:bg-gray-100 "
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(submitForm)} className="space-y-8 p-6">
          {/* Images */}

          <section className="rounded-2xl border p-6">
            <h3 className="mb-5 text-xl font-semibold">Organization Images</h3>

            <div className="grid gap-6 md:grid-cols-2">
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

          <section className="rounded-2xl border p-6">
            <h3 className="mb-5 text-xl font-semibold">Basic Information</h3>

            <div className="grid gap-5 md:grid-cols-2">
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
                type="url"
                error={errors.website}
                {...register("website")}
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium">Organization Type</label>

              <select
                {...register("organizationType")}
                className=" mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 "
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

              <div className="mt-1 flex justify-between">
                <span className="text-sm text-red-500">
                  {errors.description?.message}
                </span>

                <span className="text-xs text-gray-500">
                  {descriptionValue.length}
                </span>
              </div>
            </div>
          </section>

          {/* Location */}

          <section className="rounded-2xl border p-6">
            <h3 className="mb-5 text-xl font-semibold">Location</h3>

            <div className="grid gap-5 md:grid-cols-2">
              <FormInput
                label="Address"
                error={errors.location?.address}
                {...register("location.address")}
              />

              <FormInput
                label="City"
                error={errors.location?.city}
                {...register("location.city")}
              />

              <FormInput
                label="State"
                error={errors.location?.state}
                {...register("location.state")}
              />

              <FormInput
                label="Country"
                error={errors.location?.country}
                {...register("location.country")}
              />
            </div>
          </section>

          {/* Organization Details */}

          <section className="rounded-2xl border p-6">
            <h3 className="mb-5 text-xl font-semibold">Organization Details</h3>

            <FormInput
              label="Founded Year"
              type="number"
              error={errors.foundedYear}
              {...register("foundedYear")}
            />
          </section>

          {/* Members */}

          <section className="rounded-2xl border p-6">
            <MembersSection
              fields={fields}
              register={register}
              append={append}
              remove={remove}
              errors={errors}
            />
          </section>

          {/* Footer */}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className=" rounded-xl border px-6 py-3 font-medium "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className=" rounded-xl bg-[#054C73] px-6 py-3 font-medium text-white disabled:opacity-60 "
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrganization;
