import { GraphQLDataSource } from 'pulumi-appsync-modules';
export default new GraphQLDataSource('todo-datasource', {
  name: 'TodoNone',
  type: 'NONE'
})
