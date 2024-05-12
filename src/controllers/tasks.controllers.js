import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const task = await Task.findOne({
      where: {
        task_id,
      },
    });
    if (!task) return res.status(400).json({ message: "Task does not exists" });

    res.json(task);
  } catch (error) {}
};

export const createTask = async (req, res) => {
  const { project_id, creation_date, title, description_task } = req.body;

  try {
    const newTask = await Task.create({
      project_id,
      creation_date,
      title,
      description_task,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { title, description_task } = req.body;

    const task = await Task.findByPk(task_id);

    task.title = title;
    task.description_task = description_task;
    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    await Task.destroy({
      where: {
        task_id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
