import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */
interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('real') // /post/real Url로 매핑됨
  getPost(): Post {
    return {
      author: 'kamja',
      title: 'kamja',
      content: '감자는 맛있다',
      likeCount: 10000,
      commentCount: 999,
    };
  }
}
