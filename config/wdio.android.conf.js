const path = require("path");
const {config} = require('./wdio.shared.conf');

config.port = 4723;

config.specs = [
    '../test/specs/android/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:udid': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNoteNotepad.apk'),
        'appium:autoGrantPermissions': true,
    }
];
config.services = ['appium']
exports.config = config;
