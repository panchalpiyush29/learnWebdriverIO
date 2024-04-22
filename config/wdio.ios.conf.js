const path = require('path');
const {config} = require('./wdio.shared.conf.js');

config.port = 4723;

config.specs = [
    '../test/specs/ios/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:platformVersion': '17.4',
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:automationName': 'XCuiTest',
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
    }
];
config.services = ['appium']
exports.config = config;
