const path = require('path');
const {config} = require('./wdio.shared.conf.js');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/ios/*.js'
];

config.capabilities = [
    {
        'platformName': 'iOS',
        'platformVersion': '17.4',
        'deviceName': 'iPhone 15 Pro Max',
        'automationName': 'XCuiTest',
        'app': 'bs://eede1118ccbdcfbfc1d6749102526954eab89998'
    }
];
config.services = ['browserstack']
exports.config = config;
