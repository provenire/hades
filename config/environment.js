/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hades',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    // CSP
    contentSecurityPolicy: {
      'default-src': "'self' 'unsafe-eval' localhost",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' localhost:3000",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  // Simple Auth
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    //store: 'simple-auth-session-store:cookie',
    routeAfterAuthentication: 'dashboard',
    routeIfAlreadyAuthenticated: 'dashboard'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: '/oauth/token'
  };

  ENV['simple-auth-cookie-store'] = {
    cookieName: '_antiquarium_auth'
  };




  if (environment === 'development') {
    ENV.contentSecurityPolicy['connect-src'] = "'self' 'unsafe-eval' localhost:3000";
    ENV['simple-auth'].crossOriginWhitelist = ['http://localhost:3000/'];
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'http://localhost:3000/oauth/token'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
