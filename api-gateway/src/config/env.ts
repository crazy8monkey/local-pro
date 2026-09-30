const port:number = Number(process.env.PORT) || 3000;
const nodeEnv= process.env.NODE_ENV || "developement";
const appointmentServiceUrl = process.env.APPOINTMENT_SERVICE_URL || "http://localhost:3001"
const authServiceUrl = process.env.AUTH_SERVICE_URL || "http://localhost:3002"
const businessServiceUrl = process.env.BUSINESS_SERVICE_URL || "http://localhost:3003"
const notificationServiceUrl = process.env.NOTIFICATION_SERVICE_URL || "http://localhost:3004"
const paymentServiceUrl = process.env.PAYMENT_SERVICE_URL || "http://localhost:3005"
const reviewServiceUrl = process.env.REVIEW_SERVICE_URL || "http://localhost:3006"
const searchServiceUrl = process.env.SEARCH_SERVICE_URL || "http://localhost:3007"
const userServiceUrl = process.env.USER_SERVICE_URL || "http://localhost:3008"


export const env = {
    port,
    nodeEnv,
    appointmentServiceUrl,
    authServiceUrl,
    businessServiceUrl,
    notificationServiceUrl,
    paymentServiceUrl,
    reviewServiceUrl,
    searchServiceUrl,
    userServiceUrl
}