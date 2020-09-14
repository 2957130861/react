const Controller = require('egg').Controller;

class userController extends Controller {
	async login() {
		let name = this.ctx.request.body.name;
		let pwd = this.ctx.request.body.pwd;
		let list = await this.ctx.service.userService.login(name, pwd);
		console.log(list)
		this.ctx.response.body = list;
	}
}

module.exports = userController;