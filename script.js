//1
let age = 26

if (age >= 18){
    console.log(`A idade é igual/maior que 18`)
} else {
    console.log(`A idade é menor que 18`)
}

//2
let _age = 19
let isHuman = true
let isntHuman = false

if ((_age >= 18) && (isHuman)){
    console.log(`É humano e tem pelo menos 18 anos`)
}    else if((_age <= 18) || (isntHuman)){ 
        console.log(`Não é humano ou tem menos de 18 anos`)
}

//3
var month = `Janeiro`
if ((month === `Janeiro`) || (month === `Dezembro`)){
    console.log (`Você faz aniversário em Janeiro ou Dezembro`)
}

//4
var name = `rAdriel`
if((name[0] == `R`) || (name[0] == `r`)){
    console.log( `Seu nome começa com R`)
} else {
    console.log(`Seu nome NÃO começa com R`)
}

//5
var lastName = `Dias`
if ((lastName.length >= 6) || (name[0] == `e`) || (name[0] == `E`)){
    console.log(`Seu nome possui ao menos 6 letras e/ou seu nome começa com a letra E`)
} else {
    console.log(`Seu nome não começa com a letra E e seu sobrenome tem menos de 6 letras`)
}