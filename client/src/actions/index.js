import axios from 'axios'

export const getNews = () => {
  return(dispatch)=> {
    axios.get(api)
    .then(news => {
      dispatch({
        type: 'News',
        payload: news
      })
    })
  }
}
