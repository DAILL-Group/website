// default dependancies

var fs = require("fs");
var http = require("http");
var https = require("https");
var net = require("net");
var url = require("url");


// default files

var homeHtmlPage = require("./files/html/home.html");
var loginHtmlPage = require("./files/html/login.html");
var logoutHtmlPage = require("./files/html/logout.html");
var registerHtmlPage = require("./files/html/register.html");
var shopHtmlPage = require("./files/html/shop.html");


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
