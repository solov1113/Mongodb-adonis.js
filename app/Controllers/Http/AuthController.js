'use strict'
var Hash = use('Hash')
class AuthController {
  async index({view}) {
    return view.render('users.login')
  }

  async login ({ request,session, auth }) {
    const user = await auth.validate(request.input('email'), request.input('password'), true)
    await auth.login(user.toJSON())
   return 'Logged in successfully'
  }
}

module.exports = AuthController
