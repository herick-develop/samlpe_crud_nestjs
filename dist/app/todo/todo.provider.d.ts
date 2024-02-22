import { DataSource } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';
export declare const TodoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TodoEntity>;
    inject: string[];
}[];
