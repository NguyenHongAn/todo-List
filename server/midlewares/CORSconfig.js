module.exports = {
    AccessControllAllowOrigin: (req, res, next) =>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Methods",
          "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
        );
      
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        next();
    },
}