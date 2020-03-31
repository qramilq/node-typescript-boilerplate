import express from 'express';
import * as mainController from './controllers/main.controller';

// Create Express server
const app = express();

// Express configuration
// app.use(/* */);

/**
 * Primary app routes.
 */
app.get('/', mainController.index);

export default app;
