export const typeDefs = `
type GPSPosition {
    id: ID!
    lat: String!
    lng: String!
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
    sensors: [ID!]
    lastKnownPosition: ID
}
`;

export default typeDefs;
