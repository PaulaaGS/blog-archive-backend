import { Controller, Inject, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetAllPostsResponse } from '../interfaces/post';

@Controller('posts')
export class PostsController {
  constructor(@Inject(PostsService) private postsService: PostsService) {}

  @Get('/')
  getPosts(@Query('search') search?: string): Promise<GetAllPostsResponse> {
    return this.postsService.getPosts(search);
  }
}
