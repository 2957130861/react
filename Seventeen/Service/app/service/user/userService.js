const Service=require("egg").Service;
class UserService extends Service{
    async   showLocalUser(){
        let sql="select * from user where isroot=0"
        let r=await this.ctx.app.mysql.query(sql,[]);
        return r;
    }
    async   showRootUser(){
        let sql="select * from user where isroot=1"
        let r=await this.ctx.app.mysql.query(sql,[]);
        return r;
    }
   async deleteUser(id){
       let sql="delete from user where id=?"
       let r=await this.ctx.app.mysql.query(sql,[id])
       return r
   }
   async addUser(penbook,phone,email,password,isroot){
       let sql="insert into user(penbook,phone,email,password,isroot)values(?,?,?,?,?)"
       let r= await this.ctx.app.mysql.query(sql,[penbook,phone,email,password,isroot])
       return r
   }
}
module.exports=UserService