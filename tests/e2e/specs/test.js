// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

import config from '../../config';

module.exports = {
  'default e2e tests': (browser) => {
    console.log(config);

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end();
  },
};
