let projectList = [ //url of projects
    "https://secretnumber-gamevoice.vercel.app/",
    "https://lista-itens.vercel.app/",
    "https://robotron2000-seven.vercel.app/"
]

let imagesProject = [
    "./photosProjects/app-voice.png",
    "./photosProjects/lista-app.png",
    "./photosProjects/robotron-app.png",

]

let namesList = [
    "Acerte o número secreto! Projeto feito com API de comando de voz.",
    "Lista de itens utilizando localStorage.",
    "Robotron de combate para proteger a terra da invasão alienígena, trabalhando com a manipulação do DOM."
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
