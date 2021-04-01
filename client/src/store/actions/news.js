export function addNews(payload){
  return {type: 'news/addNews', payload}
}

export function addNewsAsync() {
  return (dispatch) => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1a59ee3dcc8843718c9f4b3226d9f95e')
    .then(res => res.json())
    .then(data => {
      // console.log(data,'acton');
      dispatch(addNews(data))
    })
  }
}