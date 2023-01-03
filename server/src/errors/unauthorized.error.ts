import { ApiError } from "./api.error";

const UnauthorizedError = class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
};

export { UnauthorizedError };
