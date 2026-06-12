function scrollCarousel(direction) {
      const track = document.getElementById('musicTrack');
      
      
      const cardWidth = track.querySelector('.tarjeta-cancion').offsetWidth;
      const gap = 24; 
      
     
      const scrollAmount = (cardWidth + gap) * 2; 

      
      track.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }


    document.addEventListener("DOMContentLoaded", () => {
  // Va a la memoria y saca lo que esté guardado en 'nombreUsuario' (que ahora es el usuario)
  const usuarioLogueado = localStorage.getItem('nombreUsuario');
  
  // Buscamos el elemento del título de bienvenida
  const elementoSaludo = document.getElementById('saludoBienvenida');

  // Si existe el usuario, cambiamos el texto
  if (usuarioLogueado) {
    // Puedes ponerlo normal o agregarle un '@' antes si quieres que luzca más como un user de app
    elementoSaludo.textContent = `Bienvenido, ${usuarioLogueado}`;
  } else {
    elementoSaludo.textContent = "Bienvenido, Invitado";
  }
});