import { machineMock } from '../../mocks/index';

const getMachine = (context, id) => {
    return machineMock;
};

const getMachines = () => {
    // TODO load from DB
    return [machineMock];
};

const updateMachine = (input) => {
    // TODO implement update functionality
};

export const resolvers = {
    Query: {
        machine: getMachine,
        machines: getMachines,
    },
};

export default resolvers;
