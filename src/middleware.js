export const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    const { payload, ...noPayload } = action;
    store.dispatch(noPayload);
    action.payload.then(
      res => {
        action.payload = res;
        action.type += "_SUCCESS";
        store.dispatch(action);
      },
      error => {
        action.type += "_FAILED";
        action.error = true;
        store.dispatch(action);
      }
    );
    console.log(action);
    return;
  }
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}