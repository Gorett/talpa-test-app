export const gpsPositionMock1 = {
    id: 'ask12g12op8sl1',
    lat: '51.45633',
    lng: '7.01297',
};

export const gpsPositionMock2 = {
    id: 'ask12g12op8sl1',
    lat: '51.45321',
    lng: '7.01112',
};

export const gpsPositionMock3 = {
    id: 'ask12g12op8sl1',
    lat: '51.45792',
    lng: '7.01416',
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
    lastKnownPosition: gpsPositionMock1,
};

export const machineMock2 = {
    id: 'as5kas207412j',
    name: 'belt_conveyor_12',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock2,
};

export const machineMock3 = {
    id: 'as12asf012pkl',
    name: 'dreamed_huge_car_43',
    sensors: [sensorMock],
    lastKnownPosition: gpsPositionMock3,
};

export const machineListMock = [
    machineMock1, machineMock2, machineMock3
];
