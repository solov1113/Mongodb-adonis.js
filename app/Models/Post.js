'use strict'

const Model = use('Model')

class Post extends Model {
  static get table () {
    return 'posts'
  }
}

module.exports = Post
