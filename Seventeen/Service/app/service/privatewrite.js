
let Service = require("egg").Service;

class Privatewrite extends Service {

    async AddPrivatewrite(usernum,userPrivatewritebt,userPrivatewritedate,userPrivatewrite) {
        let sql = "insert into userPrivatewrite(usernum,bt,time,userwrite)values(?,?,?,?)";
        let r = await this.ctx.app.mysql.query(sql, [usernum,userPrivatewritebt,userPrivatewritedate,userPrivatewrite]);
        console.log("1")
        return r.affectedRows;
    }
    async getuserwrite(usernum) {
        let sql = "select * from userprivatewrite where usernum=?"
        let list = await this.ctx.app.mysql.query(sql, [usernum]);
        return list;
    }
    async deleteuserwrite(id) {
        let sql = "delete from userprivatewrite where id=?";
        let r = await this.ctx.app.mysql.query(sql, [id]);
        return r.affectedRows;
    }
    async ssgetuserwrite(bt) {
        let sql = "select * from userprivatewrite where bt=?"
        let list = await this.ctx.app.mysql.query(sql, [bt]);
        return list;
    }
    async idgetuserwrite(id) {
        let sql = "select * from userprivatewrite where id=?"
        let list = await this.ctx.app.mysql.query(sql, [id]);
        return list;
    }
    async xgprivatewrite(id,userPrivatewritebt,userPrivatewritedate,userPrivatewrite) {
        let sql = "update userPrivatewrite set bt=?,time=?,userwrite=? where id=?";
        let r = await this.ctx.app.mysql.query(sql, [userPrivatewritebt,userPrivatewritedate,userPrivatewrite,id]);
        return r.affectedRows;
    }
    
}
module.exports = Privatewrite;