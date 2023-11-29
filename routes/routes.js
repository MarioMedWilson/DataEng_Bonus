import express from "express";
import user from "../controller/user.js";
import task from "../controller/task.js";

const routes = express();

// User
routes.post('/user/create', user.createUser);
routes.delete('/user/delete', user.deleteUser);
routes.put('/user/update', user.updateUser);

// Tasks
routes.get('/get-task', task.showTask);
routes.post('/create-task', task.createTask);
routes.put('/update-task', task.updateTask);
routes.delete('delete-task', task.deleteTask);

export default routes;
