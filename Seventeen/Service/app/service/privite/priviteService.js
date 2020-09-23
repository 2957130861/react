const Service=require("egg").Service;
class bookService extends Service{
    async  showUserprivatewrite(){
        let sql="select * from userprivatewrite"
        let r=await this.ctx.app.mysql.query(sql,[]);
        return r;
    }
   async deleteUserprivatewrite(id){
       let sql="delete from userprivatewrite where id=?"
       let r=await this.ctx.app.mysql.query(sql,[id])
       return r
   }
   async addUserprivatewrite(usernum,bt,time,userwrite){
       let sql="insert into userprivatewrite(usernum,bt,time,userwrite)values(?,?,?,?)"
       let r= await this.ctx.app.mysql.query(sql,[usernum,bt,time,userwrite])
       return r
   }
}
module.exports=bookService