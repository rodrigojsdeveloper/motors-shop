import { ApiError } from "./api.error";

const NotFoundError = class NotFoundError extends ApiError {
  constructor(name: string) {
    super(`${name} not found`, 404);
  }
};

export { NotFoundError };
