module.exports = function (app) {    
    const log = console.log;
    const chalk = require('chalk');    

    
    // MYSQL
    let mysql = require('mysql2');
    
    function reconnect_db(){
        let db = mysql.createPool({
            connectionLimit : 10,
            host     : 'akuznetsov.beget.tech',
            user     : 'akuznetsov_db',
            database : 'akuznetsov_db',
            password : '***' 
        });
        db.on('error', function(err){
            log(err.code);
        if(err.code == 'PROTOCOL_CONNECTION_LOST') db = reconnect_db();
        else throw err;
        });
    
        return db;
    }
    let db = reconnect_db();
    
   // ===================== 
    


    app.get("/", function(request, response){    
        response.render("index");
        log(`url: ${chalk.green(request.url)}`)
    });

    app.get("/about", function(request, response){  
        
        let result = [];

        db.query('select * from tasks', 
        function(error, result, fields){
            let data = [];

            if (error) throw error;
            for (let i = 0; i < result.length; i++) {
                let row = {
                    id: result[i].id,
                    name: result[i].name
                }
                data.push(row)
            }
 
            response.render("about", {data: data});
            log(`url: ${chalk.green(request.url)}`)
        });
        
    });    

}