const button = document.querySelector("button")
const pessoaDiv = document.querySelector(".pessoa")

button.addEventListener("click", receberMensagemDoBackend)

async function receberMensagemDoBackend(){
    const response = await fetch("http://localhost:3333").then(response => response.json())

    response.map((persons) =>{
    pessoaDiv.innerHTML += `
    <div>
    <h2>Nome: ${persons.name}</h2>
    <h3>Idade: ${persons.age}</h3>
    <h3>CPF: ${persons.cpf}</h3>
    <hr>
    </div>
      `
})
 console.log(response)
}