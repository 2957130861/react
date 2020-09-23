// 'use strict';

const Controller = require('egg').Controller;

class TeamController extends Controller {
  async getTeam() {
    this.ctx.body = await this.ctx.service.teamservice.getTeam();
  }
  async deleteTeam() {
    let id = this.ctx.request.query.id;
    let list = await this.ctx.service.teamservice.deleteTeam(id);
    this.ctx.response.body = list;
  }
  async addTeam() {
    let title = this.ctx.request.body.title;
    let list = await this.ctx.service.teamservice.addTeam(title);
    this.ctx.response.body = list;
  }
  async modifyTeam(){
    let id = this.ctx.request.body.id;
    let title = this.ctx.request.body.title;
    let pagetotal = this.ctx.request.body.pagetotal;
    let list = await this.ctx.service.teamservice.modifyTeam(id,title,pagetotal);
    this.ctx.response.body = list;
  }
}

module.exports = TeamController;