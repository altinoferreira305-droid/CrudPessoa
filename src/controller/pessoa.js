<<<<<<< HEAD
import ServiceExercicio from '../service/pessoa.js'

class ControllerPessoa {

    Buscar(req, res) {
        try {
            const nomes = ServicoPessoa.Buscar()
            res.send({ nomes })

        } catch (e) {
            res.send({ menssage: error.message })
        }

        const nomes = ServicePessoa.Buscar()
=======
import ServicePessoa from '../service/pessoa.js'

class ControllerPessoa {
    Buscar(req, res) {
        try{
            const nomes = ServicePessoa.Buscar()

            res.send({ nomes })
        }catch (e){
            res.send({message: e.message})
        }
>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811
    }

    BuscarUm(req, res) {
        try {
<<<<<<< HEAD
            const id = requestAnimationFrame.params.id
            const nome = ServicePessoa.BuscarUm(id)
            res.send({ nome })
        } catch (error) {

            res.send({ menssage: error.message })
        }
    }

        Criar(req, res) {
            try {
                const nome = req.body.nome
                ServicePessoa.Criar(nome)
                res.send({ message: " Criado com sucesso" })
            } catch (error) {

                res.send({ menssage: error.message })
            }
        }


        Alterar(req, res) {
            try {
                const id = req.params.id
                const nome = req.body.nome
                ServicePessoa.Alterar(id, nome)
                res.send({ message: "Aletrado com sucesso" })
            } catch (error) {

                res.send({ menssage: Error.mesage })
            }

        }
        Deletar(req, res) {
            const id = req.params.id
            ServicePessoa.Deletar(id)
            res.send({ message: " Deletado com sucesso!" })
        } catch (error) {

            res.send({ menssage: Error.mesage })
        }
    }

=======
            const id = req.params.id

            const nome = ServicePessoa.BuscarUm(id)
           
            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome

            ServicePessoa.Criar(nome)
            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome

            ServicePessoa.Alterar(id, nome)
            
            res.send({ message: "Alterado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(idme) {
        try {
            const id = req.params.id
        
            cServicePessoa.Deletar(id)
            res.send({ message: "Deletado com sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

   

}
>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811

export default new ControllerPessoa()