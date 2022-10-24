// let button = document.getElementById('read-button')

// button.addEventListener('click', function () {
//     let card = document.querySelector('.experience-card')

//     card.classList.toggle('active')

//     if(card.classList.contains('active')){
//         return button.textContent = 'Ver menos'
//     }

//     button.textContent = 'Ver mais'
// })


let button = document.querySelectorAll('.read-button')


for (i = 0; i <= button.length; i++) {
    button[i].addEventListener('click', event => {


        let card = document.querySelectorAll('.experience-card')
        console.log(card)
        card.forEach(array => {
            console.log(card)
            let i = 0
            array
            i++
            const toggleCard = array.classList.toggle('active')
            console.log(array)
            const eventButton = event.target

            if (toggleCard) {
                return eventButton.textContent = 'Ver menos'   
            }
             return eventButton.textContent = 'Ver mais'
        }
        )
    }  
    )
}






