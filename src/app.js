const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;   // it will run at any port

//public staticPath
const static_Path = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

// create middileware
app.set("view engine", "hbs");
app.set('views', template_Path);
hbs.registerPartials(partials_Path);


app.use(express.static(static_Path));


// to get routing
app.get("", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("404error", {
        errorMSg:"OOPs! Page Not Found"
    });
});


app.listen(port, () => {
    console.log(`listening the port number ${port}`);
});