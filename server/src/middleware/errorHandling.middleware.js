const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({ message: error.message });
};

export default errorHandler;
