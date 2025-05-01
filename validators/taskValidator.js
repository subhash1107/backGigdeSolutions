import { body, validationResult } from 'express-validator';

export const validateTask = [
  body('title').notEmpty().withMessage('Task title is required'),
  body('status').optional().isIn(['Pending', 'In Progress', 'Completed']).withMessage('Invalid task status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
