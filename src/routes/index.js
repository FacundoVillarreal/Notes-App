const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./users/signin");
  

});
router.get("/about", (req, res) => {
  res.render("about");
});

router.post('/', (req, res) =>{
})
module.exports = router;
