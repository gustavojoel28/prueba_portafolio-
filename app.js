let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    input.value = "";
    console.log("Amigo agregado:", amigos); // Debugging
}

// Función para mostrar amigos en la lista
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.setAttribute("onclick", `actualizarAmigo(${index})`);
        li.appendChild(btnEditar);
        lista.appendChild(li);
    });
    console.log("Lista de amigos actualizada:", amigos); // Debugging
}

// Función para actualizar amigos
function actualizarAmigo(index) {
    let nuevoNombre = prompt("Ingresa el nuevo nombre:", amigos[index]);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        amigos[index] = nuevoNombre.trim();
        mostrarAmigos();
    }
}

// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un amigo para sortear.");
        return;
    }
    
    console.log("Lista de amigos antes del sorteo:", amigos); // Debugging
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let elegido = amigos[Math.floor(Math.random() * amigos.length)];
    console.log("Amigo sorteado:", elegido); // Debugging
    let li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${elegido}`;
    resultado.appendChild(li);
}
