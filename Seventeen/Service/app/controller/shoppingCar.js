'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async getShopping() {
    this.ctx.body = await this.ctx.service.shoppingCar.getShopping();
  }
  async deleteShopcar() {
    let id = this.ctx.request.query.id;
    let list = await this.ctx.service.shoppingCar.deleteShopcar(id);
    this.ctx.response.body = list;
  }
  async addShopcar() {
    let name = this.ctx.request.body.name;
    let img = this.ctx.request.body.img;
    let about = this.ctx.request.body.about;
    let price = this.ctx.request.body.price;
    let list = await this.ctx.service.shoppingCar.addShopcar(name, img, about, price);
    this.ctx.response.body = list;
  }
}

module.exports = GoodsController;