var fs = require('fs')
var concat = require('concat-stream')

console.log('reading the file test.txt...');
fs.readFile('concat.txt', 'utf8',function(err,data){
    if(err) throw err;
    console.log('Returning the values of the file as an array: ');
    var data = data.split('');
    console.log(data);
});
