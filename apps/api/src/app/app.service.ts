import { Injectable } from '@nestjs/common';
import { Todo } from '@my-org/todos';

@Injectable()
export class AppService {
  getData(): Todo[] {
    return [
      { message: 'Take out trash', done: false },
      { message: 'Continue using Nx', done: false },
    ];
  }
}
