import axios from 'axios'

export default class Api {
  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charser=utf-8'
  }

  static timeout = 120000

  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  request (url, options, passThrough) {
    return axios(url, options)
      .then((response) => {
        console.log('response', response)

        if (response.statusText === 'OK') {
          let data = response.data

          if (passThrough) {
            data = {
              ...passThrough,
              ...response.data
            }
          }

          return data
        } else {
          throw new Error(`${response.status} ${response.statusText}`)
        }
      })
  }

  get (url, passThrough, timeout = Api.timeout) {
    const {headers} = Api
    const {request, baseUrl} = this
    const options = {
      timeout,
      headers: headers,
      method: 'GET',
      mode: 'cors'
    }

    return request(`${baseUrl}/${url}`, options, passThrough)
  }

  post (url, data, passThrough, timeout = Api.timeout) {
    const {headers} = Api
    const {request, baseUrl} = this
    const options = {
      timeout,
      headers,
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors'
    }

    return request(`${baseUrl}/${url}`, options, passThrough)
  }

  put (url, data, passThrough, timeout = Api.timeout) {
    const {headers} = Api
    const {request, baseUrl} = this
    const options = {
      timeout,
      headers,
      body: JSON.stringify(data),
      method: 'PUT',
      mode: 'cors'
    }

    return request(`${baseUrl}/${url}`, options, passThrough)
  }

  delete (url, passThrough, timeout = Api.timeout) {
    const {headers} = Api
    const {request, baseUrl} = this
    const options = {
      timeout,
      headers,
      method: 'DELETE',
      mode: 'cors'
    }

    return request(`${baseUrl}/${url}`, options, passThrough)
  }
}
