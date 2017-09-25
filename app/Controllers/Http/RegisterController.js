'use strict'
const { validate } = use('Validator');
const User = use('App/Models/User');
const Hash = use('Hash')

class RegisterController {
  async index({view}) {
    return view.render('users.register')
  }

  async doregister({request ,response ,session, view}) {
    var rules = {
      'name': 'required',
      'email': 'required|email'}
    var validator = await validate(request.all() , rules)
    if (validator.fails()) {
      session
        .withErrors(validator.messages())
      return response.redirect('back')
    } else {
      var user = new User();
            user.name = request.input('name');
            user.email = request.input('email');
            user.password = request.input('password')
            await user.save()
      return response.redirect('/')

    }
  }
}

module.exports = RegisterController
