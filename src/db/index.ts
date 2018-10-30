import { Pool } from 'pg';

const pool = new Pool({
  user: 'Mickey',
  host: 'localhost',
  database: 'todo',
  password: '',
  port: 5432,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
