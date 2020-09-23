const Controller=require("egg").Controller;
class privateController extends Controller{
    
    async showUserprivatewrite(){
        let r= await this.ctx.service.privite.priviteService.showUserprivatewrite()
        this.ctx.response.body=r;
    }
 
    async deleteUserprivatewrite(){
        let id=this.ctx.request.query.id;
        let r=await this.ctx.service.privite.priviteService.deleteUserprivatewrite(id)
        this.ctx.response.body=r
    }
    async addUserprivatewrite(){
        let usernum=this.ctx.request.body.usernum;
        let bt=this.ctx.request.body.bt;
        let time=this.ctx.request.body.time;
        let userwrite=this.ctx.request.body.userwrite;
        let r=await this.ctx.service.privite.priviteService.addUserprivatewrite(usernum,bt,time,userwrite)
        this.ctx.response.body=r
    }
    
}
module.exports=privateController