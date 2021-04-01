const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const {type, payload} = action
  if(type === 'news/addNews'){
    return {... state, data: payload.articles}
  }
  return state
}

export default reducer