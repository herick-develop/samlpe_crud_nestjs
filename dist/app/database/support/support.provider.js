"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportProviders = void 0;
const todo_entity_1 = require("../../entity/todo.entity");
const typeorm_1 = require("typeorm");
exports.SupportProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'admin',
                database: 'todo',
                entities: [
                    todo_entity_1.TodoEntity
                ],
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=support.provider.js.map