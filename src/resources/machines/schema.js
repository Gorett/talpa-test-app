export const typeDefs = `
type GPSPosition {
    id: ID!
    lat: String!
    lng: String!
}

type Sensor {
    id: ID!
    name: String!
    machine: Machine!
}

type Machine {
    id: ID!
    name: String!
    sensors: [Sensor]
    lastKnownPosition: GPSPosition
}

type Query {
    machine(id: ID!): Machine
    machines: [Machine]
}

input MachineWhereUniqInput {
    id: ID!
    name: String!
    sensors: [ID!]
    lastKnownPosition: ID
}
`;

export default typeDefs;
