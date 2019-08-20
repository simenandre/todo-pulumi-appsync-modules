import { GraphQLApi } from 'pulumi-appsync-modules'
import TodoModule from './modules/todo/TodoModule';
import PostModule from './modules/post/PostModule';

export default new GraphQLApi('api', {
  name: 'PAM API',
  authenticationType: 'API_KEY',
  modules: [
    TodoModule,
    PostModule,
  ]
});
