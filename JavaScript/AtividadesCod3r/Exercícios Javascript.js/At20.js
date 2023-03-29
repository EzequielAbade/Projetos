function cedulas(valor) {
    let contador200 = 0, contador100 = 0, contador50 = 0, contador10 = 0, contador5 = 0, contador1 = 0;
    
    if (valor >= 200) {
      for (let i = 200; i <= valor; i += 200) {
        contador200++;
      }
      valor = valor % 200;
    }
    
    if (valor >= 100) {
      for (let i = 100; i <= valor; i += 100) {
        contador100++;
      }
      valor = valor % 100;
    }
    
    if (valor >= 50) {
      for (let i = 50; i <= valor; i += 50) {
        contador50++;
      }
      valor = valor % 50;
    }
    
    if (valor >= 10) {
      for (let i = 10; i <= valor; i += 10) {
        contador10++;
      }
      valor = valor % 10;
    }
    
    if (valor >= 5) {
      for (let i = 5; i <= valor; i += 5) {
        contador5++;
      }
      valor = valor % 5;
    }
    
    if (valor >= 1) {
      for (let i = 1; i <= valor; i++) {
        contador1++;
      }
    }
    
    console.log(`Notas de 200: ${contador200}`);
    console.log(`Notas de 100: ${contador100}`);
    console.log(`Notas de 50: ${contador50}`);
    console.log(`Notas de 10: ${contador10}`);
    console.log(`Notas de 5: ${contador5}`);
    console.log(`Notas de 1: ${contador1}`);
  }
  
  console.log(cedulas(450));