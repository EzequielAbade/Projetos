const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari._proto_)
console.log(ferrari._proto_ === Object.prototype)
console.log(volvo._proto_ === Object.prototype)
console.log(Object.prototype._proto_)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)