import { GraphQLResolver } from 'pulumi-appsync-modules';
import PostDatasource from '../datasources/PostDatasource';

export default new GraphQLResolver('delete-post-resolver', {
  dataSource: PostDatasource.name,
  type: 'Mutation',
  field: 'deletePost',
  requestTemplate: `{
    "version": "2017-02-28",
    "payload": {}
}`,
  responseTemplate: JSON.stringify(true),
});
