if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  };
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  };
}
