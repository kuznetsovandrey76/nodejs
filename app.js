const log = console.log;


// chalk - terminal string styling
const chalk = require('chalk');
const express = require("express");
const app = express();


app.use(express.static(__dirname + '/public'));


// const path = require('path');
// log(`filename: ${chalk.yellow(path.basename(__filename))}`)
// log(`dirname: ${chalk.yellow(path.dirname(__filename))}`)


// const fs = require('fs');
// fs.readdir(path.dirname(__filename), (err, data) => {
//     if (err) throw err;
//     log(data);
// })

 
// const os = require('os');
// log(`arch: ${chalk.green(os.arch())}`)
// log(`platform: ${chalk.green(os.platform())}`)


app.set("view engine", "pug");

// after all app.use
require('./routes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log(`Server running... \n` + chalk.black.bgGreen(`http://localhost:${PORT}/`)));