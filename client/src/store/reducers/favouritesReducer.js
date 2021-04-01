const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer(state = initialState, action){
  const {type, payload} = action
  if(type === 'favourites/addFavourites'){
    return {... state, data: state.data.concat(payload)}
  }
  return state
}

export default reducer