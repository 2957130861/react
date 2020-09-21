"use strict";

const Controller = require('egg').Controller;
class Privatewrite extends Controller {

    async Addprivatewrite() {
        const { ctx } = this;
        let usernum = this.ctx.request.body.usernum;
        let userPrivatewritebt = this.ctx.request.body.userPrivatewritebt;
        let userPrivatewritedate = this.ctx.request.body.userPrivatewritedate;
        let userPrivatewrite = this.ctx.request.body.userPrivatewrite;
        ctx.body = await this.ctx.service.privatewrite.AddPrivatewrite(usernum,userPrivatewritebt,userPrivatewritedate,userPrivatewrite)
    }
    async getuserwrite() {
        const { ctx } = this;
        let usernum = this.ctx.request.query.usernum;
        ctx.body = await this.ctx.service.privatewrite.getuserwrite(usernum);
    }
    async deleteuserwrite() {
        const { ctx } = this;
        let id = this.ctx.request.body.id;
        ctx.body = await this.ctx.service.privatewrite.deleteuserwrite(id)
    }
    async ssgetuserwrite() {
        const { ctx } = this;
        let bt = this.ctx.request.query.bt;
        ctx.body = await this.ctx.service.privatewrite.ssgetuserwrite(bt);
    }
    async idgetuserwrite() {
        const { ctx } = this;
        let id = this.ctx.request.query.id;
        ctx.body = await this.ctx.service.privatewrite.idgetuserwrite(id);
    }
    async xgprivatewrite() {
        const { ctx } = this;
        let id = this.ctx.request.body.id;
        let userPrivatewritebt = this.ctx.request.body.userPrivatewritebt;
        let userPrivatewritedate = this.ctx.request.body.userPrivatewritedate;
        let userPrivatewrite = this.ctx.request.body.userPrivatewrite;
        ctx.body = await this.ctx.service.privatewrite.xgprivatewrite(id,userPrivatewritebt,userPrivatewritedate,userPrivatewrite)
    }
}
module.exports = Privatewrite