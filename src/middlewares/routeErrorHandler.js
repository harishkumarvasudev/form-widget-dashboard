import logger from '../../config/logger.js';

const routeErrorHandler = (error, req, res, next) => {
  logger.crit(
    `unhandled route or controller ${req.method} ${req.protocol}://${req.subdomains}.${req.hostname}${req.originalUrl}`
  );
  res.notFound({ error: { data: 'Route Not Found' } });
};

export { routeErrorHandler };
