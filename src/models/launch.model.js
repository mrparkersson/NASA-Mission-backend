// new Map creates a new map
const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchData: new Date('December 27,2030'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

//set on method takes a key and a value, in our case, the key is lauch.flightNumber and the key is launch
//so when we call launches.get(100) we expect the launch object
launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
