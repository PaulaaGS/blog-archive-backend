import { Controller, Inject, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetAllPostsResponse } from '../interfaces/post';

@Controller('posts')
export class PostsController {
  constructor(@Inject(PostsService) private postsService: PostsService) {}

  @Get('/')
  getAllPosts(): Promise<GetAllPostsResponse> {
    return this.postsService.getPosts();
  }
}
