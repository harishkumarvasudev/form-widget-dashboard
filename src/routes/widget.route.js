import express from 'express';

// Import the controller and validation functions for the widget configuration
import { getWidgetConfig } from '../controllers/appearance/widgetConfig.controller.js';
import { validateWidgetConfig } from './validation/widgetConfig.validate.js';

// Create a new router instance
const router = express.Router();

// Define the route for fetching the widget configuration by ID
router.get('/:id', validateWidgetConfig('getWidgetConfig'), getWidgetConfig);

// Export the router as the WidgetRoute module
export { router as WidgetRoute };