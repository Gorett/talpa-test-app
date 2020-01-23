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

export const machineMock = {
    id: 'asf12l12as187',
    name: 'belt_conveyor_2',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock,
};
