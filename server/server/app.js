// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

// 加载bodyParser模块
const bodyParser = require('body-parser');

// 加载MD5模块
const md5 = require('md5');

// 创建MySQL连接池
const pool = mysql.createPool({
  host: '127.0.0.1',   //MySQL服务器地址
  port: 3306,          //MySQL服务器端口号
  user: 'root',        //数据库用户的用户名
  password: '',        //数据库用户密码
  database: 'yimiao',    //数据库名称
  connectionLimit: 20, //最大连接数
  charset: 'utf8'      //数据库服务器的编码方式
});

// 创建服务器对象
const server = express();

server.use(bodyParser.urlencoded({
  extended: false
}));


// 加载CORS模块
const cors = require('cors');

// 使用CORS中间件
server.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));

// 获取所有文章分类的接口
server.get('/category', (req, res) => {
  // SQL语句以获取文章分类表的数据
  let sql = 'SELECT id,category_name FROM xzqa_category ORDER BY id';
  // 执行SQL语句
  pool.query(sql, (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200, results: results });
  });
});

// 获取指定分类下包含文章数据的接口
server.get('/articles', (req, res) => {
  // 获取客户端传递的cid参数
  let cid = req.query.cid;

  // 获取客户端传递的page参数
  let page = req.query.page ? req.query.page : 1;

  // 存储每页显示的记录数
  let pagesize = 20;

  // 通过公式来计算从第几条记录开始返回
  let offset = (page - 1) * pagesize;

  // 用于存储获取到的总记录数
  let rowcount;

  // 获取指定分类下的文章总数
  let sql = 'SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?';

  pool.query(sql, [cid], (error, results) => {
    if (error) throw error;
    // 将获取到总记录数赋给rowcount变量
    rowcount = results[0].count;
    /**************************************************/
    // 根据总记录数和每页显示的记录数来计算总页数
    let pagecount = Math.ceil(rowcount / pagesize);

    // 查询SQL语句
    sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id=? LIMIT ?,?';
    // 执行SQL
    pool.query(sql, [cid, offset, pagesize], (error, results) => {
      if (error) throw error;
      res.send({ message: 'ok', code: 200, results: results, pagecount: pagecount });
    });

    /**************************************************/
  });

});

// 获取特定医院信息数据的接口
// server.get('/detail', (req, res) => {
//   //获取地址栏中的id参数
//   let id = req.query.id;

//   // SQL查询
//   let sql = 'select holdid as id,live_name,hcinfor,hcaddress,hctime,vacName,vaccincount,vaccincoutnow from liveid a,hcinfo b where a.live_name = b.live_name And a.holdid=?';

//   // 执行SQL查询
//   pool.query(sql, [id], (error, results) => {
//     if (error) throw error;
//     // 返回数据到客户端
//     res.send({ message: 'ok', code: 200, result: results[0] });
//   });

// });
server.get('/head', (req, res) => {
  let sql = 'select * from xinwen';
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send({ message: 'ok', code: 200, results: results })
  });
});
server.get('/xinwen/:head', (req, res) => {
  let head = req.params.head;
  let sql = 'select * from xinwen where head=?';
  pool.query(sql, [head], (err, results) => {
    if (err) throw err;
    res.send({ message: 'ok', code: 200, results: results })
  });
});


//用户注册接口
server.post('/register', (req, res) => {
  //console.log(md5('12345678'));
  // 获取用户名和密码信息
  let username = req.body.username;
  let password = req.body.password;
  let sex = req.body.sex;
  let phone = req.body.phone;
  let idicator = req.body.idicator;
  let brithday = req.body.brithday;
  let sql = 'INSERT users(username,password,sex,phone,idicator,brithday) VALUES(?,?,?,?,?,?)';
  pool.query(sql, [username, password, sex, phone, idicator, brithday], (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200 });
  })
});
// server.post('/detail', (req, res) => {
//   //获取特定医院信息数据的接口
//   let live_name = req.body.live_name;
//   // SQL语句
//   let sql = 'select live_name,hcinfor,hcaddress,hctime,vacName,vaccincount,vaccincoutnow from hcinfo  where live_name=?';
//   pool.query(sql, [live_name], (error, results) => {
//     if (error) throw error;
//     if (results.length == 0) { //登录失败
//       res.send({ message: 'login failed', code: 201 });
//     } else {                 //登录成功
//       res.send({ message: 'ok', code: 200, result: results[0] });
//     }
//   });

