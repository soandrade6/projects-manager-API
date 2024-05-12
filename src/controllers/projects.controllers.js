import { Project } from "../models/Project.js";

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
    const { project_id } = req.params;

    const project = await Project.findOne({
      where: {
        project_id,
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
  const { project_name, description_project } = req.body;

  try {
    const newProject = await Project.create({
      project_name,
      description_project,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { project_id } = req.params;
    const { project_name, description_project } = req.body;

    const project = await Project.findByPk(project_id);

    project.project_name = project_name;
    project.description_project = description_project;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { project_id } = req.params;
    await Project.destroy({
      where: {
        project_id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
