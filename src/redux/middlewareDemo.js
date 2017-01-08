const middlewareDemo = store => next => action => {


    const getState = store.getState
    const dispatch = store.dispatch
    console.log(store.type);
    console.group(action.type)
    console.log('dispatching', action);

    console.log('------pre state', getState());

    let res = next(action);
    console.log('--------next state:', getState());
    console.groupEnd(action.type);


  //  return res;

}

export default middlewareDemo;