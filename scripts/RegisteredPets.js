import { getPets } from "./database.js"
import { getWalkers } from "./database.js"


export const RegisteredPets = () => {
    
    const pets = getPets()
    const walkers = getWalkers()

    document.addEventListener("click",
    (event) => {
        if (event.target.id.startsWith("pet")) {
            const[, petId] = event.target.id.split("--")
            const clickedPetObj = pets.find( (pet) => pet.id === parseInt(petId))
            const foundWalker = walkers.find( (walker) => walker.id === clickedPetObj.walkerId)
            window.alert(`${clickedPetObj.name} is being walked by ${foundWalker.name}`)
        }
    })

    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

