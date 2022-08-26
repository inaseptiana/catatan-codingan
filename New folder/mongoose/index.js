const express = require("express");
const cors = require("cors");

const dbConnection = require("./config/db.Connection");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 9001;

dbConnection.then(() => console.log("berhasil connect")).catch((error) => console.log("error", error));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("running on port:" + PORT);
});
