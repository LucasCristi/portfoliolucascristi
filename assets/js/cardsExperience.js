let button = document.getElementById('read-button')
// console.log(button)


button.addEventListener('click', function () {
    let card = document.querySelector('.experience-card')

    card.classList.toggle('active')

    if(card.classList.contains('active')){
        return button.textContent = 'Ver menos'
    }

    button.textContent = 'Ver mais'
})


let button2 = document.getElementById('read-button2')
// console.log(button)


button2.addEventListener('click', function () {
    let card = document.querySelector('.experience-card2')

    card.classList.toggle('active')

    if(card.classList.contains('active')){
        return button2.textContent = 'Ver menos'
    }

    button2.textContent = 'Ver mais'
})


let button3 = document.getElementById('read-button3')
// console.log(button)


button3.addEventListener('click', function () {
    let card = document.querySelector('.experience-card3')

    card.classList.toggle('active')

    if(card.classList.contains('active')){
        return button3.textContent = 'Ver menos'
    }

    button3.textContent = 'Ver mais'
})
















// let button = document.getElementsByClassName('section-experiences')
// const itensButton = button[0].children
// const card = document.querySelectorAll('.experience-card')
// const itensCard = card.length


// for (i = 1; i < itensButton.length; i++) {
// itensButton[i].addEventListener('click', evento => {
//         const clickButton = evento.target
//         for (i = 0; i < card.length; i++) {
//         // console.log(clickButton)

//             card[i].classList.toggle('active')
//             if (card[i].classList.contains('active')) {
//                 return clickButton.textContent = 'Ver menos'
//             }
//             clickButton.textContent = 'Ver mais'
//         }
//     })
// }






