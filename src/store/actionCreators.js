import { GET_NEWS, SET_LOADING } from './actions'
import axios from 'axios'


export function getNews() {
    return async dispatch => {
        dispatch({ type: SET_LOADING, payload: true })
        const news = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json', {
            params: {
                orderBy: '"$key"',
                limitToFirst: 100
            }
        })
        dispatch({ type: GET_NEWS, payload: news.data })
        dispatch({ type: SET_LOADING, payload: false })
    }
}