function meuEscopo(){
    const elemento = [
        {tag: "p", texte: "Frase 1"},
        {tag: "div", texte: "Frase 2"},
        {tag: "footer", texte: "Frase 3"},
        {tag: "section", texte: "Frase 4"}
    ]
    
    
    const container = document.querySelector(".container")
    console.log("teste")
    const div = document.createElement("div")

    for(i=0;i<4;i++){
        const {tag: tag, texte: texto} = elemento[i]
        let tagCriada = document.createElement(tag)
        tagCriada.innerHTML = texto
        div.appendChild(tagCriada)


        

    }
    container.appendChild(div)
}
meuEscopo();

