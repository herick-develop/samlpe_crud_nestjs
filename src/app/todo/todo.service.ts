import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @Inject('SUPPORT_REPOSITORY')
        private supportRepository: Repository<TodoEntity>,
      ) {}
    
      async findAll() {
        return await this.supportRepository.find();
      }
}