import { z } from "zod";

export const createHackathonSchema = z.object({

    title: z.string().trim().min(5),
    description: z.string().trim().min(15),
    // category: z.enum(['Hackathon', 'Workshop', 'CulturalEvent']),
    thumbnail: z.string().optional().default(""),
    mode: z.enum(['online', 'offline']),
    // venue and onlineLink depends on the mode, so they are handled in hackathonService.
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
    })).min(2),

    // validations for hackathon data
    teamSize: z.object({
        min: z.coerce.number().min(1),
        max: z.coerce.number().min(1),
    }).refine(
        data => data.max >= data.min,
        {
            message: "max team size must be greater than min",
            path: ["max"]
        }
    ),
    prizes: z.array(z.object({
        position: z.string().trim(),
        reward: z.string().trim(),
    })).min(1),
    tracks: z.array(z.string().trim()).min(1),
    problemStatements: z.array(z.string().trim()).min(1),
    mentors: z.array(
        z.object({
            name: z.string().trim(),
            image: z.string().optional().default(""),
            role: z.enum([
                "",
                "Software Engineer",
                "Senior Developer",
                "Tech Lead",
                "Founder",
                "Mentor",
                "AI Engineer",
                "Product Manager",
                "Designer",
            ])
        })
    ).min(1),
    judges: z.array(z.object({
        name: z.string().trim(),
        image: z.string().optional().default(""),
        role: z.string().trim().default("")
    })).min(1),
    judgingCriteria: z.array(z.string().trim()).min(1),
    submissionDeadline: z.coerce.date(),
    rules: z.array(z.string().trim()).min(1)
});