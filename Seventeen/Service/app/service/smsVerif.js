const Service = require('egg').Service;
const Core = require('@alicloud/pop-core');
class noteService extends Service {
    async smsVerif(obj) {
        console.log(obj, "smsverif77")
        var client = new Core({
            accessKeyId: 'LTAI4G2DmcQ4w1XQVrpwTJE6',
            accessKeySecret: 'P9qPuTF4fFkkUVS4cjccrZLiWcWcmZ',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });

        const num = Math.floor((Math.random() + 1) * 1000)
		//后端服务器session 缓存验证码，方便之后在用户登录时，再次使用session进行验证码对比
        this.ctx.session.smsnum = num
        console.log('手机验证码是:'+num)
        var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": `${obj.phone}`,    //发送验证码的手机
            "SignName": "Seventeen",    //短信签名
            "TemplateCode": "SMS_202822019",    //短信模板
            "TemplateParam": `{"code":${num}}`  //模板中的变量替换JSON串,如模板内容为"亲爱的用户,您的验证码为${code}"时

        }

        var requestOption = {
            method: 'POST'
        };

        client.request('SendSms', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        })
        return num;


    }
}
module.exports = noteService;