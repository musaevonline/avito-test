import { GET_NEWS, SET_LOADING } from '../actions'


const initialState = {
    news: [],
    loading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default: return state;
    }
}

export default reducer