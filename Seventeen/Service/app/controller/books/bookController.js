const Controller=require("egg").Controller;
class BooksController extends Controller{

    async showBook(){
        let r= await this.ctx.service.books.bookService.showBook()
        this.ctx.response.body=r;
    }
 
    async deleteBook(){
        let id=this.ctx.request.query.id;
        let r=await this.ctx.service.books.bookService.deletebBook(id)
        this.ctx.response.body=r
    }
    async addBook(){
        let title=this.ctx.request.body.title;
        let userid=this.ctx.request.body.userid;
        let text=this.ctx.request.body.text;
        let bookid=this.ctx.request.body.bookid;
        let r=await this.ctx.service.books.bookService.addBook(title,userid,text,bookid)
        this.ctx.response.body=r
    }
    
}
module.exports=BooksController