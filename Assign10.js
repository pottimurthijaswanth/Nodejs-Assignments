var fs =require('fs');

fs.writeFile('Writingon.txt',"hey ho!lets go",function(err){
    if(err) throw err;
    console.log('the file has been saved');

});

fs.appendFile('WritingOn.txt', "\nit's a long way to the top...",function(err){
    if(err) throw err;
    console.log('the file has been updated');
});

fs.readFile('writingOn.txt', 'utf8',function(err,data){
    if(err) throw err;
    console.log(data);
});
