import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    listAll(): Promise<import("../entity/todo.entity").TodoEntity[]>;
}
