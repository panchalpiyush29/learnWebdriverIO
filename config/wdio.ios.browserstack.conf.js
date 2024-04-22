const path = require('path');
const {config} = require('./wdio.shared.conf.js');


config.user = 'piyushpanchal3';
config.key = 'DxyTKzt26Hb6qGjEskiy';

config.specs = [
    '../test/specs/ios/*.js'
];

config.capabilities = [
    {
        'platformName': 'iOS',
        'platformVersion': '17.4',
        'deviceName': 'iPhone 15 Pro Max',
        'automationName': 'XCuiTest',
        'app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
    }
];
config.services = ['browserstack']
exports.config = config;
