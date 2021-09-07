const router = require("express").Router();
const Movie = require("../models/Movies.model");
const Celebrity = require("../models/Celebrity.model");

//*CREATE
//*this is for the form
router.get("/create", (req, res) => {
    Celebrity.find().then(allCelebs => {res.render("new-movie", {allCelebs})});
  });
  
  //*list of movies
  router.get ("/", (req, res) =>{
      Movie.find().populate('cast').then(allMovies => {res.render("movies", {allMovies})})
      
  })
  router.post("/create", (req, res) => {
    const { title, genre, plot, cast } = req.body;
    console.log("see if it works")
    Movie.create({ title, genre, plot, cast })
      .then((newMovies) => res.redirect("/movies"))
      .catch((err) => res.redirect("/movies/new-movies"));
  });


module.exports = router;