let tamEscada = prompt("Qual tamanho da escada?") // Aqui definimos o tamanho da escada

for (let i = 0; i < tamEscada; i++) {
    for (let j = 0; j < tamEscada; j++) {
        if(j > (tamEscada-2-i)){
            document.write("*")
        }else{
            document.write("&nbsp&nbsp")
        }
    }   
    document.write("<br/>"); 
}
