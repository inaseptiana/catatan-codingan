const express = require("express");
const app = express();

const sequelize = require("./config/dbConnection");
const UserModel = require("./models/UserModel");
const Router = require("./routes");

const PORT = process.env.PORT || 8000;

app.use(express.json());

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("sukses");

    await UserModel.sync({ alter: true });
  } catch (error) {
    console.log("error", error);
  }
}

testConnection();

app.use(Router);

app.listen(PORT, () => {
  console.log("tes");
});
