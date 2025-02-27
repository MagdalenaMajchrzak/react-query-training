import axios from 'axios'

const searchPhotosFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Accept: 'application/json',
  },
})

export default searchPhotosFetch
