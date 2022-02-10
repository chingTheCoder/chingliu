import express from 'express'
import bosnia from './routes/bosnia.js'
import view from './routes/view.js'
import create from './routes/create.js'
import macau from './routes/macau.js'

const app = express();


app.set("view engine", "hbs")
app.use(express.static("public"))

app.use("/bosnia",bosnia )
app.use("/macau", macau)
app.use("/view", view)
app.use("/create", create)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
)