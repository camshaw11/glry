import request from 'superagent'

const widgetUrl = 'http://www.splashbase.co/api/v1/'

export function getImages (query) {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function getRandomImage () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}