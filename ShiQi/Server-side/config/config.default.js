//cookie配置
exports.keys = "sdfdshlkfdsakdfsahdsfakjfhasfkdsa";

//post配置
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  }
};
exports.multipart = {
  mode: 'file',
};
//mysql配置
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'item',
  },
};

//跨域配置
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};