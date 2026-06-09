import { z } from "zod";

const currentYear = new Date().getFullYear();

export const organizationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Organization name must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

  email: z.email("Enter a valid email"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must contain at least 10 digits"),

  website: z.string().trim().default(""),

  organizationType: z.enum([
    "college",
    "company",
    "community",
    "startup",
    "ngo",
    "school",
    "other",
  ]),

  foundedYear: z.coerce.number().min(1900).max(currentYear),

  location: z.object({
    address: z.string().trim().min(3, "Address is required"),
    city: z.string().trim().min(2, "City is required"),
    state: z.string().trim().min(2, "State is required"),
    country: z.string().trim().min(2, "Country is required"),
  }),

  members: z.array(
    z.object({
      user: z.string().trim().min(2, "Member name is required"),
      role: z.enum(["owner", "admin", "manager"]),
    }),
  ),
});
