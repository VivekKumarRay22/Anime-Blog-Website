import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2400;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.post("/contact",(req,res)=>{
    console.log(req.body);
    res.send("Your form submitted succesfully!");
});


app.get("/genre", (req, res) => {
    res.render("genre.ejs");
});


app.get("/reviews", (req, res) => {
    res.render("reviews.ejs");
});

app.get("/recommendations", (req, res) => {
    res.render("recommendations.ejs");
});



app.get("/about", (req, res) => {
    res.render("about.ejs");
});



app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});




app.get("/best_anime_movies", (req, res) => {
    res.render("best_anime_movies.ejs");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});