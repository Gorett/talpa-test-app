import { machineListMock } from '../../mocks/index';

export const getMachine = (context, { id }) => {
    return machineListMock.find(item => item.id === id);
};

export const getMachines = () => {
    return machineListMock;
};

export const resolvers = {
    Query: {
        machine: getMachine,
        machines: getMachines,
    },
};

export default resolvers;
