const Service = require('egg').Service;
const fs = require('fs');
const path = require("path");

class uploadService extends Service {
    async upload(obj) {
        const { ctx } = this;
        const file = obj.files[0];
        const toFileName = '/public/upload/' + Date.now() + file.filename;
        let to = path.dirname(__dirname) + toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);
        const newUrl = "http://localhost:7001" + toFileName;
        let sql = 'insert into books (title,userid,bookid,img,text,time) values (?,?,?,?,?,?)';
        obj = obj.body;
        await ctx.app.mysql.query(sql, [obj.title, obj.userId, obj.booksid, newUrl, obj.text, obj.time])
    }
};

module.exports = uploadService