 function pessoa () {
    this.idade = 0

    setInterval(function() {  //Dispara uma outra função a parti do determinado time que foi declarado
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)  // os 1000 são em milisegundos que da 1 segundo
 }
 new pessoa

 function pessoa1 () {
    this.idade = 0

    const self = this
    setInterval(function() {  //Dispara uma outra função a parti do determinado time que foi declarado
        self.idade++
        console.log(self.idade)
  }, 1000)  // os 1000 são em milisegundos que da 1 segundo
 }
 new pessoa1