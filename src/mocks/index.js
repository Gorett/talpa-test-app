export const gpsPositionMock = {
    id: 'ask12g12op8sl1',
    lat: '51.45657',
    lng: ', 7.01228',
};

export const sensorMock = {
    id: 'kg3ual12143h12',
    name: 'sensor_123',
    machine: null
};

export const machineMock1 = {
    id: 'asf12l12as187',
    name: 'belt_conveyor_10',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock,
};

export const machineMock2 = {
    id: 'as5kas207412j',
    name: 'belt_conveyor_12',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock,
};

export const machineMock3 = {
    id: 'as12asf012pkl',
    name: 'dreamed_huge_car_43',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock,
};

export const machineListMock = [
    machineMock1, machineMock2, machineMock3
];
