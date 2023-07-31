import path from 'path';
import express from 'express';
import compressPayLoad from './middlewares/payloadCompress.js';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

// config
import config from '../config/config.js';

// middlewares
import { setCache } from './middlewares/cache.js';
import { customHttpLogger } from './middlewares/customHttpLogger.js';
import { routeErrorHandler } from './middlewares/routeErrorHandler.js';
import { authenticateToken } from './middlewares/auth.js';
import response from './middlewares/response.js';

// routes
import { allRoutes } from './routes/routes.js';

// logger
import logger, { morganStream } from '../config/logger.js';
import os from 'os';

const startServer = () => {
  // Verify if the APP_NAME in the .env file is set correctly
  if (config.app.name !== 'formwidget-dashboard') {
    logger.crit(`.env file is not properly passed or check the app name`);
    console.log(`.env file is not properly passed or check the app name`);
    process.exit(0);
  }

  const app = express();

  // Middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(express.json());
  app.use(customHttpLogger);
  app.use(morgan('combined', { stream: morganStream }));
  app.use(compression({ filter: compressPayLoad, threshold: 0 }));
  app.use(response);
  app.use(setCache);
  app.use(authenticateToken); // Apply token authentication to all routes

  // Routes
  allRoutes(app);

  // Handle 404 Not Found errors
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  // Error handling middleware
  app.use(routeErrorHandler);

  const router = express.Router();

  const __dirname = path.resolve();

  console.log(`Number of CPUs: ${os.cpus().length}`);

  let server;

  // Check if HTTPS is enabled in the configuration
  if (config.app.https === 'true') {
    // If HTTPS is true, add SSL/TLS related code here for secure connections
  } else {
    /* for http only */
    // Start HTTP server
    server = app.listen(config.app.port, () => {
      logger.info(`HTTP server started on port ${config.app.port}`);
    });
  }

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    logger.crit(`Uncaught exception in the application: ${err}`);
  });

  // Handle unhandled rejections
  process.on('unhandledRejection', (err) => {
    logger.crit(`Unhandled rejection in the application: ${err}`);
  });

  // Gracefully handle SIGTERM signal
  process.on('SIGTERM', () => {
    logger.notice('Received SIGTERM signal');
    const serverRunning = server || sslServer;
    serverRunning.close(() => {
      logger.notice('Closing server');
      process.exit(0);
    });
  });
};

startServer();