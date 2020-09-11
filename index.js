var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var friends = [];

app.get("/", (req, res) => {    
    res.render("friends", {friends: friends});
})

app.post("/addfriend", (req, res) => {
    console.log(req.body);
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/");
})

app.get("/speak/:animalName", (req, res) => {
    var animal = req.params.animalName;
    if (animal == "pig") {res.send("The " + animal + " says 'Oink'")} 
    else if (animal == "cow") {res.send("The " + animal + " says 'Moo'")}
    else if (animal == "dog") {res.send("The " + animal + " says 'Woof Woof'")}
});

app.get("/repeat/:mesg/:freq", (req, res) => {
    var mesg = req.params.mesg;
    var freq = Number(req.params.freq);
    var temp = [];
    temp.push(mesg);
    for (var i = 0; i < freq - 1; i++) {
      temp.push(" " + mesg);
    }
    res.send(temp.join(""));
});

app.get("*", (req,res) => {
    res.send("Sorry, page not found!");
});

app.listen(2000, function(){
    console.log("Server started")
});

