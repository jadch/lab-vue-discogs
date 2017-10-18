import axios from 'axios'

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris jcx1234/1.0 +http://localhost",
  params: {
    token: "YkuMFgBjIEvdKIEgxzRyJEkBFEXXssLLEShKDcTo"
  }
})

export function getArtists (string) {
  let url = '/database/search?q=' + string + '&type=artist'
  return discogs.get(url).then( response => {
    return response.data.results
  })
}

export function getSingleArtist (id) {
  let url = '/artists/' + id
  return discogs.get(url).then( response => {
    return response.data
  })
}

export function getArtistReleases (id) {
  let url = '/artists/' + id + '/releases'
  return discogs.get(url).then( response => {
    return response.data.releases
  })
}