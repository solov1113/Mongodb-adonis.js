'use strict';

class FrontController {
  async about ({view}) {
    return view.render('about')
  }

  async contact ({view}) {
    return view.render('contact')
  }
  async create ({view}) {
    return view.render('posts.create')
  }
}

module.exports = FrontController
