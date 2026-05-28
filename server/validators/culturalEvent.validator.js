import z from "zod";

export const createCulturalEventSchema = z.object({
    // event (base)
    title: z.string().trim().min(5),
    description: z.string().trim().min(15),
    thumbnail: z.string(),
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

    // validations for cultural event data
    performers: z.array(
        z.object({
            name: z.string().trim(),
            image: z.string().trim().default(""),
            role: z.string().trim()
        })
    ),
    dressCode: z.enum(['formal', 'semi-formal', 'casual', 'traditional', 'partywear', 'any']).default('any'),
    passes: z.array(
        z.object({
            name: z.string().trim(),
            price: z.number().min(0),
            quantity: z.number().min(1),
            soldCount: z.number().default(0),
            isSoldOut: z.boolean().default(false)
        })
    )
})