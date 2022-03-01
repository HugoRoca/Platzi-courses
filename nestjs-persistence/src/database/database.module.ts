import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';
import * as sql from 'mssql';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'my_db_nest',
  password: '123456',
  port: 5432,
});

const config = {
  user: ``,
  password: ``,
  server: ``,
  port: 1433,
  database: ``,
  pool: {
    idleTimeoutMillis: 60 * 1000,
  },
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

const clientSQL = new sql.ConnectionPool(config);

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useValue: client,
    },
    {
      provide: 'SQL',
      useValue: clientSQL,
    },
  ],
  exports: ['API_KEY', 'PG', 'SQL'],
})
export class DatabaseModule {}
