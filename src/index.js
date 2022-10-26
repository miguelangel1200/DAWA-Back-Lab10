import express from "express";
import cors from "cors"
import { CategoryRouter, ProductRouter } from "./components"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/api/category", CategoryRouter)
app.use("/api/product", ProductRouter)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
