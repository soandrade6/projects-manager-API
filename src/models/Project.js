import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from "./Task.js"

export const Project = sequelize.define(
  "Project",
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

Task.belogsTo(Project, {foreignKey: 'project_id'})
Project.hasMany(Task, {foreignKey: 'project_id'})
