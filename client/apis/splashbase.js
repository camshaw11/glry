import request from 'superagent'

const apiURL = 'http://www.splashbase.co/api/v1/images/'
// http://www.splashbase.co/api/v1/images/1
// http://www.splashbase.co/api/v1/images/search/?query=laptop

const noResult = {
  images: [{
    copyright: "",
    id: 0,
    large_url: "https://miro.medium.com/max/1600/1*zRvYJWeLF5dcxM1G2hcEHA.jpeg",
    site: "",
    source_id: 0,
    url: "https://miro.medium.com/max/1600/1*zRvYJWeLF5dcxM1G2hcEHA.jpeg"
  }],
}

export function getImages(query) {
  return request
    .get(apiURL + "search/?query=" + query)
    .then(response => {
      if (response.body.images.length !== 0) {
        return response.body
      } else {
        return noResult
      }
    })
}

export function getRandomImage() {
  let randomNumber = Math.floor(Math.random() * Math.floor(8800)) + 1
  return request
    .get(apiURL + randomNumber)
    .then(response => {
      return response.body
    })
    .catch(err => {
      getRandomImage()
    })
}