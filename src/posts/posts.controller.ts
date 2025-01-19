import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */
interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'kamja',
    title: '감자',
    content: '감자는 맛있다',
    likeCount: 10000,
    commentCount: 999,
  },
  {
    id: 2,
    author: 'kamja',
    title: '수미감자',
    content: '수미감자도 맛있다',
    likeCount: 10000,
    commentCount: 999,
  },
  {
    id: 3,
    author: '꽈자',
    title: '포카칩',
    content: '포카칩은 더 맛있다',
    likeCount: 10000,
    commentCount: 999,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 1) GET /posts
  // 모든 post를 다 가져온다.
  @Get()
  getPosts() {
    return posts;
  }
  // 2) GET /posts/:id
  // id에 해당하는 post를 가져온다.
  // ex) id=1일 경우 id가 1인 포스트를 가져온다.
  @Get(':id')
  getPost(@Param('id') id: string) {
    return posts.find((post) => post.id === +id);
  }
  // 3) POST /posts
  // POST를 생성한다.

  // 4) PUT /posts/id
  // POST를 변경한다.

  // 5) DELETE /posts/:id
  // id에 해당하는 POST를 삭제한다.
}
