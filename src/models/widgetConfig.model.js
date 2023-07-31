import { db } from './db.js';

// Function to create a new widget (to be implemented)
const createWidget = async (data) => {
  // This function is a placeholder for creating a new widget.
  // It will be implemented when the UI Dashboard for widget creation is in place.
  // dbConnection.ref("forms").set(obj, function(error) {
  //   if (error) {
  //     // The write failed...
  //     console.log("Failed with error: " + error)
  //   } else {
  //     // The write was successful...
  //     console.log("success")
  //   }
  // })
};

// Function to get widget configuration based on the provided id
const getWidgetConfig = async ({ id }) => {
  const ref = db.ref('forms');


  // await ref.push()


  // Query the database to get the widget configuration by formId
  // Use `equalTo` and `once` to fetch data from Firebase
  let snapShot = await ref.orderByChild('formId').equalTo(id).once('value');

  // Return the value of the snapshot, which represents the widget configuration
  return snapShot.val();
};

// Export the functions as a default export in an object
export default {
  createWidget,
  getWidgetConfig,
};