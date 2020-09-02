// default dependancies

var fs = require("fs");
var http = require("http");
var https = require("https");
var net = require("net");
var url = require("url");


// default files

var homeHtmlPage = require("./pages/html/home.html");
var loginHtmlPage = require("./pages/html/login.html");
var logoutHtmlPage = require("./pages/html/logout.html");
var shopHtmlPage = require("./pages/html/shop.html");


// default datas




// Server function

var Server = http.createServer(function (req, res) {
     
     var page = url.parse(req.res).query;
     
     if (page == "/home") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(homeHtmlPage)
          
     }
     
     if (page == "/login") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(loginHtmlPage)
          
     }
     
     if (page == "/logout") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(logoutHtmlPage)
          
     }
     
     if (page == "/shop") {
          
          res.writeHead(200, {"Content-Type": "text/html"})
          res.write(shopHtmlPage)
          
     }
     
});

Server.listen(serverPort, serverAddress);
