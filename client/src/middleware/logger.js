const logger = storeAPI => next => action => {
  // console.log(action, 'middleware logger');
  next(action)
  // console.log(storeAPI.getState(), 'state sekarang');
}

export default logger