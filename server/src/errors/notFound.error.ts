import { ApiError } from "./api.error";

const NotFoundError = class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
};

export { NotFoundError };
