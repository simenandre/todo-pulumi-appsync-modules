import { GraphQLDataSource } from 'pulumi-appsync-modules';
export default new GraphQLDataSource('post-datasource', {
  name: 'PostNone',
  type: 'NONE'
})
