var count =78;
var mentor="Ravi Tambade";
var status = false;
var express = require('express');
var product = {
    "id":66,
    "title":"Gerbera",
    "unitprice":12,                     //objects created using key value pair
    "quantity":7000,
    "imageurl":"/images/gerbera.jpg"
};

var flowers=[                                       //array
    {"id":66, "title":"Gerbera","unitprice":12,"quantity":7000, "imageurl":"/images/gerbera.jpg"},
    {"id":67, "title":"Rose","unitprice":23,"quantity":6300, "imageurl":"/images/rose.jpg"},
    {"id":66, "title":"Lily","unitprice":7,"quantity":8000, "imageurl":"/images/Lily.jpg"},
    {"id":66, "title":"Jasmine","unitprice":2,"quantity":97000, "imageurl":"/images/jasmine.jpg"}
];  

//to print we use console.log
console.log(count);
console.log(mentor);
console.log(product);
console.log(flowers);

//now customer dont want it to print on console but on browser

var app = express();



 app.get('/aboutus',  (req, res) =>{        //when someone ask for about us
    res.send('SIT campus');
 })

 app.get('/flowers',  (req, res) =>{
    res.send(flowers);                      //when someone asks about flowers
 })

 app.get('/',  (req, res) =>{
    var str="<h1>Vijay Sales Store</h1>"+"<hr/>"+
    "<a href ='' >Abouts us | </a>"+"<a href='' >Services</a>"+"</hr>"+
    "<ol><li>Engg</li> <li>Medical</li></ol>"   
    res.send(str);                   
 })

app.listen(9000);        //9000 is some port
console.log("Server is listening on port 9000");