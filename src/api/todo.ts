import * as client from '@root/src/db';
import { Todo } from '@root/src/model';
import uuidv4 from 'uuid/v4';

export const getTodos = async () => {
  let result: Todo[] = [];
  await client
    .query('SELECT * FROM todo')
    .then((res) => {
      result = res.rows;
    })
    .catch((err) => {
      console.log('getTodos Error', err);
    });
  return result;
};

export const createTodo = async (title: string, content: string) => {
  let result: Todo[] = [];
  const text = `INSERT INTO todo (title, content, done, uid) VALUES($1, $2, false, '${uuidv4()}') RETURNING *`;
  await client
    .query(text, [title, content])
    .then((res) => {
      result = res.rows;
    })
    .catch((err) => {
      console.log('createTodo Error', err);
      result = [];
    });
  return result;
};

export const updateTodo = async (todo: Todo) => {
  let result: Todo[] = [];
  const text = `UPDATE todo SET (title, content, done) = ($1, $2, $3) WHERE uid = $4 RETURNING *`;
  await client
    .query(text, [todo.title, todo.content, todo.done, todo.uid])
    .then((res) => {
      result = res.rows;
    })
    .catch((err) => {
      console.log('updateTodo Error', err);
      result = [];
    });
  return result;
};

export const deleteTodo = async (uid: string) => {
  let result: Todo[] = [];
  const text = `DELETE FROM todo where uid = ${uid} RETURNING *`;
  await client
    .query(text)
    .then((res) => {
      result = res.rows;
    })
    .catch((err) => {
      console.log('deleteTodo Error', err);
      result = [];
    });
  return result;
};
