var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"123456",
    database:"node_2"
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.post("/",function(req, res) {
    connection.connect(err =>{
      if(err) throw err;
    });
    console.log(req.body.pass);
    var sql ="select * from tab_login where regname = '"+req.body.name+"' and regpass = '"+req.body.pass+"'";
    connection.query(sql,function(err, results){
      if(err){
        res.end("登录失败");
        console.log(err);
      }if(results == ""){
        res.json("用户名密码不正确！");
      }else{
        res.redirect('/login/a')
      }
    })

    router.get('/a',(req,res)=>{
        res.render('a')
    })
});
module.exports = router;
