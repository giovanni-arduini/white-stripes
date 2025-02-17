const express = require("express");
const app = express();
const port = 3000;
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const stripesRouter = require("./routers/stripesRouter.js");
const usersRouter = require("./routers/usersRouter.js")

app.use(express.json())
app.use(express.static("public"))

app.use("/api/stripes", stripesRouter);
app.use("/api/users", usersRouter)

app.get("/", (req, res)=>{
    res.send("Server is running")
})

app.use(notFound);
app.use(errorsHandler);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})