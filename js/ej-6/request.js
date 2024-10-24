function http_get(url) {
    fetch(url)
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
    })
    .then(datos => {
        const first_ten = datos.slice(0, 10);
        const main = document.querySelector('main');
        const container = document.createElement('div');
        const lista = document.createElement('ul');
        lista.style.margin = "20px 20px"
        main.appendChild(container);
        container.appendChild(lista);
        first_ten.forEach((elemento) =>{
            let list_item = document.createElement('li')
            list_item.innerHTML = objetoatexto(elemento);
            lista.appendChild(list_item);
        });
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });
}

function objetoatexto(objeto) {
    let resultado = '';
    Object.entries(objeto).forEach(([clave, valor]) => {
        resultado += `<strong>${clave}</strong>: ${valor}<br>\n`;
    });
    return resultado.trim();
}

function cambiar_color() {
    document.querySelector('header').style.backgroundColor = "red";
    document.querySelector('footer').style.backgroundColor = "blue";
}

function saludar() {
    const parrafo = document.getElementById('saludo');
    parrafo.innerText = "¡Hola usuario, bienvenido a mi página web!";
}

document.getElementById('getDataBtn').addEventListener('click', () => http_get("https://jsonplaceholder.typicode.com/posts"));
window.addEventListener('load', () => {
    setTimeout(cambiar_color, 5000)
});