require('dotenv').config()
const {config} = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/android/*.js'
];

config.capabilities = [
    {
        'platformName': 'Android',
        'deviceName': 'Google Pixel 7 Pro',
        'automationName': 'UiAutomator2',
        'app': 'bs://eede1118ccbdcfbfc1d6749102526954eab89998',
        'autoGrantPermissions': true,
    }
]
config.services = ['browserstack']
exports.config = config;
