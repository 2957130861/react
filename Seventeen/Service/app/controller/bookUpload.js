const Controller = require('egg').Controller;

class uploadController extends Controller {
    async upload() {
        const { ctx } = this;
        let obj = ctx.request;
        await ctx.service.uploadService.upload(obj);
        this.ctx.response.body = "OK";
    }
};

module.exports = uploadController