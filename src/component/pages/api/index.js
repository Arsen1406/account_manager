class Api {
    constructor (url, headers) {
      this._url = url
      this._headers = headers
    }
  
    checkResponse (res) {
      return new Promise((resolve, reject) => {
        if (res.status === 204) {
          return resolve(res)
        }
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => func(data))
      })
    }
            
  
    getProxy ({
        proxy_id
    }) {
      return fetch(
        `/apiv1/proxy/${proxy_id}/`,
        {
          method: 'GET',
          headers: {
            ...this._headers,
            ...authorization
          }
        }
      ).then(this.checkResponse)
    }
}