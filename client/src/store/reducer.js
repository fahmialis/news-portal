
const initialState = {
    news: [],
    editors: [],
    editor: {},
    favourites: []
}


function reducer(state = initialState, action) {
    const {type, payload} = action
    if(type === 'news/addNews'){
        // console.log(payload, 'news reducer');
        return {...state, news: payload.articles}
    } else if (type === 'editors/addEditors') {
        console.log(payload, 'editor reducer');
        return {...state, editors: payload}
    }
    return state
}

export default reducer