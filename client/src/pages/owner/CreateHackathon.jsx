import { useFieldArray, useForm } from "react-hook-form";
import ImageUpload from "../../components/owner/organization/ImageUpload";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createHackathonSchema } from "../../validations/createHackathonSchema";
import FormInput from "../../components/owner/organization/FormInput";
import DateInput from "../../components/owner/organization/DateInput";
import FAQSections from "../../components/owner/event/common/FAQSections";
import PrizeSection from "../../components/owner/event/common/PrizeSection";
import TrackSection from "../../components/owner/event/common/TrackSection";
import ProblemSection from "../../components/owner/event/common/ProblemSection";
import MentorSection from "../../components/owner/event/common/MentorSection";
import JudgesSection from "../../components/owner/event/common/JudgesSections";
import JudgingCriteriaSection from "../../components/owner/event/common/JudgingCriteriaSection";
import RulesSection from "../../components/owner/event/common/RulesSection";
import { createHackathonDefaultValues } from "../../utils/defaultValues";
import PriceSection from "../../components/owner/event/common/PriceSection";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { getToken } from "@clerk/react";
import { toast } from "react-toastify";

const CreateHackathon = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createHackathonSchema),
    defaultValues: createHackathonDefaultValues,
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
    fields: trackField,
    append: addTrack,
    remove: deleteTrack,
  } = useFieldArray({
    control,
    name: "tracks",
  });

  const {
    fields: problemFields,
    append: addProblem,
    remove: deleteProblem,
  } = useFieldArray({
    control,
    name: "problemStatements",
  });

  const {
    fields: mentorFields,
    append: addMentor,
    remove: deleteMentor,
  } = useFieldArray({
    control,
    name: "mentors",
  });

  const {
    fields: judgesFields,
    append: addJudges,
    remove: deleteJudges,
  } = useFieldArray({
    control,
    name: "judges",
  });

  const {
    fields: judgingCriteriaFields,
    append: addJudgingCriteria,
    remove: deleteJudgingCriteria,
  } = useFieldArray({
    control,
    name: "judgingCriteria",
  });

  const {
    fields: ruleFields,
    append: addRule,
    remove: deleteRule,
  } = useFieldArray({
    control,
    name: "rules",
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
    formData.append("teamSize", JSON.stringify(data.teamSize));
    formData.append("prizes", JSON.stringify(data.prizes));
    formData.append("tracks", JSON.stringify(data.tracks));
    formData.append(
      "problemStatements",
      JSON.stringify(data.problemStatements),
    );
    formData.append("mentors", JSON.stringify(data.mentors));
    formData.append("judges", JSON.stringify(data.judges));
    formData.append("judgingCriteria", JSON.stringify(data.judgingCriteria));
    formData.append(
      "submissionDeadline",
      JSON.stringify(data.submissionDeadline),
    );
    formData.append("rules", JSON.stringify(data.rules));

    try {
      setIsSubmitting(true);

      const res = await axios.post(
        `http://localhost:8000/api/v1/orgs/${orgId}/hackathons`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset(createHackathonDefaultValues);
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
        <h1 className="text-3xl font-bold text-[#333333]">Create Hackathon</h1>

        <p className="text-[#666666] mt-2">Create and manage your Hackathon.</p>
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
              label="Hackathon Thumbnail"
              preview={thumbnailPreview}
              onChange={handleThumbnailChange}
            />

            <div className="pt-8">
              <FormInput
                label="Hackathon Name"
                required
                error={errors.title}
                {...register("title")}
              />

              <div className="mt-5">
                <label className="text-sm font-medium">Hackathon mode</label>
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
              label="Maximum Teams"
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

        {/* Hackathon detail */}
        <section className="bg-white rounded-2xl border p-6 my-5">
          <h2 className="text-xl font-semibold my-5">Hackathon Detail</h2>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-2">
              <DateInput
                label="Submission Deadline"
                error={errors.submissionDeadline}
                required
                type="datetime-local"
                {...register("submissionDeadline")}
              />
            </div>
            <div />
            <div className="col-span-">
              <FormInput
                label="Team size (min)"
                error={errors.teamSize?.min}
                required
                type="number"
                {...register("teamSize.min")}
              />
            </div>
            <div />
            <div className="col-span-">
              <FormInput
                label="Team size (max)"
                error={errors.teamSize?.max}
                required
                type="number"
                {...register("teamSize.max")}
              />
            </div>
          </div>
          {/* Prize of hackathon */}
          <PrizeSection register={register} error={errors} />
          {/* Pricing secition */}
          <PriceSection register={register} watch={watch} errors={errors} />

          <TrackSection
            trackField={trackField}
            register={register}
            addTrack={addTrack}
            deleteTrack={deleteTrack}
            errors={errors}
          />
          <ProblemSection
            problemFields={problemFields}
            addProblem={addProblem}
            deleteProblem={deleteProblem}
            register={register}
            errors={errors}
          />
          <MentorSection
            mentorFields={mentorFields}
            addMentor={addMentor}
            deleteMentor={deleteMentor}
            register={register}
            errors={errors}
          />
          <JudgesSection
            judgesFields={judgesFields}
            addJudges={addJudges}
            deleteJudges={deleteJudges}
            register={register}
            errors={errors}
          />
          <JudgingCriteriaSection
            judgingCriteriaFields={judgingCriteriaFields}
            addJudgingCriteria={addJudgingCriteria}
            deleteJudgingCriteria={deleteJudgingCriteria}
            register={register}
            errors={errors}
          />
          <RulesSection
            ruleFields={ruleFields}
            addRule={addRule}
            deleteRule={deleteRule}
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
            {isSubmitting ? "Creating..." : "Create Organization"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateHackathon;
