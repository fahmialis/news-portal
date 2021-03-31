export function addNews(payload){
    // console.log(payload, 'ini di action');
    return {type: 'news/addNews', payload}
}

export function addEditors (payload) {
    console.log(payload, 'editor di action')
    return {type: 'editors/addEditors', payload}
}