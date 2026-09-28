import express, { type Express } from 'express';
import healthRoutes from './routes/health.routes';
import appointmentRoutes from './routes/appointment.routes';
import authRoutes from './routes/auth.routes';
import businessRoutes from './routes/business.routes';
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
 * Auth API Routes
 */
app.use("/api/business", businessRoutes);

/**
 * User API Routes
 */
app.use("/api/users", userRoutes);


/**
 * API health check 
 */
app.use("/health", healthRoutes);

export default app;
