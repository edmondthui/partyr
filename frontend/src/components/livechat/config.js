import packageJSON from '../../../package.json'

export default {
  development: {
    endpoint: packageJSON.proxy
  },
  production: {
    endpoint: window.location.hostname
  }
}