let Singleton = (function(){
    let instance;
    
    let addition = function(a,b){
        return a+b;
    }

     let subtraction = function(a,b){
        return a-b;
    }

    function createInstance(){
        return {
            add: addition,
            sub: subtraction
        }
    }

    return {
        getInstance: function(){
            if(instance){
                return instance;
            }
            else{
                instance = createInstance();
                return instance;
            }
        }
    }
   

})();


let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();


if(instance1 === instance2) 
    console.log('Instance are same')
else
   console.log('Instance are not same')