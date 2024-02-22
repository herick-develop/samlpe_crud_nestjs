import { Module } from '@nestjs/common';
import { SupportModule } from '../database/support/support.module';
import { TodoProviders } from './todo.provider';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SupportProviders } from '../database/support/support.provider';

@Module({
  imports: [],
  providers: [
    ...TodoProviders,
    ...SupportProviders,
    TodoService,
  ],
  controllers: [TodoController],
  //exports: [TodoService]
})
export class TodoModule {}
