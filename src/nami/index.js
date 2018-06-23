var login = require('./lib/login.js')
var http = require('./lib/http.js')
var location = require('./lib/location.js')
var promise = require('./lib/promise.js')

module.exports = {
    promise: promise,
    login: login.login,
    getUserInfo: login.getUserInfo,
    request: http.request,
    getLocation: location.getLocation,
    getAddress: location.getAddress
}