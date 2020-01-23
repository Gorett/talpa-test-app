import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import machinesSchema from './resources/machines/schema';
import machinesResolvers from './resources/machines/resolvers';

const root = machinesResolvers;

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(machinesSchema),
    rootValue: root,
    graphql: true,
}));

app.listen(4201);
