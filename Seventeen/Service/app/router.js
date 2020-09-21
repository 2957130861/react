module.exports=app=>{
    const {router,controller}=app;
   // router.post('/login.do',controller.logincontroller.Login);
   router.post("/Addprivatewrite", controller.privatewrite.Addprivatewrite);
   router.get("/getuserwrite", controller.privatewrite.getuserwrite);
   router.post("/deleteuserwrite", controller.privatewrite.deleteuserwrite);
   router.get("/ssgetuserwrite", controller.privatewrite.ssgetuserwrite);
   router.get("/idgetuserwrite", controller.privatewrite.idgetuserwrite);
   router.post("/xgprivatewrite", controller.privatewrite.xgprivatewrite);
}