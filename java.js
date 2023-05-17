const nombre = document.getElementById("name")
const apellido = document.getElementById("last-name")
const telefono = document.getElementById("phone")
const correo = document.getElementById("email")
const textarea = document.getElementById("textarea")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    console.log(nombre.value.length <4)
    if(nombre.value.length <3){
        warnings += `Debe ingresar un nombre <br>`
        entrar = true
    }
    if(apellido.value.length <3){
        warnings += `Debe ingresar un apellido <br>`
        entrar = true
    }
    if(telefono.value.length < 9){
        warnings += `Telefono invalido <br>`
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        warnings += `Correo invalido <br>`
        entrar = true
    }
    if(textarea.value.length <1){
        warnings += `Debe llenar el campo de texto <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})