import { GraphQLModule } from 'pulumi-appsync-modules';
import * as fs from 'fs';

/**
 * Resolvers
 */
import AddTodoResolver from './resolvers/AddTodoResolver';
import DeleteTodoResolver from './resolvers/DeleteTodoResolver';
import GetTodoResolver from './resolvers/GetTodoResolver';
import ListTodosResolver from './resolvers/ListTodosResolver';
import UpdateTodoResolver from './resolvers/UpdateTodoResolver';

/**
 * Data sources
 */
import TodoDatasource from './datasources/TodoDatasource';

export default new GraphQLModule('todo', {
  typeDefs: fs.readFileSync(`${__dirname}/todo.graphql`, 'utf-8'),
  resolvers: [
    AddTodoResolver,
    DeleteTodoResolver,
    GetTodoResolver,
    ListTodosResolver,
    UpdateTodoResolver,
  ],
  datasources: [
    TodoDatasource
  ]
})
