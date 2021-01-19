var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };

  function expect(a) {
    return {
      toEqual: function(b) {
        if (a === b) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }

  function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }

  function beforeEach(callback) {
    callback();
  }
