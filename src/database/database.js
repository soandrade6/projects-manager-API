import Sequelize from "sequelize";

export const sequelize = new Sequelize("projects_manager", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

