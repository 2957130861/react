const Service = require('egg').Service;

class Mybooks extends Service {
	async getMybook(userid) {
		let sql = 'select * from books where userid = ?';
		let list = await this.app.mysql.query(sql,[userid]);
		return list;
	}
	async delgoods(id) {
		let sql = 'delete from books where id=?'
		let obj = await this.app.mysql.query(sql, [id]);
		return obj;
	}
}

module.exports = Mybooks;