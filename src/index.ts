require('module-alias/register');
const { port, env } = require('@infra/vars');
const logger = require('@infra/logger');
const app = require('@infra/express');
const mysql = require('@infra/mysql');

const bootstrap = async () => {
  await mysql.connect();
  app.listen(port, () => {
    logger.info(`server started on port ${port} (${env})`);
  });
};
//asdfasfasfasfasf
//testtest
bootstrap();

/**
 * Exports express
 * @public
 */
module.exports = app;
