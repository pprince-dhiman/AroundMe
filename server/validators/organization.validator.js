import z from "zod";

export const createOrgSchema = z.object({
    name: z.string().trim(),
    description: z.string().trim(),
    email: z.email().trim().toLowerCase(),
    phone: z.string().trim(),
    website: z.string().default(""),
    location: z.object({
        address: z.string().trim(),
        city: z.string().trim(),
        state: z.string().trim(),
        country: z.string().trim()
    }),
    organizationType: z.enum(["college", "company", "community", "startup", "ngo", "school", "other"]).default("other"),
    foundedYear: z.coerce.number().min(1900),
    members: z.array(
        z.object({
            user: z.string(),
            role: z.enum(["owner", "admin", "manager"]).default("manager")
        })
    ),
    totalWorkshops: z.coerce.number().default(0),
    totalHackathons: z.coerce.number().default(0),
    totalCulturalEvents: z.coerce.number().default(0),
})