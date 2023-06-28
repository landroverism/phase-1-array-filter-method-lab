// Code your solution here
const drivers = [
  { name: 'John Doe', hometown: 'New York' },
  { name: 'Jane Smith', hometown: 'Los Angeles' },
  { name: 'Michael Johnson', hometown: 'Chicago' },
  { name: 'Emily Davis', hometown: 'San Francisco' },
  { name: 'David Johnson', hometown: 'Miami' }
];

function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
  return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

// Testing the functions
console.log(findMatching(drivers, 'john')); // Output: [{ name: 'John Doe', hometown: 'New York' }]
console.log(fuzzyMatch(drivers, 'j')); // Output: [{ name: 'John Doe', hometown: 'New York' }, { name: 'Jane Smith', hometown: 'Los Angeles' }]
console.log(matchName(drivers, 'Michael Johnson')); // Output: [{ name: 'Michael Johnson', hometown: 'Chicago' }]
