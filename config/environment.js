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
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://s3-us-west-1.amazonaws.com",
    'font-src': "'self' https://fonts.gstatic.com https://s3-us-west-1.amazonaws.com",
    'connect-src': "'self' 'unsafe-eval' " + ENV.APP.apiBase,
    'img-src': "'self' res.cloudinary.com https://s3-us-west-1.amazonaws.com",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com https://s3-us-west-1.amazonaws.com",
    'media-src': "'self' https://s3-us-west-1.amazonaws.com"
  };


  // Simple Auth
  ENV['simple-auth'] = {
    store:      'simple-auth-session-store:cookie',
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    routeAfterAuthentication:    'dashboard',
    routeIfAlreadyAuthenticated: 'dashboard',
    crossOriginWhitelist:        [ENV.APP.apiBase]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.APP.apiBase + '/oauth/token'
  };

  ENV['simple-auth-cookie-store'] = {
    cookieName: '_antiquarium_session'
  };



  return ENV;
};
