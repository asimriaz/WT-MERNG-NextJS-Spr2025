//import fs from  "fs"
const fs = require("fs");

fs.readFile('README.md', 'utf-8', function(err, data){
    console.log(data);
});

console.log(`Done`);