import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './resources/machines/schema';
import resolvers from './resources/machines/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphql: true,
}));

app.listen(4000);
