const express = require("express");
const app = express();

//set up app view engine with ejs
app.set("view engine", "ejs");

//navigating to / path prints "Here" to console and json "Error" to page
// app.get('/', (req, res)=>{
//   console.log('Here')
//   res.json({message : "Error"})
// })

//render the index.html file with ejs
app.get("/", (req, res) => {
  res.render("index", { text: "World" });
});

//set app to listen on port 3000
app.listen(3000);