// });
server.post('/detail', (req, res) => {
  //获取特定医院信息数据的接口
  let live_name = req.body.live_name;
  // SQL语句
  let sql = 'select * from hcinfo  where live_name=?';
  pool.query(sql, [live_name], (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});
// 用户登录接口
server.get('/login/:username&&:password', (req, res) => {
  //获取用户名和密码信息
  let username = req.params.username;
  let password = req.params.password;
  // SQL语句
  let sql = 'SELECT * FROM users WHERE username=? AND password=?';
  pool.query(sql, [username, password], (error, results) => {
    if (error) throw error;
    if (results== null) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results[0]});
    }
  });

});


server.get('/xinxi/:username&&:password', (req, res) => {
  //获取用户名和密码信息
  let username = req.params.username;
  let password = req.params.password;
  console.log(username, password)
  // SQL语句
  let sql = 'select * from users where username=? and password=?';
  pool.query(sql, [username, password], (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results[0] });
    }
  });

});

//首页获取数据接口
server.get('/shouye', (req, res) => {
  //获取用户名和密码信息
  // SQL语句
  let sql = 'SELECT * FROM wotitle';
  pool.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});

//接种查询页面数据接口
server.get('/jiezhongzixun', (req, res) => {
  //获取用户名和密码信息
  // SQL语句
  let sql = 'SELECT * FROM health_query';
  pool.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});
//接种查询页面a数据接口
server.get('/jiezhongzixuna/:id', (req, res) => {
  //获取用户名和密码信息
  let id = req.params.id;
  // SQL语句
  let sql = 'SELECT * FROM health_query WHERE id=?';
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results[0] });
    }
  });

});




//健康助手数据获取接口
server.get('/news', (req, res) => {
  //获取用户名和密码信息
  // SQL语句
  let sql = 'SELECT * FROM healthnews';
  pool.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'login failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});


//新闻信息
server.get('/xiaoxi/:id', (req, res) => {
  let id = req.params.id;
  // SQL语句
  let sql = 'SELECT * from zhishi WHERE zhishi_id=?';
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    if (results.length == 0) { //登录失败
      res.send({ message: 'huoqu failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results[0] });
    }
  });

});
//获取居住信息
server.get('/address/:usersid', (req, res) => {
  // SQL语句
  let usersid = req.params.usersid;
  let sql = 'SELECT * from liver where usersid=?';
  pool.query(sql, [usersid], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      res.send({ message: 'huoqu failed', code: 201 });
    } else {                 //登录成功
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});
//获取xinwen导航栏
server.get('/nav', (req, res) => {
  // SQL语句
  let sql = 'SELECT * from nav';
  pool.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      res.send({ message: 'huoqu failed', code: 201 });
    } else {
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});
//获取xinwen导航栏数据
server.get('/neirong/:id', (req, res) => {
  let id = req.params.id;
  // SQL语句
  let sql = 'SELECT * from zhishi where zhishi_id=?';
  pool.query(sql, [id], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      res.send({ message: 'huoqu failed', code: 201 });
    } else {
      res.send({ message: 'ok', code: 200, result: results });
    }
  });

});

//获取xinwen内容二级页面数据
server.get('/nr/:lid', (req, res) => {
  let lid=req.params.lid;
  // SQL语句
  let sql = 'SELECT * from zhishi where lid=?';
  pool.query(sql,[lid],(error, results) => {
    if (error) throw error;
    if(results.length == 0){ 
      res.send({message:'huoqu failed',code:201});
    } else {
      res.send({message:'ok',code:200,result:results});
    }
  });

});

//获取搜索数据
server.get('/sousuo/:keyword', (req, res) => {
  let keyword=req.params.keyword;
  // SQL语句
  let sql = `SELECT * from zhishi where head like '%${keyword}%'`;
  pool.query(sql,(error, results) => {
    if (error) throw error;
    if(results.length == 0){ 
      res.send({message:'huoqu failed',code:201});
    } else {
      res.send({message:'ok',code:200,result:results});
    }
  });

});

//获取首页幕布流
server.get('/shouye2', (req, res) => {
  let sql = 'select * from shouye';
  pool.query(sql,(error, results) => {
    if (error) throw error;
    if(results.length == 0){ 
      res.send({message:'huoqu failed',code:201});
    } else {
      res.send({message:'ok',code:200,result:results});
    }
  });

});
// 指定服务器对象监听的端口号
server.listen(3000, () => {
  console.log('server is running...');
});