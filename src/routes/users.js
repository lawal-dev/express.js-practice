import { Router } from "express";
import { users } from "../../data/userData.js";

const router = Router();

router.get("/users", (req, res) => {
  console.log(req.query);
  const { search } = req.query;
  console.log(search);
  if (!search) {
    res.status(200).send(users);
  } else {
    res.status(200).send(
      users.filter((user) => {
        return user.username.includes(search);
      }),
    );
  }

  //   res.status(200).send({ msg: "Welcome here", users });
});

export default router;
