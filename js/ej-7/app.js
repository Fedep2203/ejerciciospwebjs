//Constantes
const emailREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nombresExistentes = ["ana", "pepe", "pancho"];
const url = 'https://jsonplaceholder.typicode.com/posts';


//Elementos del DOM
const form = document.getElementById('formulario');
const nombre = form.elements['name'];
const email = form.elements['email'];
const password = form.elements['password'];
const cpassword = form.elements['confirm-password'];


//Funciones
function validate_email(value) {
    return emailREGEX.test(value);
}

function validate_password(value) {
    return value.length >= 8;
}

function validate_cpassword(value) {
    return value === password.value;
}

function validate_name(value) {
    return value.length >= 3 && !nombresExistentes.includes(value.toLowerCase());
}


const validate = (e, callback, mensaje) => {
    const field = e.target
    const fieldValue = e.target.value;
    if (callback(fieldValue)) {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
    else {
        field.classList.add('invalid');
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerText = mensaje;
    }
};

function PostData(url, datos) {
    const div = document.getElementById('envio');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(datos)
    })
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error en la solicitud");
            }
            return respuesta.json();
        })
        .then(json => {
            div.style.color = "green";
            div.innerText = "Los datos fueron enviados correctamente.";
            console.log(json);
        })
        .catch(error => {
            div.style.color = "red";
            div.innerText = "Error al enviar los datos. Intenta nuevamente.";
            console.log('Error: ' + error);
        });
}


//Eventos
nombre.addEventListener('blur', (e) => { validate(e, validate_name, "El nombre ingresado debe contener al menos 3 letras y no puede ser un nombre preexistente (Ana, Pepe o Pancho)") });
email.addEventListener('blur', (e) => { validate(e, validate_email, "El correo ingresado no es valido.") })
password.addEventListener('blur', (e) => { validate(e, validate_password, "La contraseña debe tener al menos 8 caracteres.") })
cpassword.addEventListener('blur', (e) => { validate(e, validate_cpassword, "Las contraseñas no coinciden.") })
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate_name(nombre.value) && validate_email(email.value) && validate_password(password.value) && validate_cpassword(cpassword.value)) {

        PostData(url, {
            name: nombre.value,
            email: email.value,
            password: password.value,
            cpassword: cpassword.value
        })
    }
    else {
        alert("Error al verificar la informacion. Revisa los datos ingresados.")
    }
})






