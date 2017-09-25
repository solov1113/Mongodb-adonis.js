'use strict';
const Posts = use('App/Models/Post');
const { validate } = use('Validator');


class PostController {
   async index({response ,view}) {

     var posts = await Posts.all();
     return view.render('home',{ posts : posts.toJSON()})
  }
  async show({params , view}) {
   var post = await Posts.find(params.id);
    return view.render('posts.show',{post : post })
  }

  async createPost({request ,session, response}) {
    const rules = {
      title: 'required',
      content: 'required'
    }
    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      session
        .withErrors(validation.messages())

      return response.redirect('back')
    } else {
      var post = new Posts();
      post.title = request.input('title');
      post.content = request.input('content');
      await post.save()
      return response.redirect('/')
    }

  }

  async edit({params , view}) {
    var post = await Posts.find(params.id);
    return view.render('posts.edit',{post : post })
  }

  async update({params , view ,session ,request , response}) {
    const rules = {
      title: 'required',
      content: 'required'
    }
    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      session
        .withErrors(validation.messages())

      return response.redirect('back')
    } else {
      var post = await Posts.find(params.id);
      console.log(post)
      post.title = request.input('title');
      post.content = request.input('content');
      await post.save()
      return response.redirect('/')
    }

  }

  async delete({params , response ,view}) {
     var post = await Posts.find(params.id)
    await post.delete()
    return response.redirect('/')
  }
}

module.exports = PostController
