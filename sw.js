'use strict';

// Change this to your repository name
let APP_PATH = '/pwa-demo';

// Choose a different app prefix name
let APP_PREFIX = 'pwa_demo_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…).
// If you don't change the version, the service worker will give your
// users the old files!
let VERSION = 'version_00';

// The files to make available for offline use. make sure to add
// others to this list
let URLS = [
    `${APP_PATH}/`,
    `${APP_PATH}/index.html`,
    `${APP_PATH}/css/styles.css`,
    `${APP_PATH}/js/main.js`
]