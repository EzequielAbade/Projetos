class Lancamento {
    constructor( nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    addLancamentos(...Lancamentos){
        Lancamentos.forEach(l => this.Lancamentos.push(l))
    }

    sumario() {
    let valorConsolidado = 0
    this.Lancamentos.forEach(l => {
        valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contadeluz = new Lancamento('luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contadeluz)
console.log(contas.sumario())