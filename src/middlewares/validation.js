import { StatusCodes } from 'http-status-codes';
import logger from '../../config/logger.js';

// Middleware function for validating request parameters
const validation = (validateSchema) => {
  return (req, res, next) => {
    // Merge request parameters, body, and query into a single object
    let parameters = { ...req.params, ...req.body, ...req.query };

    // Log the request parameters for debugging purposes
    console.log(`request parameters---------------`, parameters);

    // Validate the merged parameters against the provided schema
    const result = validateSchema.validate(parameters);

    // Check if there are validation errors in the result
    if (result.error) {
      // If there are validation errors, log them and return an invalid response
      logger.error(`Validation error: ${JSON.stringify(result.error)}`);
      return res.invalid({ error: result.error });
    }

    // If there are no validation errors, proceed to the next middleware or route handler
    next();
  };
};

export { validation };