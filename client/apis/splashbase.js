import request from 'superagent'

const apiURL = 'http://www.splashbase.co/api/v1/images'
// http://www.splashbase.co/api/v1/images/1
// http://www.splashbase.co/api/v1/images/search/?query=laptop

export function getImages(query) {
  return request
    .get(apiURL + "/search/?query=" + query)
    .then(response => {
      console.log(response.body)
      return response.body
    })
}

export function getRandomImage() {
  // return request
  //   .get(apiURL)
  //   .then(response => response.body)
}