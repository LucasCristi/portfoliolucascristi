let projectList = [ //url of projects
    "https://www.youtube.com/watch?v=-9wzO6oim0U",
    "https://www.youtube.com/watch?v=hRoIcc6qlyM"
]

let imagesProject = [
    "https://img.icons8.com/office/344/animated.png",
    "https://img.icons8.com/ios/344/camera--v3.png"
]

let namesList = [
    "teste",
    "teste2"
]



for (let indice = 0; indice < projectList.length; indice++) {
    for (let indice = 0; indice < imagesProject.length; indice++) {
        for (let indice = 0; indice < namesList.length; indice++) {
            document.write("<a href=" + projectList[indice] + ">")
            document.write(" <img src=" + imagesProject[indice] + "></a>")
            document.write(" <p>" + namesList[indice] + "</p>")
        }
        break;
    }
    break;
} 
