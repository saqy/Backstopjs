const args = require('minimist')(process.argv.slice(2)); // grabs the process args
const pathConfig = require('./paths.js');

const defaultPaths = ['/']; // By default it just checks the homepage
const scenarios = [];
let paths = '';
// The host to test
if (!pathConfig.testhost) {
  args.testhost = 'http://example.com/'; // Default test host
} else {
  args.testhost = pathConfig.testhost;
}
// The host to reference
if (!pathConfig.refhost) {
  args.refhost = 'http://example.com/'; // Default test host
} else {
  args.refhost = pathConfig.refhost;
}

if (args.pathfile) {
  paths = pathConfig.array;
} else {
  paths = defaultPaths; // keep with the default of just the homepage
}

for (let k = 0; k < paths.length; k += 1) {
  scenarios.push({
    label: paths[k],
    referenceUrl: args.refhost + paths[k],
    url: args.testhost + paths[k],
    hideSelectors: [],
    removeSelectors: [],
    selectors: [],
    readyEvent: null,
    delay: 5000,
    misMatchThreshold: 0.1,
  });
}
// Configuration
module.exports = {
  id: 'backstop_default',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480,
    },
    {
      label: 'tablet',
      width: 1024,
      height: 768,
    },
    {
      label: 'desktop',
      width: 1440,
      height: 900,
    },
  ],
  scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: true,
  debugWindow: false,
};
