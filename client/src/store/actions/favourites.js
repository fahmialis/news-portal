export function addFavourites (payload) {
  return {type: 'favourites/addFavourites', payload}
}

export function addFavouritesAsync (data) {
  return (dispatch) => {
    dispatch(addFavourites(data))
  }
}