"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoProviders = void 0;
const todo_entity_1 = require("../entity/todo.entity");
exports.TodoProviders = [
    {
        provide: 'SUPPORT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(todo_entity_1.TodoEntity),
        inject: ['DATA_SOURCE'],
    }
];
//# sourceMappingURL=todo.provider.js.map