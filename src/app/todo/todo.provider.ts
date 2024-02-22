import { DataSource } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';

export const TodoProviders = [
    {
        provide: 'SUPPORT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TodoEntity),
        inject: ['DATA_SOURCE'],
    }
]