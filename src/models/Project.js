import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from "./Task.js"

export const Project = sequelize.define(
  'Projects',
  {
    project_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_project: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Task.belongsTo(Project, {foreignKey: 'project_id'})
Project.hasMany(Task, {foreignKey: 'project_id'})
