import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(3000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
