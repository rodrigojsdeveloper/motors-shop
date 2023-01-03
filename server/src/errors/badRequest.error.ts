import { ApiError } from "./api.error";

const BadRequestError = class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
};

export { BadRequestError };
