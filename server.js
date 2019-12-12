var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 0420

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];


app.get("/view", function(req,res){
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });


  app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i]) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });