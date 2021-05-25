var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var add = require("./bean/add");
let connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"123456",
    database:"node_2"
});
connection.connect(err =>{
  if(err) throw err;
  console.log('Mysql连接成功');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res) =>{
    let Add = new add(
        req.body.regname,
        req.body.regpass
    )
    
    let time = new Date()
    console.log(time);
    connection.query("insert into tab_login(regname,regpass) value(?,?) ",[Add.regname,Add.regpass],(err,results,fields) =>{
       if(err) throw err;
      console.log(results); 
      console.log(fields); 
    }) 
    res.redirect('/')

});
 

module.exports = router;
