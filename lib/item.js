module.exports = Item

// var File = require('./file')

function Item (opts) {
  var defaultOpts = {
    identifier: null,
    itemMetadata: null
  }
  if (opts === undefined) opts = {}
  opts = Object.assign(defaultOpts, opts)

  // Default attributes.
  this.identifier = opts.identifier
  this.exists = false

  // Archive.org metadata attributes.
  this.metadata = {}
  this.files = []
  this.created = null
  this.d1 = null
  this.d2 = null
  this.dir = null
  this.files_count = null
  this.item_size = null
  this.reviews = []
  this.server = null
  this.uniq = null
  this.updated = null
  this.tasks = null
  this.is_dark = null

  // Load item.
  this.load(opts.itemMetadata)
}

/**
 * @param {object} itemMetadata - An object from the server
 */
Item.prototype.load = function (itemMetadata) {
  this.itemMetadata = itemMetadata
  Object.assign(this, this.itemMetadata)
  this.exists = (this.itemMetadata !== {})
  if (!this.identifier) {
    this.identifier = this.metadata.identifier
  }
  // TODO
  // var mc = this.metadata.collection || []
  // this.collection = IdentifierListAsItems(mc, this.session)
}

/**
 * Persists the metadata to the server.
 * The item will be created if it does not exist.
 */
Item.prototype.saveMetadata = function () {
  throw Error('not implemented yet')
}

/**
 * Upload a single file to an item.
 * The item will be created if it does not exist.
 */
Item.prototype.uploadFile = function () {
  throw Error('not implemented yet')
}

/**
 * Get a :class:`File <File>` object for the named file.
 * @param {string} fileName
 * @return {File}
 */
Item.prototype.getFile = function (fileName) {
  throw Error('not implemented yet')
}
