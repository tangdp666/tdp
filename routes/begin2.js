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
router.get('/', function(req, res, next) { 
  
  connection.query("select * from tab_log_txt ",function(err, results){
      console.log(err);
     console.log(results);
     res.render('begin2',{data:results})
  });

  });
  router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    console.log(id)
    pool.getConnection(function (err, connection) {
        connection.query("select * from tab_log_txt where id=" + id, function (err, results) {
            console.log(results)
            if (err) {
                res.end('修改页面跳转失败:' + err);
            } else {
                res.render('update', {data:results}); //直接跳转
            }
            connection.release();

        });
    });
});
router.post('/update', function (req, res) {
   var id = req.body.id;
   var writer = req.body.writer;
   var txt = req.body.txt;
   var create_time = req.body.create_time;
   var comment = req.body.comment;
    console.log(id)
    console.log(writer)
    console.log(txt)
    console.log(create_time)
    console.log(comment)
    pool.getConnection(function (err, connection) {
        connection.query("update tab_log_txt set writer ='" + writer + "',txt='" + txt + "',create_time='" + create_time + "',comment='" + comment + "' where id=" + id, function (err, rows) {
          if (err) {
            res.end('修改失败:' + err);
        } else {
            res.redirect('/begin2');
        }
        connection.release();
    });
});
});



module.exports = router;