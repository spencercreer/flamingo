import express, { Application } from "express";
import routes from "./routes";
import connection from "./db/connection";
import cors from "cors";

const app: Application = express();
const PORT = 6000;

app.use(express.json());
app.use(routes);
app.use(cors());

connection.once("open", () => {
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
