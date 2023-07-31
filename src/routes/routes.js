import { WidgetRoute } from './widget.route.js';

// Define a function to set up all the routes for the application
const allRoutes = (app) => {
  // Mount the WidgetRoute under the '/widget' path
  app.use('/widget', WidgetRoute);
};

// Export the allRoutes function as a module
export { allRoutes };