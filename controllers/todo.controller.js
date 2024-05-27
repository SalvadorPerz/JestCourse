const { TodoModel } = require("../model/todo.model");

const createTodo = async (req, res, next) => {
    try {
        const createdTodo = await TodoModel.create(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        next(error);
    }
};

module.exports = { createTodo };