var controller = require('./app/controllers/homeController');

module.exports = function(app) {
	app.get('/index', controller.index);
	app.get('/', controller.index);
}