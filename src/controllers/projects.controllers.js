import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project)
      return res.status(400).json({ message: "Project does not exists" });
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, description} = req.body;

  try {
    const newProject = await Project.create({
      name,
      description,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const project = await Project.findByPk(id);

    project.name = name;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findAll({
    where: {
      project_id : id,
    },
  });

  res.json(tasks);
};
