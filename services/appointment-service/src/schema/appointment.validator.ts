import { z } from 'zod';

export const createApointmentSchema = z.object({
    businessId: z.coerce.number().min(1),
    serviceName: z.string().trim().min(1).max(100),
    appointmentDate: z.iso.datetime()
});

export const appointIdSchema = z.object({
    appointmentId: z.coerce.number().min(1)
});

export const updateApointmentStatusSchema = z.object({
    status: z.enum([
        "confirmed",
        "completed",
        "cancelled"
    ])
});

export type CreateAppointmentInput = z.infer<typeof createApointmentSchema>;
export type UpdatePointmentStatusInput = z.infer<typeof updateApointmentStatusSchema>;