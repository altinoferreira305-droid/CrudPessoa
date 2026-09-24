import express from "express"
import ControllerPessoa from '../controller/pessoa.js'

const router = express.Router()

<<<<<<< HEAD
router.get("/buscar",  ControllerPessoa.Buscar )
router.get("/buscarUm/ :id", ControllerPessoa.BuscarUm )
router.post("/criar", ControllerPessoa.Criar )
router.put("/alterar/ :id", ControllerPessoa.Alterar )
router.delete("/deletar/ :id", ControllerPessoa.Deletar )
=======
router.get("/buscar", ControllerPessoa.Buscar)
router.get("/buscarUm/:id", ControllerPessoa.BuscarUm)
router.post("/criar", ControllerPessoa.Criar)
router.put("/alterar/:id", ControllerPessoa.Alterar)
router.delete("/deletar/:id", ControllerPessoa.Deletar)
>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811


export default router