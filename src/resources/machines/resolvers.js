import { machineMock } from '../../mocks/index'

const getMachines = () => {
    // TODO load from DB
    return [machineMock];
};

const updateMachine = (input) => {
    // TODO implement update functionality
};

export const resolvers = {
    Query: {
        getMachines,
    },
    Mutation: {
        updateMachine,
    },
};

export default resolvers;
