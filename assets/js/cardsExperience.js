// let button = document.getElementById('read-button')
// console.log(button)

// button.addEventListener('click', function () {
//     let card = document.querySelector('.experience-card')

//     card.classList.toggle('active')

//     if(card.classList.contains('active')){
//         return button.textContent = 'Ver menos'
//     }

//     button.textContent = 'Ver mais'
// })

let button = document.getElementsByClassName('section-experiences')
const itensButton = button[0].children
console.log(itensButton[1])
console.log(itensButton[2])
console.log(itensButton[3])
for(i = 1; i < itensButton.length; i++){
    
    console.log('oi')

}

itensButton[1].addEventListener('click', evento => {
    console.log(evento)
})

// const seeMoreOrLess = itensButton.addEventListener('click', evento => {

//     let card = document.querySelectorAll('#read-button')
//     card.classList
//     // console.log(evento.target)
//     // console.log(card)
//     for(i = 0; i < card.length; i++){
//         card.classList.toggle('active')
//     }

//     // console.log(card)
   

//     const result = evento.target.innerText

//     if (result === 'Ver mais') {
//         return evento.target.innerText = 'Ver menos'
//     }

//     evento.target.innerText = 'Ver mais'
// })


