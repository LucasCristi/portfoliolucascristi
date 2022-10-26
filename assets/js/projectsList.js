let projectList = [ //url of projects
    "https://secretnumber-gamevoice.vercel.app/",
    "https://lista-itens.vercel.app/",
    "https://robotron2000-seven.vercel.app/",
    "https://lucascristi.github.io/tabeladepontos/",
    "https://lucascristi.github.io/calculodamedia/",
    "https://lucascristi.github.io/conversordemoedas/",
    "https://lucascristi.github.io/barbeariaalura/",

]

let imagesProject = [
    "./photosProjects/app-voice.png",
    "./photosProjects/lista-app.png",
    "./photosProjects/robotron-app.png",
    "./photosProjects/scoreboard.png",
    "./photosProjects/average-calculation.png",
    "./photosProjects/currency-converter.png",
    "./photosProjects/barbearia-alura.png",

]

let namesList = [
    "Acerte o número secreto! Projeto feito com API de comando de voz, criado com a realização de curso através da Alura. HTML, CSS e JAVASCRIPT.",
    "Lista de itens utilizando localStorage, projeto feito com base em curso realizado. HTML, CSS e JAVASCRIPT.",
    "Robotron de combate para proteger a terra da invasão alienígena, trabalhando com a manipulação do DOM. HTML, CSS e JAVASCRIPT.",
    "Placar de pontos somando vitórias, derrotas e empates. Projeto feito na semana da Imersão Dev da Alura. HTML, CSS e JAVASCRIPT.",
    "Projeto para cálculo de média (3 notas) feito na semana da Imersão Dev da Alura, onde utilizei conhecimentos próprios para os desafios. HTML, CSS e JAVASCRIPT.",
    "Conversor de moeda feito na semana da Imersão Dev da Alura. HTML, CSS e JAVASCRIPT. ",
    "Site desenvolvido com HTML e CSS, conta com responsividade. Realizado com base em cursos da Alura.",

]



for (let indice = 0; indice < projectList.length; indice++) {
    for (let indice = 0; indice < imagesProject.length; indice++) {
        for (let indice = 0; indice < namesList.length; indice++) {
            document.write("<div class='div-project'><a href=" + projectList[indice] + ">")
            document.write(" <img src=" + imagesProject[indice] + "></a>")
            document.write(" <p>" + namesList[indice] + "</p></div>")
        }
        break;
    }
    break;
} 
