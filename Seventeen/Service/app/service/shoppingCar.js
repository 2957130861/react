const Service = require('egg').Service;

class Mybooks extends Service {
	// 获取商品
	async getShopping() {
		let sql = 'select * from mybooksShop'
		let list = await this.app.mysql.query(sql)
		console.log(list)
		return list
	}
	// 删除商品
	async deleteShopcar(id){
		let sql = "delete from mybooksShop where id=?";
		let list = await this.ctx.app.mysql.query(sql,id)
		return list.affectedRows;
	} 
	// 添加商品
	async addShopcar (name,img,about,price){
		let sql = "insert into mybooksShop(name,img,about,price)values(?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql,[name,img,about,price]);
		return list.affectedRows;
	}
}

module.exports = Mybooks;