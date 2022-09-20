//Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Patinete {

    cor: string
    qtdRodas: number
    velMax: number

    exibirDados(){
        console.log(`Cor: ${this.cor}\nQuantidade de Rodas: ${this.qtdRodas}\nVelocidade Máxima: ${this.velMax} Km/h`)
    }

    manobras(){
        if(patinete.velMax > 20){
            console.log('Manobra Radical')
        }
    }
}

const patinete = new Patinete()

patinete.cor = 'Cromado'
patinete.qtdRodas = 3
patinete.velMax = 30

patinete.exibirDados()
patinete.manobras()

// Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class contaBancaria{

    saldo: number

    exibirDados(){
        console.log(`Saldo atual: ${this.saldo}`)
    }

    saque(valor: number){

        this.saldo -= valor
    }

    deposito(valor: number){

        this.saldo += valor

    }
}

const minhaConta = new contaBancaria()
minhaConta.saldo = 3000
minhaConta.deposito(200)
minhaConta.saque(1500)
minhaConta.exibirDados()

// Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Paciente {

    nome: string
    idade: number
    peso: number
    altura: number
    casoGrave: boolean
    estado: string

    definirEstado(){
        if(this.casoGrave === true){
            this.estado = 'Sim'
        }else{
            this.estado = 'Não'
        }
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nPeso: ${this.peso}Kg\nAltura: ${this.altura}m\nCaso Grave: ${this.estado} `)
    }
}

const novoPaciente = new Paciente()

novoPaciente.nome = 'Thomás'
novoPaciente.idade = 26
novoPaciente.peso = 63
novoPaciente.altura = 1.73
novoPaciente.casoGrave = false

novoPaciente.definirEstado()
novoPaciente.exibirDados()