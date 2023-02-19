import ErrorMessage from "../utils/errorMessage.js";

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorMessage(message, 400, next);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorMessage(message, 400, next);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorMessage(message, 400, next);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorMessage(message, 400, next);
  }

  if (err.name === "NotFoundError") {
    const message = `Could Not Found expected route`;
    err = new ErrorMessage(message, 404, next);
  }

  if (err.name === "ValidatorError") {
    const message = `Validate your route path`;
    err = new ErrorMessage(message, 500, next);
  }

  if (err.name === "ReferenceError") {
    const message = `You have an ReferenceError`;
    err = new ErrorMessage(message, 500, next);
  }



  return res.status(err.status).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;
