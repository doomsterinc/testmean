module.exports = function(app) {
	var controller = app.controllers.homeController;
	app.get('/index', controller.index);
	app.get('/', controller.index);
}
