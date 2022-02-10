import express, { query } from "express"
let router = express.Router()



router.get("/", (req, res) => {
    res.render("bosnia")
})

router.post("/", (req, res) => {
    res.redirect("/macau")
})


export default router