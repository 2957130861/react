const Controller = require('egg').Controller;

class UserController extends Controller {
    async login(){
        const {ctx}=this;
        ctx.body = await this.ctx.service.user.login(ctx.request.body);
    }
    //上传用户头像
    async uploadUser() {
        let newUrl = await this.ctx.service.user.uploadUser();
        this.ctx.response.body = newUrl;
    }
    async register() {
        let pseudonym = this.ctx.request.body.pseudonym;
        let phone = this.ctx.request.body.phone;
        let email = this.ctx.request.body.email;
        let password = this.ctx.request.body.password;
        let isroot = this.ctx.request.body.isroot;
        let list = await this.ctx.service.user.register(pseudonym,phone,email,password,isroot);
        this.ctx.response.body = list;
    }
    //根据手机号或邮箱修改密码
    async changePwd() {
        let phone = this.ctx.request.body.phone;
        let email = this.ctx.request.body.email;
		let password = this.ctx.request.body.password;
		let list = await this.ctx.service.user.changePwd(phone,email,password);
		this.ctx.response.body = list;
    }
      //根据id号和笔名修改笔名
      async changePseudonym() {
        let pseudonym = this.ctx.request.body.pseudonym;
        let id = this.ctx.request.body.id;
		let list = await this.ctx.service.user.changePseudonym(pseudonym,id);
		this.ctx.response.body = list;
    }

     //展示前端用户
     async showviewUsers(){
        let list = await this.ctx.service.user.showviewUsers();
        this.ctx.response.body = list;
     }

      //展示前端管理员
    async showviewAdministrators(){
        let list = await this.ctx.service.user.showviewAdministrators();
        this.ctx.response.body = list;
    }
    //删除用户
    async deleteUsers(){
        let id = this.ctx.request.query.id;
        let list = await this.ctx.service.user.deleteUsers(id);
        this.ctx.response.body = list;
    }

}
module.exports = UserController;