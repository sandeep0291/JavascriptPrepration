let ModularPattern = (function(){
    let _privateProperty = 0;
    let _privateMethod = function(){
        console.log('I am private method');
    }

    return {
        publicMethod: function(){
            console.log('I am a public method');
            _privateMethod();
        }
    }

})();