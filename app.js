let express = require("express")
const sequelize = require("./db")
const Person = require("./models")
let app = express()

sequelize
    .sync({ force: true })
    .then(() => console.log("Database was initialised..."))

app.use("/static", express.static("public"))

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/students", (req, res) => {
    res.render("students/index")
})

app.get("/students/create", (req, res) => {
    res.render("students/create")
})

app.listen(3000, () => {
    console.log("Running app on http://localhost:3000")
})
