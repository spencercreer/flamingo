import express, { Application } from "express";
import session from "express-session";
import routes from "./routes";
import connection from "./db/connection";
import cors from "cors";

const app: Application = express();
const PORT = 6000;

app.use(
  session({
    name: "myCookie",
    secret: "your-secret-key", // Change this to a random and secure string
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(routes);
app.use(cors());

connection.once("open", () => {
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
