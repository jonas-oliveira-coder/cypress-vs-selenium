const fs = require('fs');

const [ , , cypressTime, seleniumTime ] = process.argv;

const data = {
  timestamp: new Date().toISOString(),
  cypress_ms: Number(cypressTime),
  selenium_ms: Number(seleniumTime)
};

fs.writeFileSync('results.json', JSON.stringify(data, null, 2));
console.log("Results updated:", data);
