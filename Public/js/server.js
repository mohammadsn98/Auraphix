//jshint esversion:6

const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();

//const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());


app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


app.listen(port, function(){
console.log("server started on port 3000")
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});


//app.listen(PORT, function(){
  //  console.log("server is up and running")
//});

  