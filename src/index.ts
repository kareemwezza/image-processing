import express from 'express';
import errorHandler from './middlewares/errorHandler';

import routes from './routes';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
