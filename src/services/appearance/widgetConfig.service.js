import logger from '../../../config/logger.js';
import widgetConfigModel from '../../models/widgetConfig.model.js';

/**
 * Fetches the configuration for a specific widget by ID
 * @param {Object} params - The request parameters containing the widget ID.
 * @returns {Object} An object containing the status and data of the widget configuration.
 */
const getWidgetConfigService = async ({ id }) => {
  try {
    // Call the model function to retrieve the widget configuration from the database
    const result = await widgetConfigModel.getWidgetConfig({ id });

    // If the widget configuration is not found, return status as false and a message
    if (!result) {
      return { status: false, data: 'Widget not found' };
    }

    // If the widget configuration is found, return status as true and the configuration data
    return { status: true, data: Object.values(result) };
  } catch (error) {
    // If there's an error while fetching the widget configuration, log the error and return status as false
    logger.error(`Error occurred while fetching the widget: ${error}`);
    return { status: false, data: 'Database failure' };
  }
};

export { getWidgetConfigService };