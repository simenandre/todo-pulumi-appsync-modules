import { GraphQLResolver } from 'pulumi-appsync-modules';
import PostDatasource from '../datasources/PostDatasource';
import fakePost from '../__fixtures__/fakePost';

export default new GraphQLResolver('add-post-resolver', {
  dataSource: PostDatasource.name,
  type: 'Mutation',
  field: 'addPost',
  requestTemplate: `{
    "version": "2017-02-28",
    "payload": {}
}`,
  responseTemplate: JSON.stringify(fakePost()),
});
