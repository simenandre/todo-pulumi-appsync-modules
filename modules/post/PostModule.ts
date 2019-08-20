import { GraphQLModule } from 'pulumi-appsync-modules';
import * as fs from 'fs';

/**
 * Resolvers
 */
import AddPostResolver from './resolvers/AddPostResolver';
import DeletePostResolver from './resolvers/DeletePostResolver';
import GetPostResolver from './resolvers/GetPostResolver';
import ListPostsResolver from './resolvers/ListPostsResolver';
import UpdatePostResolver from './resolvers/UpdatePostResolver';

/**
 * Data sources
 */
import PostDatasource from './datasources/PostDatasource';

export default new GraphQLModule('post', {
  typeDefs: fs.readFileSync(`${__dirname}/post.graphql`, 'utf-8'),
  resolvers: [
    AddPostResolver,
    DeletePostResolver,
    GetPostResolver,
    ListPostsResolver,
    UpdatePostResolver,
  ],
  datasources: [
    PostDatasource
  ]
})
