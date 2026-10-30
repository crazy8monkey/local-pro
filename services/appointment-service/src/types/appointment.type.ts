export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface Appointment {
    id: number;
    businessId: number;
    userId: number;
    serviceName: string;
    appointmentDate: string;
    status: AppointmentStatus;
    createdAt: string;
}