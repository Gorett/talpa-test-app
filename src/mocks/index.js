export const gpsPositionMock = {
    lat: '51.45657',
    lng: ', 7.01228',
};

export const sensorMock = {
    name: 'sensor_123',
    machine: null
};

export const machineMock = {
    id: 'asf12l12as187',
    name: 'belt_conveyor_2',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock,
};
