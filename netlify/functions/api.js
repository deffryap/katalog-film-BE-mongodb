import serverless from 'serverless-http';
import app from '../../src/app.js';

// We are exporting the handler function that Netlify will run.
// `serverless` wraps our Express app to make it compatible.
export const handler = serverless(app);