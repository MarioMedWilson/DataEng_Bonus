import sequelize from "./connection.js";
import User from "../models/user.js";
import Task from "../models/task.js";

const createTables = () => {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Tables have been created");
    })
    .catch((err) => {
      console.log(err);
    });
};

User.hasMany(Task, { foreignKey: 'assignedTo' });
Task.belongsTo(User, { foreignKey: 'assignedTo' });

export default createTables;
