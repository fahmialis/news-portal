export function addEditors (payload) {
  return {type: 'editors/addEditors', payload}
}

export function setLoadingTrue() {
  return {type : 'editors/setLoadingTrue'}
}

export function setLoadingFalse() {
  return {type : 'editors/setLoadingFalse'}
}

export function addEditorsAsync() {
  return (dispatch) => {
    dispatch(setLoadingTrue())
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      dispatch(addEditors(data))
      dispatch(setLoadingFalse())
    })
  };
}