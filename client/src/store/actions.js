export function addNews(payload){
    // console.log(payload, 'ini di action');
    return {type: 'news/addNews', payload}
}

export function addEditors (payload) {
    // console.log(payload, 'editor di action')
    return {type: 'editors/addEditors', payload}
}

export function addFavourites (payload) {
    // console.log(payload, 'fav di action');
    return {type: 'favourites/addFavourites', payload}
}