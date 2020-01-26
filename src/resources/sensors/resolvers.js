import { sensorListMock } from '../../mocks/index';

export const getSensor = (context, { filters }) => {
    return sensorListMock.find(item => item.id === filters.id);
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
