import { db } from "../db";

export const getTasks = (req, res) => { 
    db.query('SELECT * FROM tasks ORDER BY id DESC;', (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al obtener las tareas');
        }
        res.json(rows);
    });
}

export const getTask = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al obtener la tarea');
        }
        res.json(rows);
    });
}

export const getTasksCount = (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM tasks', (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al consultar todas las tareas');
        }
        res.json(rows);
    });
}

export const createTask = (req, res) => { 
    const { title, description } = req.body;
    db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al añadir tarea');
        }
        res.json({
            id: rows.insertId,
            message: 'Tarea añadida correctamente',
            task: req.body
        });
    });
}

export const updateTask = (req, res) => { 
    const id = req.params.id;
    const { title, description } = req.body;
    db.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al actualizar tarea');
        }
        res.json({
            id: rows.insertId,
            message: 'Tarea actualizada correctamente',
        });
    });
}

export const deleteTask = (req, res) => { 
    const id = req.params.id;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error al eliminar tarea');
        }
        res.json({
            id: rows.insertId,
            message: 'Tarea eliminada correctamente',
        });
    });
}