const createStore = function(rootReducer, middlewares){
    // will implement middlewares later
    let state;

    const getState = () => state;
    const listeners = [];

    const dispatch = action => {
        state = rootReducer(state, action);
        listeners.forEach(listener => listener())
    };

    const subscirbe = listner => {
        listeners.push(listener);
        return () => {
            listeners.filter(lis => lis !== listener)
        }
    }

    dispatch({});


    return { getState, dispatch, subscirbe};
}