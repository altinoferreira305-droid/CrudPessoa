<<<<<<< HEAD
import express from 'express' 
import router from "./src/router/pessoa.js"
=======
import express from 'express'
import router from './src/router/pessoa.js'
>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811

const app = express();
app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})