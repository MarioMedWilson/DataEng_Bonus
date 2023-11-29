import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

const User = sequelize.define("user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

export default User;
