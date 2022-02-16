let word = prompt("Qual a palavra?");
let repeatedWords = new Array();
let letterIndex = [];
let cont = 0;

function filterArray(unfilteredArray){
    var repeated = {};
    var filteredArray = unfilteredArray.filter(function(item){
        return repeated.hasOwnProperty(item)? false : (repeated[item]=true);
    });
    return filteredArray;
}

for (let i = 0; i < word.length; i++) {
    for (let j = i+1; j < word.length; j++) {
        if(word[i] == word[j]){
            repeatedWords[cont] = [ word[i], word[j] ];
            letterIndex[cont] = [i, j];
            cont++;
        }
    }
}

for (let i = 0; i < letterIndex.length; i++) {
    let auxArray = ['', '']
    if(letterIndex[i][1] - letterIndex[i][0] != 1){
        for (let j = letterIndex[i][0]; j < letterIndex[i][1]; j++) {
            auxArray[0] += word[j] 
        }
        for (let j = letterIndex[i][0]+1; j < letterIndex[i][1]+1; j++) {
            auxArray[1] += word[j] 
        }
        repeatedWords.push(auxArray)
    }
}

let filteredArray = filterArray(repeatedWords)
console.log(filteredArray);

document.write("<h1>" + filteredArray.length + "</h1>")
