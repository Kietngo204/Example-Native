import {Container} from 'inversify';
import UserServices from '../services/UserServices';
import {PostClient} from '../networking/post/PostClient';

const container = new Container();

container
  .bind<UserServices>('UserServices')
  .toConstantValue(new UserServices());
container.bind<PostClient>('PostClient').toConstantValue(new PostClient());

export default container;
