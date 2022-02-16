let senha = prompt("Qual a senha?")
let caracNeed = [1,1,1,1]
let requirementsMissing = 0

//Expressões regulares
var upperCase = /[A-Z]/;
var lowerCase = /[a-z]/; 
var number = /[0-9]/;
var specialChar = /[!|@|#|$|%|^|&|*|(|)|-|+]/;

//Funções Verificadoras
const upperCheck = (senha) => {return upperCase.test(senha)}
const lowerCheck = (senha) => {return lowerCase.test(senha)}
const numberCheck = (senha) => {return number.test(senha)}
const specialCheck = (senha) => {return specialChar.test(senha)}
const sizeCheck = (senha) => {return senha.length >= 6}

//Verificações
if(upperCheck(senha) == false){caracNeed[0] = 0}
if(lowerCheck(senha) == false){caracNeed[1] = 0}
if(numberCheck(senha) == false){caracNeed[2] = 0}
if(specialCheck(senha) == false){caracNeed[3] = 0}

//Contador de requesitos para a Senha Forte
for (let i = 0; i < 4; i++) {
    if(caracNeed[i] == 0){
        requirementsMissing += 1
    }            
}

if(sizeCheck(senha)){
    alert(requirementsMissing)
}else{
    if(6 - senha.length >= requirementsMissing){
        alert(6-senha.length)
    }else{
        alert(requirementsMissing)
    }
}

