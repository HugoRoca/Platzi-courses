import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

import config from '../config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

// async function run() {
//   await client.connect();
//   const database = client.db('store');
//   const taskCollection = database.collection('tasks');
//   const tasks = await taskCollection.find().toArray();
//   console.log('-> tasks', tasks);
// }

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, port, host, dbName } =
          configService.mongo;

        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    // {
    //   provide: 'MONGO',
    //   useFactory: async (configService: ConfigType<typeof config>) => {
    //     const { connection, user, password, port, host, dbName } =
    //       configService.mongo;
    //     const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;
    //     const client = new MongoClient(uri);
    //     await client.connect();
    //     return client.db(dbName);
    //   },
    //   inject: [config.KEY],
    // },
  ],
  exports: ['API_KEY', MongooseModule],
})
export class DatabaseModule {}
