/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hades',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: { FEATURES: {} },
    APP: {
      apiBase: 'https://api.antiquarium.io'
    }
  };


  // Environment specifics
  if (environment === 'development') {
    ENV.APP.apiBase = 'http://localhost:3000';
  }


  // CSP
  ENV.contentSecurityPolicy = {
    'default-src': "'self' 'unsafe-eval'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' 'unsafe-eval' " + ENV.APP.apiBase,
    'img-src': "'self' res.cloudinary.com",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'media-src': "'self'"
  };


  // Simple Auth
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    routeAfterAuthentication:    'dashboard',
    routeIfAlreadyAuthenticated: 'dashboard',
    crossOriginWhitelist:        [ENV.APP.apiBase]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.APP.apiBase + '/oauth/token'
  };



  return ENV;
};
