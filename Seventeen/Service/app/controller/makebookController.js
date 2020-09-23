const Controller = require('egg').Controller;
class MakeBookController extends Controller {
    //根据用户id获得该用户所有的书
	async getMyBook() {
		let r=await this.ctx.service.makebookService.getMyBook();
		this.ctx.response.body=r;
	}
};
module.exports = MakeBookController;