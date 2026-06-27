import { z } from "zod";

export const createEventSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(5, "Title must be at least 5 characters")
      .max(50, "Title cannot exceed 50 characters"),

    description: z
      .string()
      .trim()
      .min(50, "Description must be at least 50 characters")
      .max(500, "Description cannot exceed 500 characters"),

    mode: z.enum(["online", "offline"], {
      error: "Please select event mode",
    }),

    venue: z.object({
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
    }),

    onlineLink: z.string().optional(),

    startDateTime: z.string().min(1, "Start date is required"),

    endDateTime: z.string().min(1, "End date is required"),

    registrationDeadline: z
      .string()
      .min(1, "Registration deadline is required"),

    maxParticipants: z.coerce
      .number()
      .min(10, "Minimum 10 participants required"),

    pricing: z.object({
      isFree: z.boolean(),
      amount: z.coerce.number().min(0),
      discount: z.coerce.number().min(0),
      currency: z.string().default("INR"),
    }),

    sponsors: z.array(z.string()).default([]),

    FAQs: z
      .array(
        z.object({
          question: z.string().trim().min(5, "Question is required"),
          answer: z.string().trim().min(5, "Answer is required"),
        }),
      )
      .min(1, "At least 1 FAQs are required"),
  })

  // Date Validations
  .refine((data) => new Date(data.endDateTime) > new Date(data.startDateTime), {
    path: ["endDateTime"],
    message: "End date must be after start date",
  })

  .refine(
    (data) =>
      new Date(data.registrationDeadline) < new Date(data.startDateTime),
    {
      path: ["registrationDeadline"],
      message: "Registration deadline must be before event start",
    },
  )

  // Pricing Validation
  .refine((data) => data.pricing.isFree || data.pricing.amount > 0, {
    path: ["pricing", "amount"],
    message: "Price must be greater than 0",
  })

  // Online Event Validation
  .refine(
    (data) =>
      data.mode !== "online" ||
      (data.onlineLink && data.onlineLink.trim().length > 0),
    {
      path: ["onlineLink"],
      message: "Online meeting link is required",
    },
  )

  // Offline Event Validation
  .refine(
    (data) =>
      data.mode !== "offline" ||
      (data.venue?.address?.trim() &&
        data.venue?.city?.trim() &&
        data.venue?.state?.trim() &&
        data.venue?.country?.trim()),
    {
      path: ["venue"],
      message: "Complete venue information is required",
    },
  );
