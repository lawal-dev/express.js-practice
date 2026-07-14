import express from "express";
import userRouter from "./routes/users.js";
import { users } from "../data/userData.js";
import adminRouter from "./routes/admin.js"
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser())
app.use(userRouter);
app.use(adminRouter)

app.get('/', (req, res)=>{
  res.cookie("access_token", "jjdkdjkjklsdskldkl", {maxAge: 6000 * 6 * 2, sameSite: "strict"})
  res.send()
    console.log("Welcome and working fine")
})
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const userId = parseInt(id);
  const user = users.find((user) => {
    return user.id === userId;
  });
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ msg: "user not found" });
  }
});

app.post("/user", (req, res) => {
  console.log(req.body);
});
app.listen(PORT, () => {
  console.log("Listening on PORT 4000");
});
