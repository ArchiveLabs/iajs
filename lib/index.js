module.exports = InternetArchive

var request = require('request')
var Item = require('./item.js')

function InternetArchive (opts) {
}

/**
 * @param {string} identifer
 * @param {function} cb - callback with Item argument
 */
InternetArchive.prototype.getItem = function (identifier, cb) {
  var url = 'https://archive.org/metadata/' + identifier + '&output=json'
  request(url, function (er, res) {
    if (er) {
      console.log('There was an error.')
      cb(1, null)
    } else {
      var item = new Item({
        itemMetadata: JSON.parse(res.body)
      })
      cb(null, item)
    }
  })
}
