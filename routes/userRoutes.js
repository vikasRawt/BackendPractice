const express = require("express");
const { home, createUser, getUser, deleteUser, updateUser} = require("../controllers/controllers");

const router = express.Router();

router.get("/",home)
router.post("/createuser",createUser)
router.get('/getuser',getUser)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateUser/:id',updateUser)
module.exports = router