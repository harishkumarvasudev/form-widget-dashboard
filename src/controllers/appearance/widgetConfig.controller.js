import logger from '../../../config/logger.js';
import { getWidgetConfigService } from '../../services/appearance/widgetConfig.service.js';

const getWidgetConfig = async (req, res) => {
  try {
    // Extract the 'id' parameter from the request parameters
    const { id } = req.params;

    // Call the service function to get the widget configuration based on the 'id'
    const result = await getWidgetConfigService({ id });

    // Check if the service function call was successful
    if (!result.status) {
      // If the service function call failed, return a failure response with the error
      return res.failure({ error: result });
    }

    // If the service function call was successful, return a success response with the data
    return res.success({ data: result.data });
  } catch (error) {
    // If an error occurred during the process, log the error and return a failure response
    logger.error(`Error occurred while getting widget: ${error}`);
    return res.failure({ error: error });
  }
};

export { getWidgetConfig };