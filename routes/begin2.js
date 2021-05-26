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

connection.connect()
router.get('/', function(req, res, next) { 
  
  connection.query("select * from tab_log_txt ",function(err, results){
      console.log(err);
     console.log(results);
     res.render('begin2',{data:results})
  });

  });
router.post('/update/:id',(req,res) =>{
  let user ={
    'writer': req.body.writer,
    'txt': req.body.txt,
    'create_time': req.body.create_time,
    'comment': req.body.comment
  }
  let sqlStr = `delete from tab_log_txt where id = ${req.params.id}`
  connection.query(sqlStr,(err,results) =>{
    if (err) throw err
    console.log(results)
  
  let sqlStr1 = `insert into tab_log_txt (id,writer,txt,comment) values ('${req.params.id}','${req.body.goodName}','${req.body.goodOri_price}','${req.body.price}')`
    connection.query(sqlStr1,(err,results) =>{
      if (err) throw err
      console.log(results)
      res.redirect('/begin2')
    })
})
})

router.get('/upd/:id',(req,res) =>{
  let id = req.params.id
  connection.query(`select * from tab_log_txt where id = ${id} `,function(err, results){
    console.log(err);
   console.log(results);
   res.render('updeta',{data:results})
});
})


module.exports = router;