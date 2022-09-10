import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 5000,
  host: process.env.HOST || '0.0.0.0',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbUser: process.env.DB_USER || 'postgres',
  dbName: process.env.DB_USER || 'postgres',
};
