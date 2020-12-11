import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

import { Todo } from '@my-org/todos';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    return {
      todos: await this.getData(),
    };
  }

  async getData() {
    try {
      const response = await axios.get<Todo[]>(
        process.env.apiPath || 'http://localhost:3333'
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}
