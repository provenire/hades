/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hades',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: { FEATURES: {} },
    APP:      {}
  };


  // Environment specifics
  if (environment === 'development') {
    ENV.apiBase = 'http://localhost:3000';
  }

  if (environment === 'production') {
    ENV.apiBase = 'https://api.antiquarium.io';
  }


  // CSP
  ENV.contentSecurityPolicy = {
    'default-src': "'self' 'unsafe-eval'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' 'unsafe-eval' " + ENV.apiBase,
    'img-src': "'self' res.cloudinary.com",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'media-src': "'self'"
  };


  // Simple Auth
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    routeAfterAuthentication:    'dashboard',
    routeIfAlreadyAuthenticated: 'dashboard',
    crossOriginWhitelist:        [ENV.apiBase]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.apiBase + '/oauth/token'
  };



  return ENV;
};
