const Service = require('egg').Service;

class MyTeam extends Service {
	// 查询文章
	async getTeam() {
		let sql = 'select * from team'
		let list = await this.ctx.app.mysql.query(sql)
		console.log(list)
		return list
	}
	// 删除文章
	async deleteTeam(id){
		let sql = "delete from team where id=?";
		let list = await this.ctx.app.mysql.query(sql,[id])
		return list.affectedRows;
	} 
	// 添加文章
	async addTeam (title){
		let sql = "insert into team(title)values(?)";
		let list = await this.ctx.app.mysql.query(sql,[title]);
		return list.affectedRows;
	}
	// 修改文章
	async modifyTeam(id,title,pagetotal){
		let sql ="update team set title=?,pagetotal=?where id=?"
		let list = await this.ctx.app.mysql.query(sql,[title,pagetotal,id]);
		return list.affectedRows;
	}
}

module.exports = MyTeam;
