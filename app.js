const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const {
    json
} = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

})

app.post("/", function (req, res) {
    const firstName = req.body.firstN;
    const lastName = req.body.lastN;
    const heroLevel = req.body.level;
    const email = req.body.email;

    const data = {

        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }

        }]


    }

    const jsonData = JSON.stringify(data);


    const url = "https://us10.api.mailchimp.com/3.0/lists/a3fbaf830b"
    const options = {
        method: "POST",
        auth: "apikey:b6fb94b570f0343acb193145ab0eeab3-us10"
    }
    const request = https.request(url, options, function (response) {
       
        response.on("data", function(data) {
            console.log(JSON.parse(data));
           
        })

        if ( response.statusCode === 200 ) {
            res.sendFile(__dirname+"/success.html");
        } else {
            res.sendFile(__dirname+ "/failure.html");
        }
    })
    app.post("/failure", function (req,res) {
        res.redirect("/");
    }) 

    request.write(jsonData);
    request.end();
       
})





app.listen(process.env.PORT ||3000, function () {
    console.log("server is working at port 3000");
})


// api key b6fb94b570f0343acb193145ab0eeab3-us10
// list id a3fbaf830b