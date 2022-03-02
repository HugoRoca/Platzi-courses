import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import * as sql from 'mssql';

import config from '../config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

const configSQL = {
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

const clientSQL = new sql.ConnectionPool(configSQL);

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      // TODO: exec functions async and easy for injects
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, port, dbName, password } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });

        client.connect();

        return client;
      },
      inject: [config.KEY],
    },
    {
      provide: 'SQL',
      useValue: clientSQL,
    },
  ],
  exports: ['API_KEY', 'PG', 'SQL'],
})
export class DatabaseModule {}
