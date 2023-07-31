// Set the NODE_ENV to 'development' by default if not provided in the environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application configuration
export default {
  app: {
    name: process.env.APP_NAME, // The name of the application
    port: process.env.PORT || 5000, // The port on which the Node.js server will run
    env: process.env.NODE_ENV, // The environment mode of the application (development, production, etc.)
    https: process.env.HTTPS, // Whether the application should use HTTPS or not
  },

  // Database configuration (Assuming it is for Firebase)
  database: {
    type: process.env.FIREBASE_TYPE, // The type of the Firebase database (e.g., firestore)
    project_id: process.env.FIREBASE_PROJECT_ID, // The Firebase project ID
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID, // Private key ID for authentication
    private_key: process.env.FIREBASE_PRIVATE_KEY, // Private key for Firebase authentication
    client_email: process.env.FIREBASE_CLIENT_EMAIL, // Client email for Firebase authentication
    client_id: process.env.FIREBASE_CLIENT_ID, // Client ID for Firebase authentication
    auth_uri: process.env.FIREBASE_AUTH_URI, // Authentication URI for Firebase
    token_uri: process.env.FIREBASE_TOKEN_URI, // Token URI for Firebase
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL, // Auth provider x509 cert URL for Firebase
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL, // Client x509 cert URL for Firebase
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN, // Universe domain for Firebase
    databaseURL: process.env.FIREBASE_DATABASE_URL
  },

  // Logging configuration
  log: {
    logLevel: process.env.LOG_LEVEL, // Log level for the application (e.g., debug, info, error)
    logSize: process.env.LOG_SIZE, // Log size configuration
    logInterval: process.env.LOG_INTERVAL, // Log interval configuration
  },

  // JWT (JSON Web Token) configuration for authentication
  jwt: {
    tokenSecret: process.env.JWT_TOKEN_SECRET, // Secret key for JWT token generation
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET, // Secret key for JWT refresh token generation
    invalidTokenMessage: 'Invalid Token', // Message to show when the JWT token is invalid
    expiryTime: process.env.JWT_EXPIRY_TIME || '900s', // Expiry time for JWT token
  },

  // Cache configuration
  cache: {
    cachePeriod: 1, // Cache period in seconds
  },

  // Standard API response messages
  standardResponse: {
    success: {
      status: 'ok', // Status code for successful responses
      message: 'success', // Message for successful responses
    },
    invalid: {
      status: 'failed', // Status code for invalid requests
      message: 'Invalid request', // Message for invalid requests
    },
    failure: {
      status: 'failed', // Status code for internal server errors
      message: 'Internal server error', // Message for internal server errors
    },
    notFound: {
      status: 'failed', // Status code for data not found errors
      message: 'data not found', // Message for data not found errors
    },
    notSupportedMethod: {
      status: 'failed', // Status code for unsupported HTTP methods
      message: 'http/s method not supported', // Message for unsupported HTTP methods
    },
    unauthorized: {
      status: 'failed', // Status code for unauthorized access
      message: 'Not Authorized to perform this action', // Message for unauthorized access
    },
  },
};