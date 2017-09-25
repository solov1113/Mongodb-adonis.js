'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User');

//Posts

Route.get('/', 'PostController.index')

Route.get('posts/:id' , 'PostController.show');
Route.post('post/create','PostController.createPost');
Route.get('post/edit/:id' , 'PostController.edit');
Route.post('post/edit/:id' , 'PostController.update');
Route.get('post/delete/:id' , 'PostController.delete');



Route.get('about','FrontController.about')
Route.get('contact','FrontController.contact')
Route.get('post/create','FrontController.create');

// Auth
Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')

Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doregister')
