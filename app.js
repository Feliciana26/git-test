
function validar(){
    let nombre, email, telefono, password, boton

    nombre = document.getElementById("nombre").value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    telefono = document.getElementById('telefono')
    boton = document.getElementById('boton')

    expresion=/\w+@\w+\.+[a-z]/;
    if(nombre === "" || email === "" || password=== "" || telefono === ""){
        alert("El campo nombre esta vacio")
        return false;
    }else if(nombre.lenght>30){
        alert("el nombre es muy largo")
        return false;
    }else if(email.lenght>100){
        alert("El correo es muy largo")
        return false;
    }else if(expresion.test(email)){
        alert("el correo no es valido")
    }else if(telefono.lenght>10){
        alert("El telefono debe ser maximo de 10 numeros")
        return false;
    }else if(isNaN(telefono)){
        alert("el telefono ingresado no es numero")    
    }else if(password.lenght>20){
        alert("La contrasena debe de tener como maximo 20 caracteres")
        return false;
    }
}