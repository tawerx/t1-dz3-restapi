import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks/", taskRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
