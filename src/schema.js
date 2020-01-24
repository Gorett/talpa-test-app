import merge from 'lodash.merge';
import { makeExecutableSchema } from 'graphql-tools';

import machinesResolvers from './resources/machines/resolvers';
import sensorsResolvers from './resources/sensors/resolvers';

import MachinesTypeDefs from './resources/machines/schema';
import SensorsTypeDefs from './resources/sensors/schema';

const resolvers = merge(machinesResolvers, sensorsResolvers);

export const Query = `
type Query {
    machine(id: ID!): Machine
    machines: [Machine]!
    sensor(id: ID!): Sensor
    sensors: [Sensor]!
}
`;

export default makeExecutableSchema({
  typeDefs: [Query, MachinesTypeDefs, SensorsTypeDefs],
  resolvers,
});
