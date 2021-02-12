exports.notFound = (req, res, next) => {
  const error = new Error(`not Found --- ${req.originalUrl}`);
  res.status(404);
  next(error);
};

exports.errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'woops error' : error.stack,
  });
};
