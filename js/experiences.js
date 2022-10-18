const experiences = document.getElementsByClassName('all-experiences')
const screenResult = document.getElementById('informations')


const informations = experiences[0].addEventListener('click', evento => {
    const item = evento.target.innerText
    // console.log(item)

    if (item === 'Conhecimentos') {
        createPhrase("ESTOU TESTANDO A FUNÇÃO")
    }

    if (item === 'Habilidades') {
        createPhrase("ESTOU TESTANDO A DOIS");
        
    }
    if (item === 'Experiência profissional') {
        createPhrase("ESTOU TESTANDO TRES");
    }
    if (item === 'Currículo') {
        createPhrase("ESTOU TESTANDO A QUATRO");
    }
})

function createPhrase(message){
    screenResult.innerHTML = `
    <ul>
    <li>
    ${message}
    </li>
    </ul>
    `
}








