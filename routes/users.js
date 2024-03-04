const express = require("express");
const router = express.Router();

//router will automatically fill in /users for route

//list out all users
router.get("/", (req, res) => {
  res.send("User List");
});

//get a new user
router.get("/new", (req, res) => {
  res.send("User New Form");
});

//create new user
router.post("/", (req, res) => {
  res.send("Create User");
});

//MAKE SURE TO PUT ALL DYNAMIC PARAMETERS AT THE BOTTOM OF ROUTES
//:id is a dynamic parameter, req.params.id to call variable
// router.get('/:id', (req, res)=>{
//   res.send(`Get User with ID ${req.params.id}`)
// })

// router.put('/:id', (req, res)=>{
//   res.send(`Update User with ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res)=>{
//   res.send(`Delete User with ID ${req.params.id}`)
// })

//router.route can chain together the .get, .put and .delete routes into a single route
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

const users = [{name: 'Kyle'}, {name: 'Sally'}]

//middleware function runs anytime route has parameter of id
//req.user gets user at index of id, allows req.user to be called upon as a variable
//next() is require at the end of the function, allows Express to move to next middleware
router.param('id', (req, res, next, id)=>{
  req.user = users[id]
  next()
})

module.exports = router;
