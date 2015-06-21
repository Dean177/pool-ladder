jasmine.VERBOSE = true;
require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter("test-output");
jasmine.getEnv().addReporter(reporter);