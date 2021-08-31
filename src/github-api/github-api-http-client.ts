import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GithubApiHttpClient {
  constructor(private httpService: HttpService) {}

  async findByUsername(username: string) {
    try {
      const url = `${process.env.API_GITHUB_URL}/users/${username}`;
      const { data } = await lastValueFrom(this.httpService.get(url));
      const userData = {
        login: data.login,
        id: data.id,
        node_id: data.node_id,
        name: data.name,
        html_url: data.html_url,
        repos_url: data.repos_url,
        updated_at: data.updated_at,
        created_at: data.created_at,
        email: data.email,
      };

      return userData;
    } catch (err) {
      const error = err.response;
      throw new HttpException(error.statusText, error.status);
    }
  }

  async findRepository(username: string) {
    const url = `${process.env.API_GITHUB_URL}/users/${username}/repos`;
    const [data] = await lastValueFrom(this.httpService.get(url));
    const dataRepos = [
      {
        id: data.id,
        node_id: data.node_id,
        name: data.name,
        full_name: data.full_name,
        description: data.description,
        html_url: data.html_url,
      },
    ];

    // console.log(data);
    console.log(dataRepos);

    return dataRepos;
  }
}
