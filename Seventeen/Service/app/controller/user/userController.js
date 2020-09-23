const Controller=require("egg").Controller;
class UserController extends Controller{
    
    async showLocalUser(){
        let r= await this.ctx.service.user.userService.showLocalUser()
        this.ctx.response.body=r;
    }
    async showRootUser(){
        let r= await this.ctx.service.user.userService.showRootUser()
        this.ctx.response.body=r;
    }
    async deleteUser(){
        let id=this.ctx.request.query.id;
        let r=await this.ctx.service.user.userService.deleteUser(id)
        this.ctx.response.body=r
    }
    async addUser(){
        let penbook=this.ctx.request.body.penbook;
        let phone=this.ctx.request.body.phone;
        let email=this.ctx.request.body.email;
        let password=this.ctx.request.body.password;
        let isroot=this.ctx.request.body.isroot;
        let r=await this.ctx.service.user.userService.addUser(penbook,phone,email,password,isroot)
        this.ctx.response.body=r
    }
    
}
module.exports=UserController