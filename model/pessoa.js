<<<<<<< HEAD
const nome = new Array("Ana", "batata"," Joao")
class Pessoa{
    
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return nome[id]
    }
    Criar(nome) {
        nomes.push(nome)
    }
    Alterar(id) {
        nomes[id] = nome
    }
    Deletar(id) {
        nomes.splice(id, 1)
    }

}
=======
const nomes = new Array ("Ana", "Batata", "João")

class Pessoa {
    Buscar() {
        return nomes
    }
    BuscarUM(id) {
        return nomes[id]
    }

    Criar(nome) {
        nomes.push(nome)
    }

    Alterar(id, nome) {
        nomes[id] = nome
    }

    Deletar(id) {
        nomes.splice(id, 1)
    }
}

>>>>>>> 66b76e624b1ed8abc702c7dc7c15ec6cf004c811
export default new Pessoa()