export const typeDefs = `
type GPSPosition {
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

input MachineWhereUniqInput {
    id: ID!
    name: String!
    sensors: [Sensor!]
    lastKnownPosition: GPSPosition
}
`;

export default typeDefs;
