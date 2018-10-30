import { Request, Response, Router } from 'express';
import * as todoServices from '@api/todo';

const todoRouter = (router: Router): Router => {
  router.get('/', async (req: Request, res: Response) => {
    const result = await todoServices.getTodos();
    res.status(200).send(result);
  });

  router.post('/create', async (req: Request, res: Response) => {
    const result = await todoServices.createTodo(
      req.body.title,
      req.body.content,
    );
    res.status(200).send(result);
  });

  router.put('/update', async (req: Request, res: Response) => {
    const result = await todoServices.updateTodo(req.body.todo);
    res.status(200).send(result);
  });

  router.delete('/destroy', async (req: Request, res: Response) => {
    const result = await todoServices.deleteTodo(req.body.uid);
    res.status(200).send(result);
  });

  return router;
};

export default todoRouter(Router());
