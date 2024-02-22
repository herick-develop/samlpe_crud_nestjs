import { Injectable } from '@nestjs/common';
import { TodoEntity } from 'src/app/entity/todo.entity';
import { DataSource } from 'typeorm';

export const SupportProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
          const dataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin',
            database: 'todo',
            entities: [
                TodoEntity
            ],
            //synchronize: true,
          });
    
          return dataSource.initialize();
        },
    },
]