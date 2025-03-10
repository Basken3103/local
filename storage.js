//DOM elementer
let form = document.getElementById("pet-form")
let view = document.getElementById("view")

//Deklaration uden datatype eller vrdi af en variabel der senere
//bliver et array med alle dyr


let animals

//Er der noget i Local Storage
//Hvis der er så koverter det til et array (JSON.parse)
//Og asign data til animals
//Hvis der ikke er noget i local storage så lav animals til
//et tomt array
if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"))
} else {
    animals = []
}

//DER ER TO EVENTS SOM VI GERNE VIL HÅNDTERE
//SUBMIT AF FORM OG PAGE LOAD
form.addEventListener("submit", function (event) {
    //Lad vær at sende formen
    event.preventDefault()
    //Tilføj form input value til arrayet
    animals.push(form.elements.pet.value)
    //Opdater local storage (JSON.stringify gør det til en tekststreng)
    localStorage.setItem("animals", JSON.stringify(animals))
    //Kald updateView funktionen
    updateView()
})
//Vi kalder også updateView når siden loader
document.addEventListener("DOMContentLoaded", updateView)



//Deklaration af updateView funktionen
function updateView() {
    //Hvis der er dyr i local storage
    if (localStorage.getItem("animals")) {

        //Så ryd elementet med id = view
        view.innerHTML = ""

        //loop igennem alle animals
        //Element peger på hver enkelt dyr
        animals.forEach(function (element, index) {
            //tilføj til DOM 
            view.innerHTML += "<p>"
            view.innerHTML += element
            view.innerHTML += "<button onclick='deleteAnimal(" + index + ")'>Slet dyr</button>"
            view.innerHTML += "</p>"
            view.innerHTML += "</p>"
        })
    }
}

function deleteAnimal(number) {
    animals.splice(number, 1)
    localStorage.setItem("animals", JSON.stringify(animals))
    updateView()
}

























