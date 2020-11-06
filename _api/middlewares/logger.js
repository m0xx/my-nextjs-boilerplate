const pino = require('pino');

// https://github.com/pinojs/pino-pretty
const httpLogger = require('pino-http')({
  prettyPrint: {
    messageFormat: false,
    translateTime: true
  }
});

const withLogger = () => handler => async (req, res) => {
  if (process.env.ENABLE_HTTP_LOGGER) {
    httpLogger(req, res);
  } else {
    req.log = pino({
      base: {
        url: req.url,
        method: req.method
      },
      prettyPrint: {
        messageFormat: '{method} {url} - {msg}',
        translateTime: true,
        ignore: 'pid,hostname,url,method'
      }
    });
  }

  await handler(req, res);
};

export default withLogger;
