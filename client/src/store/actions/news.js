export function addNews(payload){
  return {type: 'news/addNews', payload}
}

export function setLoadingTrue() {
  return {type : 'news/setLoadingTrue'}
}

export function setLoadingFalse() {
  return {type : 'news/setLoadingFalse'}
}

export function setError(payload) {
  return {type: 'news/setError', payload}
}

export function addNewsAsync() {
  return (dispatch) => {
    dispatch(setLoadingTrue())
    fetch('https://gnews.io/api/v4/top-headlines?token=cfc0741b8b7ba3520304439723731cd2')
    .then(res => res.json())
    .then(data => {
      // console.log(data,'acton');
      dispatch(addNews(data))
      dispatch(setLoadingFalse())
    })
    .catch(err => {
      dispatch(setError(err))
    })

  }
}