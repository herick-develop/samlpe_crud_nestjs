import { Repository } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';
export declare class TodoService {
    private supportRepository;
    constructor(supportRepository: Repository<TodoEntity>);
    findAll(): Promise<TodoEntity[]>;
}
