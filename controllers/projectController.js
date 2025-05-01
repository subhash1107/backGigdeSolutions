import Project from '../models/Project.js';

export const createProject = async (req, res, next) => {
  try {
    const count = await Project.countDocuments({ userId: req.user.id });
    if (count >= 4) return res.status(400).json({ message: 'Project limit reached' });

    const project = await Project.create({ name: req.body.name, userId: req.user.id });
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ userId: req.user.id });
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

export const addTask = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.projectId, userId: req.user.id });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.tasks.push(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.projectId, userId: req.user.id });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const task = project.tasks.id(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    Object.assign(task, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.projectId, userId: req.user.id });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.tasks = project.tasks.filter(task => task.id !== req.params.taskId);
    await project.save();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
