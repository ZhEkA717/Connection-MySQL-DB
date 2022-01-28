let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Unypyrebe333kdk@m@',
    database: 'test'
});

connection.connect(err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database ----------Connect');
    }
});

let query = "select*from newtable";

connection.query(query,(err,result,field)=>{
    console.log(err);
    console.log(result);
    console.log(result[0].name);
    
});

connection.end(err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database--------Disconnect')
    }
})