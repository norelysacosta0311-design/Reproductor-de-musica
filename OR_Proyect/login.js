 function guardarUsuario(e) {
  if (e) e.preventDefault(); 

  const nombreInput = document.getElementById('inputUsuario');
  const nombreIngresado = nombreInput.value.trim();

  if (nombreIngresado === "") {
    alert("Por favor, ingresa tu nombre antes de continuar.");
    return; 
  }

  localStorage.setItem('nombreUsuario', nombreIngresado);

  window.location.href = "reproductor.html"; 
}