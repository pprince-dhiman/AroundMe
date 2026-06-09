import { z } from "zod";

export const updateOrganizationSchema = z.object({
  name: z.string().min(3, "Enter a valid name"),
  description: z.string().min(20, "Write a valid description"),
  email: z.email(),
  phone: z.string().min(10, "Enter a valid phone number"),
  website: z.string().optional(),

  organizationType: z.enum([
    "college",
    "company",
    "community",
    "startup",
    "ngo",
    "school",
    "other",
  ]),

  foundedYear: z.coerce.number().min(1900, "Company should be after 1900."),

  location: z.object({
    address: z.string().min(3, "Enter a valid address"),
    city: z.string().min(2, "Enter a valid city"),
    state: z.string().min(2, "Enter a valid state"),
    country: z.string().min(2, "Enter a valid country"),
  }),

  members: z.array(
    z.object({
      user: z.string().min(3, "Enter a valid name."),
      role: z.enum(["owner", "admin", "manager"]),
    }),
  ),
});
