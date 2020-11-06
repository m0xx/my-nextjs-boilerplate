class ApiError extends Error {
  constructor({ code, message, statusCode = 400 }) {
    super(message);

    this.code = code;
    this.statusCode = statusCode;
  }
}

ApiError.notFound = function(message = "Entity not found") {
  return new ApiError(
    ERROR_CODES.NOT_FOUND,
    message,
    404
  )
}

export const ERROR_CODES = {
  NOT_FOUND: "not_found"
}

export default ApiError;
