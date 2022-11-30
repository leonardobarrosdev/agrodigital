import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const userMiddleware = (
	err: Error & Partial<AppError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = err.statusCode ?? 500;
	const message = err.statusCode ? err.message : 'Internal server error.';
	console.error(err.message);
	return res.status(statusCode).json({ message });
}