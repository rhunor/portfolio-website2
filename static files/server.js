const express = require("express");
const app = express();

app.get("/projectplanner",function(req,res){
  res.sendFile(__dirname + "/public/project-planner.html")
});
app.use(express.static(__dirname + '/public'));
app.listen(3000,function(){
  console.log("server started at port 3000")
});
