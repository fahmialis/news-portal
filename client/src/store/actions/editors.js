export function addEditors (payload) {
  return {type: 'editors/addEditors', payload}
}

export function addEditorsAsync() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      dispatch(addEditors(data))
    })
  };
}