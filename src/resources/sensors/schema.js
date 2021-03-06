export const typeDefs = `
type SensorData {
    time: String!
    value: Float!
}

type Sensor {
    id: ID!
    name: String!
    machine: Machine!
    data: [SensorData!]
}

input SensorFilters {
    id: ID!
    timestamp: String!
}
`;

export default typeDefs;
