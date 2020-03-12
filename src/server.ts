import dotenvFlow from 'dotenv-flow';
import app from './app';

/**
 * Get config from .env.* files
 */
dotenvFlow.config();

/**
 * Start Express server.
 */
const PORT = process.env.PORT;
const RUN_MODE = app.get('env');

const server = app.listen(PORT, () => {
  console.log('  App is running at http://localhost:%d in %s mode', PORT, RUN_MODE);
});

export default server;
