const sequelize = require("./db")
const { Student } = require("./models")

let express = require("express")
let app = express()

let port = process.env.PORT || 3000
sequelize
    .sync({ alter: true })
    .then(() => console.log("Database was initialised..."))

let courses = [
    { id: 1, nameShort: "BM" },
    { id: 2, nameShort: "BIS" },
    { id: 3, nameShort: "Fin" },
    { id: 4, nameShort: "EcoFin" },
    { id: 5, nameShort: "CL" },
]

app.use("/static", express.static("public"))
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/students", async (req, res) => {
    let students = []
    try {
        students = await Student.findAll()
    } catch (error) {
        console.log(error)
    }
    res.render("students/index", { students, courses })
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
    let student = {
        first_name: "",
        last_name: "",
        birth_date: "",
        group: "",
        level: "",
        course_id: "",
    }
    res.render("students/create", { student })
})

app.post("/student/store", async (req, res) => {
    await Student.create(req.body)
    res.redirect("/students")
})

app.get("/student/update/:id", async (req, res) => {
    let id = req.params.id
    let model = await Student.findByPk(id)
    if (model !== null) {
        res.render("students/update", { model })
    } else {
        res.render("404")
    }
})

app.post("/student/edit/:id", async (req, res) => {
    let id = req.params.id
    let model = await Student.findByPk(id)
    await model.update(req.body)
    res.redirect("/students")
})

app.get("/student/delete/:id", async (req, res) => {
    let id = req.params.id
    let model = await Student.findByPk(id)
    await model.destroy()
    res.redirect("/students")
})

app.listen(port, () => {
    console.log(`Running app on port ${port}`)
})
