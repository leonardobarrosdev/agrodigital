export class AppError extends Error {
	public readonly statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

export class BadRequestError extends AppError {
	constructor(message: string) {
		super(message, 400)
	}
}

export class UnauthorizedError extends AppError {
	constructor(message: string) {
		super(message, 401)
	}
}

export class ForbidenError extends AppError {
	constructor(message: string) {
		super(message, 403)
	}
}

export class NotFoundError extends AppError {
	constructor(message: string) {
		super(message, 404)
	}
}
