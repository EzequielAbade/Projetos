const a = 1
const b = 2
const c = 3

const obj1 = {ha: a, be: b, ce: c } // essa notação é possivel altera a descrição das constantes do meu objeto
const obj2 = {a, b, c} // Por padrão ele ja reconhece as constantes 
console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1 : function() { //Forma de criar uma funcao dentro do objeto
        //..
    },
    funcao2 (){ // também é posivel criar uma função sem passa a "Function ()"
      //..  
    }
}
console.log(obj5)