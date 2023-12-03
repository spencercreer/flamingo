import express, { Application } from "express";
import routes from "./routes";
import connection from "./db/connection";

const app: Application = express();
const PORT = 6000;

app.use(express.json());
app.use(routes);

connection.once("open", () => {
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
