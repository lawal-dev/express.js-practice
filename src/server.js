import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

const users = [
  {
    id: 1,
    username: "toheeb",
    course: "CSC",
  },
  { 
    id: 2,
    username: 'sarah',
    course: 'IT'

  },
];

app.get("/users", (req, res) => {
    console.log(req.query)
    const {search} = req.query
    console.log(search)
    if(!search){
        res.status(200).send(users)
    }
     else{
        res.status(200).send(
            users.filter((user)=>{
                return user.username.includes(search)
            })
        )
    }
   
//   res.status(200).send({ msg: "Welcome here", users });
});

app.get("/users/:id", (req, res)=>{
    const id = req.params.id
    const userId = parseInt(id)
    const user = users.find((user)=>{
       return user.id === userId
    })
    if(user){
        res.status(200).send(user)
    }
    else
    {
        res.status(404).send({msg: "user not found"})
    }


})
app.listen(PORT, () => {
  console.log("Listening on PORT 4000");
});
