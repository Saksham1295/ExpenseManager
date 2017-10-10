
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
  './e2e/spec/charts.spec.ts',
  './e2e/spec/Mailverification.spec.ts',
  './e2e/spec/account.spec.ts',
  './e2e/spec/addCategory.spec.ts',
  './e2e/spec/app.spec.ts',
  './e2e/spec/cardManager.spec.ts',
  './e2e/spec/cardSetting.spec.ts',
  './e2e/spec/categories.spec.ts',
  './e2e/spec/createCategory.spec.ts',
  './e2e/spec/creditCard.spec.ts',
  './e2e/spec/dashboard.spec.ts',
  './e2e/spec/deleteUser.spec.ts',
  './e2e/spec/forgetPass.spec.ts',
  './e2e/spec/loginComponent.spec.ts',
  './e2e/spec/register.spec.ts',
  './e2e/spec/resetPass.spec.ts',
  './e2e/spec/setPass.spec.ts',
  './e2e/spec/welcome.component.spec.ts',
  
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
