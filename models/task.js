import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

const Task = sequelize.define("task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startTime:{
      type: DataTypes.DATE,
    },
    finishedTime:{
      type: DataTypes.DATE,
    },
    finished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: false,
  }
);

export default Task;
