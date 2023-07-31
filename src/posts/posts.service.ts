import { Injectable } from '@nestjs/common';
import { GetAllPostsResponse, Post } from '../interfaces/post';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService) {}

  async getPosts(search?: string): Promise<GetAllPostsResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get<Post[]>(API_URL),
    );

    if (!search) {
      return data;
    }

    const searchLowerCase = search.toLowerCase();

    return data
      .filter((post) => post.title.toLowerCase().includes(searchLowerCase))
      .sort((a, b) => b.title.length - a.title.length);
  }
}
