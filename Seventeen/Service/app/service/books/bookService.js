const Service=require("egg").Service;
class bookService extends Service{
    async  showBook(){
        let sql="select * from books"
        let r=await this.ctx.app.mysql.query(sql,[]);
        return r;
    }
   async deleteBook(id){
       let sql="delete from books where id=?"
       let r=await this.ctx.app.mysql.query(sql,[id])
       return r
   }
   async addBook(title,userid,text,bookid){
       let sql="insert into books(title,userid,text,bookid)values(?,?,?,?)"
       let r= await this.ctx.app.mysql.query(sql,[title,userid,text,bookid])
       return r
   }
}
module.exports=bookService