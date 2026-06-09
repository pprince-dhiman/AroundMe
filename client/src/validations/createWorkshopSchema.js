import { z } from "zod";
import { createEventSchema } from "./createEventSchema";

export const createWorkshopSchema = createEventSchema.extend({
  instructor: z.object({
    name: z
      .string()
      .trim()
      .min(3, "Instructor name must be at least 3 characters")
      .max(50, "Instructor name cannot exceed 50 characters"),

    image: z.string().trim(),

    bio: z
      .string()
      .trim()
      .min(20, "Instructor bio must be at least 20 characters")
      .max(500, "Instructor bio cannot exceed 500 characters"),
  }),

  skillLevel: z.enum(["beginner", "intermediate", "advanced"], {
    error: "Please select a skill level",
  }),

  prerequisites: z.array(
    z.string().trim().min(2, "Prerequisite must be at least 2 characters"),
  ),

  agenda: z
    .array(
      z
        .object({
          title: z
            .string()
            .trim()
            .min(3, "Agenda title must be at least 3 characters")
            .max(100, "Agenda title cannot exceed 100 characters"),

          startTime: z.string().trim().min(1, "Start time is required"),

          endTime: z.string().trim().min(1, "End time is required"),
        })
        .refine((item) => item.endTime > item.startTime, {
          path: ["endTime"],
          message: "End time must be after start time",
        }),
    )
    .min(1, "At least one agenda item is required"),
});
