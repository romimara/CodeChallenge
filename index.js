const URL = 'https://jsonplaceholder.typicode.com/users'

let name = document.getElementById("name")
let lastName = document.getElementById("lastName")
let birthdate = document.getElementById("birthdate")
let submit = document.getElementById("submit")

async function postInformation(URL){
    const information = {
        name : name.value,
        lastName : lastName.value,
        birthdate :birthdate.value
    }


const metodo = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(information)
}; 

let response = await fetch (URL, metodo)
if (response.ok) {
    console.log ("Estado: ", response.status)
    console.log ("Nombre: ", await response.json())
} else {
    alert("Estado: ", response.status)
}
}

boton.addEventListener("click", (event)=>{
    event.preventDefault()
    postInformation(URL)
})