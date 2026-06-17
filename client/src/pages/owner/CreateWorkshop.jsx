import { zodResolver } from "@hookform/resolvers/zod";
import { createWorkshopSchema } from "../../validations/createWorkshopSchema";
import { useFieldArray, useForm } from "react-hook-form";
import { createWorkshopDefaultValues } from "../../utils/defaultValues";
import axios from "axios";
import { toast } from "react-toastify";
import FAQSections from "../../components/owner/event/common/FAQSections";
import DateInput from "../../components/owner/organization/DateInput";
import FormInput from "../../components/owner/organization/FormInput";
import ImageUpload from "../../components/owner/organization/ImageUpload";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getToken } from "@clerk/react";
import PriceSection from "../../components/owner/event/common/PriceSection";
import PreRequisiteSection from "../../components/owner/event/common/PreRequisiteSection";
import AgendaSection from "../../components/owner/event/common/AgendaSection";

const CreateWorkshop = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createWorkshopSchema),
    defaultValues: createWorkshopDefaultValues,
  });

  const {
    fields: faqsField,
    append: addFAQ,
    remove: deleteFAQ,
  } = useFieldArray({
    control,
    name: "FAQs",
  });

  const {
    fields: prerequisiteFields,
    append: addPrerequisite,
    remove: deletePrerequisite,
  } = useFieldArray({
    control,
    name: "prerequisites",
  });

  const {
    fields: agendaFields,
    append: addAgenda,
    remove: deleteAgenda,
  } = useFieldArray({
    control,
    name: "agenda",
  });

  const mode = watch("mode");

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumnailPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const { orgId } = params;

  const submitForm = async (data) => {
    const token = await getToken();

    const formData = new FormData();

    formData.append("thumbnail", thumbnail);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("mode", mode);
    formData.append("venue", JSON.stringify(data.venue));
    formData.append("onlineLink", data.onlineLink);
    formData.append("startDateTime", data.startDateTime);
    formData.append("endDateTime", data.endDateTime);
    formData.append("registrationDeadline", data.registrationDeadline);
    formData.append("maxParticipants", data.maxParticipants);
    formData.append("pricing", JSON.stringify(data.pricing));
    formData.append("sponsors", JSON.stringify(data.sponsors));
    formData.append("FAQs", JSON.stringify(data.FAQs));
    formData.append("instructor", JSON.stringify(data.instructor));
    formData.append("skillLevel", JSON.stringify(data.skillLevel));
    formData.append("prerequisites", JSON.stringify(data.prerequisites));
    formData.append("agenda", JSON.stringify(data.agenda));

    try {
      setIsSubmitting(true);

      const res = await axios.post(
        `http://localhost:8000/api/v1/orgs/${orgId}/workshops`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset(createWorkshopDefaultValues);
        setThumbnail(null);
        setThumnailPreview(null);
        navigate(`/organizer/organizations/${orgId}`);
      } else {
        toast.warning(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnail(file);
    setThumnailPreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Create Workshop</h1>

        <p className="text-[#666666] mt-2">Create and manage your Workshop.</p>
      </div>

      <form
        onSubmit={handleSubmit(submitForm, (errors) => {
          console.log("Validation Errors:", errors);
        })}
      >
        <section className="bg-white rounded-2xl border p-6 my-5">
          <h2 className="text-xl font-semibold mb-5">Basic Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ImageUpload
              label="Workshop Thumbnail"
              preview={thumbnailPreview}
              onChange={handleThumbnailChange}
            />

            <div className="pt-8">
              <FormInput
                label="Workshop Title"
                required
                error={errors.title}
                {...register("title")}
              />

              <div className="mt-5">
                <label className="text-sm font-medium">Workshop mode</label>
                <span className="text-red-500 ml-1">*</span>

                <select
                  {...register("mode")}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 "
                  required
                >
                  <option value="">-Select-</option>
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
                </select>
              </div>
            </div>
          </div>

          {/* description */}
          <div>
            <label htmlFor="description">Description</label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <div>
            <textarea
              rows={5}
              {...register("description")}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3"
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
        </section>

        {/* event details */}
        <section className="bg-white rounded-2xl border p-6 my-5">
          {mode ? (
            mode === "offline" ? (
              <>
                <h2 className="text-xl font-semibold mb-5">Venue</h2>

                <div className="grid md:grid-cols-2 gap-5">
                  <FormInput
                    label="Address"
                    error={errors.venue?.address}
                    {...register("venue.address")}
                  />

                  <FormInput
                    label="City"
                    error={errors.venue?.city}
                    {...register("venue.city")}
                  />

                  <FormInput
                    label="State"
                    error={errors.venue?.state}
                    {...register("venue.state")}
                  />

                  <FormInput
                    label="Country"
                    error={errors.venue?.country}
                    {...register("venue.country")}
                  />
                </div>
              </>
            ) : (
              <FormInput
                label="Online Link"
                error={errors.onlineLink}
                {...register("onlineLink")}
              />
            )
          ) : (
            ""
          )}

          <h2 className="text-xl font-semibold my-5">Date & Time</h2>

          <div className="grid grid-cols-3 gap-2">
            <DateInput
              label="Registration Deadline"
              error={errors.registrationDeadline}
              required
              type="datetime-local"
              {...register("registrationDeadline")}
            />
            <DateInput
              label="Start Date & Time"
              error={errors.startDateTime}
              required
              type="datetime-local"
              {...register("startDateTime")}
            />
            <DateInput
              label="End Date & Time"
              error={errors.endDateTime}
              required
              type="datetime-local"
              {...register("endDateTime")}
            />
          </div>

          <h2 className="text-xl font-semibold my-5">Additional Information</h2>

          <div className="grid grid-cols-4">
            <DateInput
              label="Maximum Participants"
              type="number"
              error={errors.maxParticipants}
              {...register("maxParticipants")}
            />
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl border p-6 my-5">
          <FAQSections
            faqsField={faqsField}
            register={register}
            addFAQ={addFAQ}
            deleteFAQ={deleteFAQ}
            errors={errors}
          />
        </section>

        {/* Workshop detail */}
        <section className="bg-white rounded-2xl border p-6 my-5">
          <h2 className="text-xl font-semibold my-5">Workshop Detail</h2>

          {/* Pricing section */}
          <PriceSection register={register} watch={watch} errors={errors} />

          {/* Instructor section */}
          <div className="my-5">
            <h3 className="text-lg font-medium">Instructor Details</h3>
            <div className="grid grid-cols-4 gap-5">
              <div>
                <FormInput
                  label="Name"
                  error={errors.instructor?.name}
                  required
                  {...register("instructor.name")}
                />
                <input type="image" hidden {...register("instructor.image")} />
              </div>
              <div className="col-span-3">
                <FormInput
                  label="Bio"
                  error={errors.instructor?.bio}
                  required
                  {...register("instructor.bio")}
                />
              </div>
            </div>
          </div>

          {/* skill Level */}
          <div className="my-5 flex items-center gap-10">
            <h3 className="text-lg font-medium w-1/3">
              Skill Level to attend the Workshop :
            </h3>
            <select
              {...register("skillLevel")}
              className="mt-1 w-1/4 rounded-lg border border-gray-300 px-4 py-2.5 "
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* prerequisites */}
          <PreRequisiteSection
            prerequisiteFields={prerequisiteFields}
            addPrerequisite={addPrerequisite}
            deletePrerequisite={deletePrerequisite}
            register={register}
            errors={errors}
          />

          {/* agenda */}
          <AgendaSection
            agendaFields={agendaFields}
            addAgenda={addAgenda}
            deleteAgenda={deleteAgenda}
            register={register}
            errors={errors}
          />
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-xl bg-[#054C73] text-white font-medium hover:opacity-90 disabled:opacity-60 "
          >
            {isSubmitting ? "Creating..." : "Create Workshop"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkshop;
