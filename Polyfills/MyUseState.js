const myUseState = function(defaultVal){
    let stateName = defaultVal;

    const setStateMethod =  function(val){
        stateName = val;
    }

    return [stateName, setStateMethod];
}

let [name, setName] = myUseState('Sandeep');
console.log('name', name);

setName('Kumar');
console.log('name: ', name);