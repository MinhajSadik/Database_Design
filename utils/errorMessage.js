class ErrorMessage extends Error {
  constructor(message, statusCode, next) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(next(this), this.constructor);
  }
}

export default ErrorMessage;
