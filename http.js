var http = require('http');
var fs = require('fs')
function func(request , response){
    if(request.url == '/'){
        console.log('Sunucu çalışıyor')
        response.writeHeader(200,{'Context-Type':'text-plain'});
        fs.createReadStream('./benim.html').pipe(response);
    }else{
        response.writeHeader(404,{'Context-Type':'text-plain'});
        response.write('hatalı sayfa');
        response.end();
    }
}
http.createServer(func).listen(8000);
console.log('sunucu çalışıyor...')