import { Router } from "express";
import { getTasks, getTask, getTasksCount, createTask, updateTask, deleteTask } from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

router
    /**
     * @swagger
     * /tasks:
     *  get:
     *   summary: Get all tasks
     *   tags: [Tasks]
     *    
    */
    .get('/tasks', getTasks)
    /**
     * @swagger
     * /tasks/count:
     *  get:
     *   summary: Get the number of tasks
     *   tags: [Tasks]
    */
    .get('/tasks/count', getTasksCount)
    /**
     * @swagger
     * /tasks/{id}:
     *  get:
     *   summary: Get a task by id
     *   tags: [Tasks]
    */
    .get('/tasks/:id', getTask)
    /**
     * @swagger
     * /tasks:
     *  post:
     *   summary: Create a task
     *   tags: [Tasks]
     *  parameters:
     *   - name: Title of the task
     *   - description: Description of the task
    */
    .post('/tasks', createTask)
    /**
     * @swagger
     * /tasks/{id}:
     *  put:
     *   summary: Update a task
     *   tags: [Tasks]
     */
    .put('/tasks/:id', updateTask)
    /**
     * @swagger
     * /tasks/{id}:
     *  delete:
     *   summary: Delete a task
     *   tags: [Tasks]
    */
    .delete('/tasks/:id', deleteTask);

export default router;