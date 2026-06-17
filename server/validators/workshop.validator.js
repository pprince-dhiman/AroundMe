import z from "zod";

export const createWorkshopSchema = z.object({
    // validations for event(base) data 
    title: z.string().trim().min(5),
    description: z.string().trim().min(15),
    mode: z.enum(['online', 'offline']),
    // venue and onlineLink depends on the mode, so they are handled in WorkshopService.
    venue: z.object({
        address: z.string().trim().optional(),
        city: z.string().trim().optional(),
        state: z.string().trim().optional(),
        country: z.string().trim().optional(),
    }).optional(),
    onlineLink: z.string().optional(),
    startDateTime: z.coerce.date(),
    endDateTime: z.coerce.date(),
    registrationDeadline: z.coerce.date(),
    maxParticipants: z.coerce.number().min(10),
    pricing: z.object({
        isFree: z.boolean(),
        amount: z.coerce.number().default(0),
        discount: z.coerce.number().default(0),
        currency: z.string().default("INR"),
    }),
    sponsors: z.array(z.string()).optional(),
    FAQs: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })).min(1),

    // validation for workshop data
    instructor: z.object({
        name: z.string().trim(),
        image: z.string().default(""),
        bio: z.string().trim()
    }),
    skillLevel: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
    prerequisites: z.array(z.string()).default([]),
    agenda: z.array(
        z.object({
            title: z.string().trim(),
            startTime: z.string().trim(),
            endTime: z.string().trim()
        })
    ).default([])
});