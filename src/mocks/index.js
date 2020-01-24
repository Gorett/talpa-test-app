const createSensorData = () => ({
  time: new Date().toString(),
  value: Math.random(),
});

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const generateSensorData = () => new Array(randomInteger(5, 15))
  .fill('')
  .map(() => createSensorData());

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

export const sensorMock1 = {
  id: 'pzs2a1ha2as77a',
  name: 'sensor_33',
  machine: 'asf12l12as187',
  data: generateSensorData(),
};

export const sensorMock2 = {
  id: 'asw10cs921sd9k',
  name: 'sensor_34',
  machine: 'asf12l12as187',
  data: generateSensorData(),

};

export const sensorMock3 = {
  id: 'kg3ual12143h12',
  name: 'sensor_71',
  machine: 'as5kas207412j',
  data: generateSensorData(),

};

export const sensorMock4 = {
  id: 'hs1hfj1l09g231',
  name: 'sensor_77',
  machine: 'as12asf012pkl',
  data: generateSensorData(),

};

export const machineMock1 = {
  id: 'asf12l12as187',
  name: 'belt_conveyor_10',
  sensors: [sensorMock1, sensorMock2],
  lastKnownPosition: gpsPositionMock1,
};

export const machineMock2 = {
  id: 'as5kas207412j',
  name: 'belt_conveyor_12',
  sensors: [sensorMock3],
  lastKnownPosition: gpsPositionMock2,
};

export const machineMock3 = {
  id: 'as12asf012pkl',
  name: 'dreamed_huge_car_43',
  sensors: [sensorMock4],
  lastKnownPosition: gpsPositionMock3,
};

export const machineListMock = [
  machineMock1, machineMock2, machineMock3
];

export const sensorListMock = [
  sensorMock1, sensorMock2, sensorMock3, sensorMock4
];
