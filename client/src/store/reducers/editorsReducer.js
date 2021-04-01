const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const {type, payload} = action
  if(type === 'editors/addEditors'){
    return {... state, data: payload}
  } else if (type === 'editors/setLoadingTrue'){
    return {...state, loading: true}
  } else if (type === 'editors/setLoadingFalse'){
    return {...state, loading: false}
  } else if (type === 'editors/setError'){
    return {...state, error: payload}
  }
  return state
}

export default reducer