let express = require("express")
let app = express()

app.use('/static', express.static('public'))

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000)
