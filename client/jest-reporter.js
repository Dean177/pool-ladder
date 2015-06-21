jasmine.VERBOSE = true;
require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter("target/test-reports/");
jasmine.getEnv().addReporter(reporter);