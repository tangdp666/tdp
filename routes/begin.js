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


connection.connect(err =>{
  if(err) throw err;
});

router.get('/', function(req, res, next) { 
  
  connection.query("select * from tab_login ",function(err, results){
      console.log(err);
     console.log(results);
     res.render('begin',{data:results})
  });
  });


router.post("/:massage",function(req, res) {
  console.log(req.params.massage);
    connection.query("select * from tab_login where regname like '%"+req.params.massage+"%'",function(err, results){
        console.log(err);
       console.log(results);
       res.send(results)
    });
  })
router.delete('/del/:id', (req, res) => {
    let sql = `DELETE FROM tab_login WHERE id = ${req.params.id}`
    connection.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
       res.send('success')
    })
  })


module.exports = router;

