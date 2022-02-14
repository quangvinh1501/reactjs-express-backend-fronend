import { Sequelize } from "sequelize";

const db = new Sequelize('test1', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;