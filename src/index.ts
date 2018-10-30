import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import todoRouter from '@routes/todoRouter';

const app = express();
// View Settings
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
// Show requset info
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/todos', todoRouter);

app.listen(8080);
