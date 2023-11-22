const express = require("express");
const router = express.Router();
const { 
  createproject,
  getprojects,
  getproject,
  updateproject,
  deleteproject
  
 } = require("../controllers/ProjectController");

 
// get all projects
router.get('/', getprojects);

// get one project
router.get('/:id', getproject);

// create a project
router.post('/', createproject );

// delete a project
router.delete('/:id', deleteproject);

// update a project
router.patch('/:id', updateproject);





module.exports = router