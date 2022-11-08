// // let button = document.getElementById('read-button')

// // button.addEventListener('click', function () {
// //     let card = document.querySelector('.experience-card')

// //     card.classList.toggle('active')

// //     if(card.classList.contains('active')){
// //         return button.textContent = 'Ver menos'
// //     }

// //     button.textContent = 'Ver mais'
// // })


// let button = document.querySelectorAll('.read-button')

// button.forEach((buttons, index, array) => {
    
//     let indic = 0
//     buttons
//     indic++

//     button[index].addEventListener('click', event => {

//         let card = document.querySelectorAll('.experience-card')

//         card.forEach((cards, index, array) => {
//             let i = 0
//             index
//             i++
//             card[index].addEventListener('click', e => {
//                 console.log(card[index])
//                 const eventButton = e.target

//                 if (card[index].contains(button[index]) && eventButton.tagName === 'BUTTON') {
                  
                    
//                     let toggleCard = card[index].classList.toggle('active')

//                     if (toggleCard) {
//                         if (eventButton.tagName === 'BUTTON') {
//                             return eventButton.textContent = 'Ver menos'
//                         }
//                     }
//                     if (eventButton.tagName === 'BUTTON') {
//                         eventButton.textContent = 'Ver mais'
//                     }
//                 } 

//             })
//         })
//     }
//     )
// })






