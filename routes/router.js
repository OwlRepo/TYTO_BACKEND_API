const express = require('express');
require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt')
const connects = require('../middleware/connection.js')
const studentcollection = require('../models/studentCollection.js');
const hashval = 10;



router.use(express.json())
router.use(express.urlencoded({ extended: false }))
router.post("/login", async (req, res) => {
    try {
      connects();
      const user = await studentcollection.findOne({_id: req.body.student_id});
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {  
          //   jwt banatan
          res.send(user);
        } else {
          res.send("Wrong username or password.");
        }
      } else {
        res.send("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });

  router.post('/register', async (req, res, next) => {
    connects();
    try{
        const cryptedpass = await bcrypt.hash(req.body.password, hashval)
        const newModel = new studentcollection({
            _id: req.body.student_id,
            name: req.body.name,
            email: req.body.email,
            password:cryptedpass
        })
        newModel.save();
        res.send('success');
        return next();
    }
catch(err){
    res.send({message: err});
    res.status(400);
}
});

module.exports = router;