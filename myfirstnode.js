var http = require('http');
var fd=require('fs');

function printtxt(){
    var readdata = fd.readFileSync('input.txt');
    return readdata;
}

function getdate(){
    return Date();
}

// function read(){
//     fd.readFile('input.txt',function print(){
//         response.write("the input is  :: " + print().toString() +"<br />" );}
//     );
// }


http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("The date and time are currently: " + getdate() + "<br />");
    response.write("   next <br />");
   //  response.write("the input is  :: " + printtxt().toString() +"<br />" );
   // // response.write("the input is  :: " + print().toString() +"<br />" );
    response.end(' Hello World!');
}).listen(8080);

console.log(printtxt().toString());
console.log("Hello, World!");
