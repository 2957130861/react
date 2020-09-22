const Service=require('egg').Service;
class MakeBookService extends Service{
    //根据用户id获得该用户所有的书
    async getMyBook(){
        let userid=this.ctx.request.body.userid;
        let sql="select * from books where userid=?";
        let r=await this.ctx.app.mysql.query(sql,[userid]);
        return r;
    }
}
module.exports=MakeBookService;