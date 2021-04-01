const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const {type, payload} = action
  if(type === 'news/addNews'){
    return {... state, data: payload.articles}
  } else if (type === 'news/setLoadingTrue'){
    return {...state, loading: true}
  } else if (type === 'news/setLoadingFalse'){
    return {...state, loading: false}
  }
  return state
}

export default reducer