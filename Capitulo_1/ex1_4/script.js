const fruta = 'Banana' 
    const preco = 1.30
    const levar = true
    let novoValor
    console.log(typeof fruta); //String
    console.log(typeof preco); //Number
    console.log(typeof levar); //Boolean
    console.log(typeof novoValor); //Undefined

    //Number
    //Em number podemos ainda verificar se uma variável é do tipo number, assim como verificar se o número é inteiro ou possui decimais, exemplo:
    Number.isInteger();
    console.log(Number.isInteger(12)); //true
    console.log(Number.isInteger(3.50)); //false