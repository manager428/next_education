import client from './client'

const ApiService = {
  setAuthorizationToken: token => {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
  },

  query: options => {
    function onSuccess(response) {
      return response.data
    }

    function onError(error) {
      if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        // console.error('Status:', error.response.status)
        // console.error('Data:', error.response.data)
        // console.error('Headers:', error.response.headers)
      } else {
        // Something else happened while setting up the request
        // triggered the error
        // console.error('Error IMessage:', error.message)
      }

      return Promise.reject(error.response || error.message)
    }

    return client(options).then(onSuccess).catch(onError)
  },
}

export default ApiService
