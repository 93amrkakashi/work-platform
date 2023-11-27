const projects = require("../models/projectModel");
const mongoose = require("mongoose");
const { formatISO } = require('date-fns');
// get all projects
const getprojects = async (req, res) => {
  const projectss = await projects.find({}).sort({ createdAt: -1 });
  res.status(200).json(projectss);
};

// get one project
const getproject = async (req, res) => {
  const { id } = req.params;
  const project = await projects.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "this project does not exist" });
  }
  if (!project) {
    return res.status(400).json({ error: "this project does not exist" });
  }
  res.status(200).json(project);
};

// create a project
const createproject = async (req, res) => {
  const { name, description, image,category } =
    req.body;
  // const outDate = formatISO(Date.now(), { representation: 'complete' });
  try {
    const project = await projects.create({
      name,
      description,
      image,
      category,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a project
const deleteproject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "this blog does not exist" });
  }
  const project = await projects.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "this project does not exist" });
  }
  res.status(200).json(project);
};

// update a project
const updateproject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid({ id })) {
    return res.status(400).json({ error: "this project does not exist" });
  }
  console.log(id);

  const project = await projects.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!project) {
    return res.status(400).json({ error: "this project does not exist" });
  }
  res.status(200).json(project);
};

module.exports = {
  createproject,
  getprojects,
  getproject,
  updateproject,
  deleteproject,
};
