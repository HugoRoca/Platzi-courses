import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { ConnectionPool, VarChar } from 'mssql';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPG: Client,
    @Inject('SQL') private clientSQL: ConnectionPool,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    return `Hello World! ${this.configService.apiKey} - ${this.configService.database.name}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPG.query('SELECT * FROM tasks', (err, res) => {
        if (err) reject(err);
        console.log(res.rows);
        resolve(res.rows);
      });
    });
  }

  async getDataFromSQL(document: string) {
    let result;
    const pool = await this.clientSQL.connect();

    try {
      result = pool
        .request()
        .input('document', VarChar, document)
        .execute('GetPostulantDataToTestNestJs');
    } catch (error) {
      console.error(error);
    }

    return result;
  }
}
