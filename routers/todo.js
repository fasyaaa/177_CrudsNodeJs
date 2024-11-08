const express = require('express');
const router = express.Router();

let todos = [
    {
    id: 1, task:'Belajar node.js', completed:false
    },
    {
    id: 2, task:'membuat API', completed:false
    }
];

// endpoint untuk mendapatkan data Todos
router.get('/', (req, res) => {res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;