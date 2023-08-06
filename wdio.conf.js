exports.config = {
    runner: 'local',
    specs: [
      './test/specs/**/*.spec.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  }
  