let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myFamily'
});

connection.connect(err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database ----------Connect');
    }
});

let query = "select*from family where name = 'Dashka' ";

connection.query(query,(err,result,field)=>{
    console.log(err);
    console.log(result);
    console.log(result[0].name);
    
});

connection.end(err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database--------Disconnect');
    }
});

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'unypyrebe'