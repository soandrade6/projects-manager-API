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

// La clave foránea debe referirse al campo `id` del modelo Project
Project.hasMany(Task, { foreignKey: 'project_id', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'project_id', targetKey: 'id' });
