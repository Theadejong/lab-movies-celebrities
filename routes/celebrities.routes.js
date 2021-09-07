const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

//*CREATE
//*this is for the form
router.get("/create", (req, res) => {
    res.render("new-celebrity");
  });
  
  //*list of celebrities
  router.get ("/", (req, res) =>{
      Celebrity.find().then(allCelebs => {res.render("celebrities", {allCelebs})})
  })
  router.post("/create", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    console.log("see if it works")
    Celebrity.create({ name, occupation, catchPhrase })
      .then((newCeleb) => res.redirect("/celebrities"))
      .catch((err) => res.redirect("/celebrities/new-celebrity"));
  });


  //FIND ALL CELEBRITIES
  router.get(
    '/',
    (req, res) => {
    Celebrity .find()
    .then(allCelebrities => {res.render('celebrities', {allCelebrities})})
    .catch((err) => console.log('error'));
  });

module.exports = router;