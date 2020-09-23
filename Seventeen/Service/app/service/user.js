const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");
class UserService extends Service {
 //登陆
 async login(user){
     let sql = `select * from user where phone='${user.phone}'`;
     let result = await this.ctx.app.mysql.query(sql,user);
     if(result.length<1){
         return {
             status:1,
             msg:"用户不存在"
         }
     }else {
         if(user.password==result[0].password){
            if(user.email==result[0].email){
                return{
                    status:0,
                    msg:"恭喜你，登陆成功",
                    list:result
                }
            }else {
                return {
                    status:1,
                    msg:"邮箱地址错误"
                }
            }
         }else {
             return {
                 status:1,
                 msg:"密码错误"
             }
         }
         }
    }

 //上传用户图片
 async uploadUser() {
    const file = this.ctx.request.files[0];
    const toFileName = '/public/upload1/'+Date.now()+file.filename;
    /**
     * 1,全局变量__dirname的值为"<路径>\项目名\app\service",即为当前文件所在的目录
     * 2,path.dirname(...)的使用是去掉最后一级,
     * 所以path.dirname(__dirname)后的值为"<路径>\项目名\app"
     * 3, 最后得到to的值为 "<路径>\项目名\app/public/upload/保存时的文件名字" 
     */  
    let to = path.dirname(__dirname)+toFileName;
    //file.filepath是上传的临时文件
    //把临时文件写入到文件to
    await fs.copyFileSync(file.filepath, to);
    //删除临时文件
    await fs.unlinkSync(file.filepath);
    
    //上传文件的网络访问 url
    const newUrl = "http://localhost:7001"+toFileName;
    let id = this.ctx.request.body.id;
    // const sql = "insert into user(headPhoto)values(?)";
    const sql = "update user set headPhoto=? where id=?"
    let r = await this.ctx.app.mysql.query(sql,[newUrl,id]);
    if(r.affectedRows==1) {
        return newUrl;
    }else {
        console.log("图片上传失败")
    }
}

 // 注册
 async register(pseudonym,phone,email,password,isroot) {
    let sql = "insert into user(pseudonym,phone,email,password,isroot) values (?,?,?,?,?)";
    let list = await this.ctx.app.mysql.query(sql, [pseudonym,phone,email,password,isroot]);
    return list.affectedRows;
}
//修改密码
    async changePwd(phone,email,password) {
        let sql = "update user set password = ? where phone=? and email=? ";
        let list = await this.ctx.app.mysql.query(sql, [password,phone,email]);
        return list.affectedRows;
    }
//修改笔名
    async changePseudonym(id,pseudonym) {
        let sql = "update user set pseudonym = ? where id=?";
        let list = await this.ctx.app.mysql.query(sql, [id,pseudonym]);
        return list.affectedRows;
    }
//展示前端用户信息
async showviewUsers(){
    let sql = "select *,(select count(1) from user where isroot='0') as count from user where isroot='0' ";
    let list = await this.ctx.app.mysql.query(sql,[]);
    return list;
}
//展示前端管理员界面
async showviewAdministrators() {
    let sql = "select *,(select count(1) from user where isroot='1') as count from user where isroot='1'" ;
    let list = await this.ctx.app.mysql.query(sql, [])
    return list;
}

//删除用户信息
async deleteUsers(id){
    let sql = "delete from user where id=?";
    let list = await this.ctx.app.mysql.query(sql,id);
    return list.affectedRows;
}
}
module.exports = UserService;