import express, { type Express } from 'express';
import healthRoutes from './routes/health.routes';
import appointmentRoutes from './routes/appointment.routes';
import authRoutes from './routes/auth.routes';
import businessRoutes from './routes/business.routes';
import notificationRoutes from './routes/notification.routes';
import paymentRoutes from './routes/payment.routes';
import reviewRoutes from './routes/review.routes';
import searchRoutes from './routes/search.routes';
import userRoutes from './routes/user.routes';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * Auth API Routes
 */
app.use("/api/appointment", appointmentRoutes);


/**
 * Auth API Routes
 */
app.use("/api/auth", authRoutes);

/**
 * Business API Routes
 */
app.use("/api/business", businessRoutes);

/**
 * Notification API Routes
 */
app.use("/api/notification", notificationRoutes);

/**
 * Payment API Routes
 */
app.use("/api/payment", paymentRoutes);

/**
 * Review API Routes
 */
app.use("/api/review", reviewRoutes);

/**
 * Search API Routes
 */
app.use("/api/search", searchRoutes);

/**
 * User API Routes
 */
app.use("/api/users", userRoutes);


/**
 * API health check 
 */
app.use("/health", healthRoutes);

export default app;
