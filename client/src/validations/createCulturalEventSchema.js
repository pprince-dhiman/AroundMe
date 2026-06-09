// createCulturalEventSchema.js

import { z } from "zod";
import { createEventSchema } from "./createEventSchema";

export const createCulturalEventSchema = createEventSchema
  .extend({
    performers: z
      .array(
        z.object({
          name: z
            .string()
            .trim()
            .min(2, "Performer name must be at least 2 characters")
            .max(50, "Performer name cannot exceed 50 characters"),

          image: z.string().trim(),

          role: z
            .string()
            .trim()
            .min(2, "Performer role is required")
            .max(50, "Performer role cannot exceed 50 characters"),
        }),
      )
      .min(1, "At least one performer is required"),

    dressCode: z.enum(
      ["formal", "semi-formal", "casual", "traditional", "partywear", "any"],
      {
        error: "Please select a dress code",
      },
    ),

    passes: z
      .array(
        z.object({
          name: z
            .string()
            .trim()
            .min(2, "Pass name must be at least 2 characters")
            .max(50, "Pass name cannot exceed 50 characters"),

          price: z.coerce.number().min(0, "Price cannot be negative"),

          quantity: z.coerce.number().min(1, "Quantity must be at least 1"),

          soldCount: z.coerce
            .number()
            .min(0, "Sold count cannot be negative")
            .default(0),

          isSoldOut: z.boolean().default(false),
        }),
      )
      .min(1, "At least one pass is required"),
  })
  .refine(
    (data) => data.passes.every((pass) => pass.soldCount <= pass.quantity),
    {
      path: ["passes"],
      message: "Sold count cannot exceed pass quantity",
    },
  );
