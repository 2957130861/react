'use strict';

const Controller = require('egg').Controller;

class Mybooks extends Controller {
  async getMybook() {
    
    let userid =this.ctx.request.query.userid;
    
    let list= await this.ctx.service.mybooks.getMybook(userid);
    this.ctx.response.body =list
  }
  async delgoods() {
    let id = this.ctx.request.body.id;
    let result = await this.ctx.service.mybooks.delgoods(id);
    this.ctx.response.body = result;
  }
}

module.exports = Mybooks;