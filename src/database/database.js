import Sequelize from "sequelize";

export const sequelize = new Sequelize("projects-manager", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

