
import Express from "express";
import cors from "cors";
import eventRoute from "./routes/eventRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import pembicaraRoute from "./routes/pembicaraRoute.js";
import authRoute from "./routes/authRoute.js";

const app = Express();
const port = 3000;
app.use(cors())


app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Ini Adalah Api Nappa Milano");
});
app.use("/events", eventRoute);
app.use("/categories", categoryRoute);
app.use("/pembicara", pembicaraRoute);
app.use("/auth", authRoute);  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


