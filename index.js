const http = require('http');
const port = 5000;

const server = http.createServer((req,res) => {
    const url = req.url
    if(req.url === "/"){
            res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            res.write("<h2>İNDEX SAYFASINA HOŞ GELDİNİZ</h2>","utf-8");
    }   
    else if(req.url === "hakkimda"){
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.write("<h2>HAKKIMDA SAYFASINA HOŞ GELDİNİZ</h2>","utf-8");
    }
    else if(req.url === "iletisim"){
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.write("<h2>İLETİŞİM SAYFASINA HOŞ GELDİNİZ</h2>","utf-8");
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h2>404 SAYFA BULUNAMADI</h2>","utf-8");
    }

    res.end();  
});

server.listen(port, () =>{
    console.log(`Sunucu port ${port} de başlıtıldı`);
});
