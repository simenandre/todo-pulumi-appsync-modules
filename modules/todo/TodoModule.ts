import { GraphQLModule } from 'pulumi-appsync-modules';
import * as fs from 'fs';

export default new GraphQLModule('todo', {
  typeDefs: fs.readFileSync(`${__dirname}/todo.graphql`, 'utf-8'),
})
