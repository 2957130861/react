const Service = require("egg").Service;

class userService extends Service {
    async login(name, pwd) {
        let sql = "select name , username ,pwd from user where name=? and pwd=?";
        let list = await this.ctx.app.mysql.query(sql, [name, pwd]);

        return list;

    }
}
module.exports = userService;