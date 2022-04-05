let express = require("express")
const sequelize = require("./db")
const { Student, Course } = require("./models")
let app = express()

sequelize
    .sync({ alter: true })
    .then(() => console.log("Database was initialised..."))

// Student.create({
//     first_name: "John",
//     last_name: "Doe",
//     birth_date: new Date("2002-01-01"),
//     group: "4BIS99",
//     level: 4,
//     course_id: 2,
// })
//     .then(() => console.log("Created new student"))
//     .catch((e) => console.log(e))

app.use("/static", express.static("public"))

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("404")
})

app.get("/students", async (req, res) => {
    let students = []
    try {
        students = await Student.findAll()
    } catch (error) {
        console.log(error)
    }
    res.render("students/index", { students })
})

app.get("/student/view/:id", async (req, res) => {
    let id = req.params.id
    let model = await Student.findByPk(id)
    if (model !== null) {
        res.render("students/view", { model })
    } else {
        res.render("404")
    }
})

app.get("/student/create", (req, res) => {
    res.render("students/create")
})

app.listen(3000, () => {
    console.log("Running app on http://localhost:3000")
})
