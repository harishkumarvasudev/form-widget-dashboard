**FormWidget Dashboard**

*Description:* This project is a Node.js application that serves as a backend server for a Form Widget Dashboard. It provides APIs for managing widget configurations and forms.

### Installation

To install the project, follow the steps below:

1. Clone the repository from GitHub:

2. Navigate to the project directory:

   ```
   cd <repository>
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory of the project and add the required environment variables with their values. Here is an example of the `.env` file:

```
APP_NAME=formwidget-dashboard
PORT=5000
NODE_ENV=development
HTTPS=false
```

### Authentication

As its a demo purpose app, the authentication is disabled for intra requests.

### Database

The application communicates with a Firebase database for data storage and retrieval. The Firebase configuration settings are provided in the `.env` file.