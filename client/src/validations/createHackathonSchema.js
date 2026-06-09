import { z } from "zod";
import { createEventSchema } from "./createEventSchema";

export const createHackathonSchema = createEventSchema
  .extend({
    teamSize: z
      .object({
        min: z.coerce.number().min(1, "Minimum team size must be at least 1"),
        max: z.coerce.number().min(1, "Maximum team size must be at least 1"),
      })
      .refine((data) => data.max >= data.min, {
        path: ["max"],
        message:
          "Maximum team size must be greater than or equal to minimum team size",
      }),

    prizes: z
      .array(
        z.object({
          position: z.string().trim().min(1, "Position is required"),
          reward: z.string().trim().min(1, "Reward is required"),
        }),
      )
      .min(1, "At least one prize is required"),

    tracks: z
      .array(z.string().trim().min(1, "Track cannot be empty"))
      .min(1, "At least one track is required"),

    problemStatements: z
      .array(z.string().trim().min(1, "Problem statement cannot be empty"))
      .min(1, "At least one problem statement is required"),

    mentors: z
      .array(
        z.object({
          name: z.string().trim().min(2, "Mentor name is required"),
          image: z.string().optional(),
          role: z.enum(
            [
              "Software Engineer",
              "Senior Developer",
              "Tech Lead",
              "Founder",
              "Mentor",
              "AI Engineer",
              "Product Manager",
              "Designer",
            ],
            {
              message: "Please select a mentor role",
            },
          ),
        }),
      )
      .min(1, "At least one mentor is required"),

    judges: z
      .array(
        z.object({
          name: z.string().trim().min(2, "Judge name is required"),

          image: z.string().optional(),

          role: z.string().trim().min(2, "Judge role is required"),
        }),
      )
      .min(1, "At least one judge is required"),

    judgingCriteria: z
      .array(z.string().trim().min(1, "Criteria cannot be empty"))
      .min(1, "At least one judging criterion is required"),

    submissionDeadline: z.string().min(1, "Submission deadline is required"),

    rules: z
      .array(z.string().trim().min(1, "Rule cannot be empty"))
      .min(1, "At least one rule is required"),
  })

  .refine(
    (data) => new Date(data.submissionDeadline) <= new Date(data.endDateTime),
    {
      path: ["submissionDeadline"],
      message: "Submission deadline cannot be after event end date",
    },
  );
