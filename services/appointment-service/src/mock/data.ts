import type { Appointment } from "../types/appointment.type";

export const appointments: Appointment[] = [
    {
        id: 1,
        userId: 1,
        businessId: 1,
        serviceName: "Initial consultation",
        appointmentDate: "2026-11-01T10:00:00.000Z",
        status: "pending",
        createdAt: "2026-10-20T12:00:00.000Z"
    },
    {
        id: 2,
        userId: 1,
        businessId: 1,
        serviceName: "Standard service",
        appointmentDate: "2026-11-02T14:00:00.000Z",
        status: "confirmed",
        createdAt: "2026-10-21T12:00:00.000Z"
    }
];