import express from 'express';
import { createProject, getProjects, addTask, updateTask, deleteTask } from '../controllers/projectController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { validateTask } from '../validators/taskValidator.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', createProject);
router.get('/', getProjects);
router.post('/:projectId/tasks', validateTask, addTask);
router.put('/:projectId/tasks/:taskId', validateTask, updateTask);
router.delete('/:projectId/tasks/:taskId', deleteTask);

export default router;
