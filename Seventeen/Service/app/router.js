module.exports = app => {
    const {
        router,
        controller
    } = app;
    //登陆注册
    //登陆
    router.post('/login', controller.user.login);
    // 注册
    router.post('/register', controller.user.register);
    // 根据手机号或者邮箱号修改密码
    router.post('/changePwd', controller.user.changePwd);
    // 根据id号和笔名修改笔名
    router.post('/changePseudonym', controller.user.changePseudonym);
    //展示前端用户界面
    router.get('/showviewUsers', controller.user.showviewUsers)
    //展示前端管理员界面
    router.get('/showviewAdministrators', controller.user.showviewAdministrators);
    //删除用户信息
    router.get("/deleteUsers", controller.user.deleteUsers);
    //阿里云短信验证
    router.post("/smsVerif", controller.smsVerif.smsVerif)
    //上传用户图片
    router.post('/uploadUser', controller.user.uploadUser)
    //私密写
    router.post("/Addprivatewrite", controller.privatewrite.Addprivatewrite);
    router.get("/getuserwrite", controller.privatewrite.getuserwrite);
    router.post("/deleteuserwrite", controller.privatewrite.deleteuserwrite);
    router.get("/ssgetuserwrite", controller.privatewrite.ssgetuserwrite);
    router.get("/idgetuserwrite", controller.privatewrite.idgetuserwrite);
    router.post("/xgprivatewrite", controller.privatewrite.xgprivatewrite);
    // 小圈
    router.post("/getTeam", controller.teamController.getTeam);
    router.get("/deleteTeam", controller.teamController.deleteTeam);
    router.post("/addTeam", controller.teamController.addTeam);
    router.post("/modifyTeam", controller.teamController.modifyTeam);
    // 做书
    router.post('/getMyBook', controller.makebookController.getMyBook);
    //router.post('/upload', controller.uploadController.upload);
    router.post("/BookUpload", controller.bookUpload.upload);
    // 我的作品
    router.get('/getMybook', controller.mybooks.getMybook);
    router.post('/delgoods', controller.mybooks.delgoods);
    //购物车    
    router.get('/getMybookShop', controller.shoppingCar.getShopping);
    router.get('/deleteShopcar', controller.shoppingCar.deleteShopcar);
    router.post('/addShopcar', controller.shoppingCar.addShopcar);

}