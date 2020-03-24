const queryParam = (params) => {
    if (typeof params === 'object') {
      let result = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      return `?${result}`
    }
    return params
  }
  
export default queryParam;