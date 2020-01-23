import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './resources/machines/schema';
import resolvers from './resources/machines/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphql: true,
}));

app.listen(4201);
