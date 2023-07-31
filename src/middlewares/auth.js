import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import config from '../../config/config.js';
import logger from '../../config/logger.js';
import { DateTime } from 'luxon';

// Authenticate
const authenticateToken = async (req, res, next) => {
  try {

    // Auth header is expected in following format
    // const authHeader = req.headers['authorization'];

    // Authenticate the request if the microservice needs special authentication
    // Since this microservice is an INTERAL ONLY MicorService
    // Assumed that the authentication is not needed

    // if the same service is hosted on a different machine and exposed
    // to the internet, then the JWT based authentication
    // TOBE impletemented here

    next();
  } catch (error) {
    logger.error(`error happened while authenticating token or token expired ${error}`);
    return res.invalid({ error: { data: config.jwt.invalidTokenMessage } });
  }
};

export { authenticateToken };
