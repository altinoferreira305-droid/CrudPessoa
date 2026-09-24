import Pessoa from '../model/pessoa.js'
<<<<<<< HEAD
class ServicePessoa {

    Buscar() {
        return Pessoa.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)){
            throw new Error("Favor Inforar somente numeros")
        }
        return Pessoa.BuscarUm(id)
    }
    Criar(nome) {
        if(!nome) {
            throw new Error("Favor Inforar o nome")
        }
        Pessoa.Criar(nome)
    }
    Alterar(id, nome) {
        if(!id || isNaN(id) || !nome){
            throw new Error("Favor Inforar todos os dados")
        }
        Pessoa.Alterar(id, nome)
    }
    Deletar(id) {
        if(!id || isNaN(id)){
            throw new Error("Favor Inforar o Id corretamente")
        }
        Pessoa.Deletar(id)
    }
    
}

=======

class ServicePessoa {

    Buscar() {

        return Pessoa.Buscar()
    }

       
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Pessoa.BuscarUM(id)
    }
    
    Criar(nome) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        Pessoa.Criar(nome)
    }
    
    Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
       
        Pessoa.Alterar(id, nome)
    }
    
    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o id corretamente")
        }
        
        Pessoa.Deletar(id)
    }
}


>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811
export default new ServicePessoa()