import {Post} from '../../model/Post';
import {ApiClient} from '../ApiClient';

export class PostClient extends ApiClient {
  async fetchPost(): Promise<Post[]> {
    try {
      let res = await this.axiosInstance.get<Post[]>('/posts');
      return res.data;
    } catch (error) {
      throw new Error('Error fetching postApi');
    }
  }
}
