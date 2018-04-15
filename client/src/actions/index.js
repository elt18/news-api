import axios from 'axios'

const api = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=b21e09ff1b6e44329137276b2c256414'
const mapApi = 'https://restcountries.eu/rest/v2/all'

export const getNews = () => {
  return(dispatch)=> {
    axios.get(api)
    .then(news => {
      console.log(news);
      dispatch({
        type: 'News',
        payload: news.data.articles
      })
    })
  }
}
