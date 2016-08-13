var test = require('tape')
var InternetArchive = require('../lib')

test('client instance', function (t) {
  t.plan(1)
  var client = new InternetArchive({ })
  t.equal(client.prototype, InternetArchive)
})
