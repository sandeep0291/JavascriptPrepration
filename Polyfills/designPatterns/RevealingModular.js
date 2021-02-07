let RevealingModularPattern = (function() {
  'use strict';

  let _privateProperty = 'Hello World';
  let publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

RevealingModularPattern.publicMethod(); // outputs 'Hello World'
console.log(RevealingModularPattern.publicProperty); // outputs 'I am a public property'
console.log(RevealingModularPattern._privateProperty); // is undefined protected by the module closure
RevealingModularPattern._privateMethod(); // is TypeError protected by the module closure