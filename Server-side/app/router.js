//router.js
module.exports = app => {
	const {
		router,
		controller
	} = app;
	router.post('/login.do', controller.userController.login);
};