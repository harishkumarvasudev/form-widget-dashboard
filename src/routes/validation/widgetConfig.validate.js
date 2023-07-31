import Joi from 'joi';
import logger from '../../../config/logger.js';

// Function to perform request validation based on the controllerName
const validate = (controllerName) => {
  // Get the validation schema based on the controllerName
  const schema = getValidationObject(controllerName);

  // Throw an error if the schema is not found for the controllerName
  if (!schema) {
    throw Error('API validation is not available');
  }

  // Return an async middleware function to perform validation
  return async (req, res, next) => {
    try {
      // Merge parameters from req.params, req.query, and req.body
      let parameters = {};

      if (req.params) {
        parameters = { ...req.params };
      }

      if (req.query) {
        parameters = { ...parameters, ...req.query };
      }

      if (req.body) {
        parameters = { ...parameters, ...req.body };
      }

      // Validate the parameters using the schema
      const result = await schema.validateAsync(parameters);

      // If validation is successful, move to the next middleware
      next();
    } catch (error) {
      console.error(`Error occurred in validation middleware: ${error}`);
      logger.error(
        `Error occurred in validation part for controller ${controllerName}, error: ${JSON.stringify(
          error
        )}`
      );
      return res.invalid({ error: { data: error.message } });
    } finally {
      // Clear the controllerName to prevent memory leaks
      controllerName = null;
    }
  };
};

// Function to get the validation schema based on the controllerName
const getValidationObject = (controllerName) => {
  switch (controllerName) {
    case 'getWidgetConfig':
      // Define and return the validation schema for 'getWidgetConfig' controller
      return Joi.object({
        id: Joi.string().required(),
      });

    default:
      // Return false if no validation schema is found for the controllerName
      return false;
  }
};

// Export the validate function as a named export with an alias
export { validate as validateWidgetConfig };