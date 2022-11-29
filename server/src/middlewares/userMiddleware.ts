import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const userMiddleware = (
	error: Error & Partial<AppError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = error.statusCode ?? 500;
	const message = error.statusCode ? error.message : 'Internal server error.';
	
	return res.status(statusCode).json({ message });
}