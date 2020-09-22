module.exports=app=>{
    const {router,controller}=app;
   // router.post('/login.do',controller.logincontroller.Login);
   router.post('/getMyBook',controller.makebookController.getMyBook);
//    router.post('/upload', controller.uploadController.upload);
   router.post("/BookUpload", controller.bookUpload.upload);
}