let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}; 

if (produtoA.internacional == true) {
let preco = produtoA.valor
let imposto = 0.2
let valorcomimposto = preco +preco * imposto
console.log("o valor com imposto é:", valorcomimposto)
}else{
    console.log("o valor com imposto é:", produtoA.valor + produto.valor * 0.12)

}

if (produtoA.internacional == true) {
    let preco = produtoB.valor
    let imposto = 0.2
    let valorcomimposto = preco +preco * imposto
    console.log("o valor com imposto é:", valorcomimposto)
    }else{
        console.log("o valor com imposto é:", produtoB.valor + produto.valor * 0.12)
    
    }
    if (produtoA.internacional == true) {
        let preco = produtoC.valor
        let imposto = 0.2
        let valorcomimposto = preco +preco * imposto
        console.log("o valor com imposto é:", valorcomimposto)
        }else{
            console.log("o valor com imposto é:", produtoC.valor + produto.valor * 0.12)
        
        }