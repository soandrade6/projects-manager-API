import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from "./Task.js"

export const Project = sequelize.define(
  'Projects',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Task.belongsTo(Project, {foreignKey: 'project_id'})
Project.hasMany(Task, {foreignKey: 'id'})
