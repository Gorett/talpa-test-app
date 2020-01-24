import { sensorListMock } from '../../mocks/index';

export const getSensor = (context, { id }) => {
    return sensorListMock.find(item => item.id === id);
};

export const getSensors = () => {
    return sensorListMock;
};

export const resolvers = {
    Query: {
        sensor: getSensor,
        sensors: getSensors,
    },
};

export default resolvers;
