// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vulcan-resources-manager.js.
import { name as packageName } from "meteor/vulcan-resources-manager";

// Write your tests here!
// Here is an example.
Tinytest.add('vulcan-resources-manager - example', function (test) {
  test.equal(packageName, "vulcan-resources-manager");
});
