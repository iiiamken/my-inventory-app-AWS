import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
//Route imports
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoute from "./routes/expenseRoute"
//configurations
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//routes
app.use("/dashboard", dashboardRoutes) // http://localhost:8000/dashboard
app.use("/products", productRoutes) // http://localhost:8000/products
app.use("/users", userRoutes) // http://localhost:8000/users
app.use("/expenses", expenseRoute) // http://localhost:8000/expenses

//server
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
