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


const canciones = [
  { titulo: "Vampire",       artista: "Olivia Rodrigo", src: "musicas/vampire.mp3",       portada: "imagenes/vampire.jpg" },
  { titulo: "Drivers License", artista: "Olivia Rodrigo", src: "musicas/drivers license.mp3", portada: "imagenes/driverlicense.jpg" },
  { titulo: "Deja vu",       artista: "Olivia Rodrigo", src: "musicas/deja vu.mp3",         portada: "imagenes/dejavujpg.jpg" },
  {titulo: "Begged",        artista: "Olivia Rodrigo", src: "musicas/begged.mp3",    portada: "imagenes/begged.jpg"},
  {titulo: "Bad idea, right?", artista: "Olivia Rodrigo", src: "musicas/bad idea right.mp3", portada: "imagenes/badidea.jpg"},
  {titulo: "Brutal",      artista: "Olivia Rodrigo",  src: "musicas/brutal.mp3",  portada: "imagenes/brutal.jpg"},
  {titulo: "Good 4 u",  artista: "Olivia Rodrigo", src: "musicas/good 4 u.mp3",  portada: "imagenes/good4ujpg.jpg"},
  {titulo: "Traitor",   artista: "Olivia Rodrigo",  src: "musicas/traitor.mp3",    portada: "imagenes/traitor.jpg"},
  {titulo: "So american", artista: "Olivia Rodrigo", src: "musicas/so american.mp3", portada: "imagenes/soamerican.jpg"},
  {titulo: "Favorite crime", artista: "Olivia Rodrigo", src: "musicas/favorite crime.mp3", portada: "imagenes/favoritecrime.jpg"},
  {titulo: "Happier",      artista: "Olivia Rodrigo",  src: "musicas/happier.mp3",     portada: "imagenes/happier.jpg"},
  {titulo: "1 step forward, 3 steps back", artista: "Olivia Rodrigo",  src: "musicas/1 step forward, 3 steps back.mp3", portada: "imagenes/1step3back.jpg"},
  {titulo: "Enough for you", artista: "Olivia Rodrigo", src: "musicas/enough for you.mp3",  portada: "imagenes/enoughforu.jpg"},
  {titulo: "Scared of my guittar", artista: "Olivia Rodrigo", src: "musicas/scared of my guitar.mp3", portada: "imagenes/scaredofmyguittar.jpg"},
  {titulo: "Stranger",    artista: "Olivia Rodrigo", src: "musicas/stranger.mp3",       portada: "imagenes/stranger.jpg"},
  {titulo: "Lacy",        artista: "Olivia Rodrigo", src: "musicas/lacy.mp3",        portada: "imagenes/lacy.jpg"},
  {titulo: "Jealousy, Jealousy", artista: "Olivia Rodrigo", src: "musicas/jealousy  jealousy .mp3", portada: "imagenes/jealousy.jpg"},
  {titulo: "Hope ur ok",  artista: "Olivia Rodrigo",  src: "musicas/hope ur ok.mp3",      portada: "imagenes/hopeurok.jpg"},
  {titulo: "Ballad of a homeschooled girl", artista: "Olivia Rodrigo", src: "musicas/ballad of a homeschooled girl.mp3", portada: "imagenes/balladofhomeschooledgirl.jpg"},
  {titulo: "Logical",     artista:"Olivia Rodrigo", src: "musicas/logical.mp3",   portada: "imagenes/logical.jpg"},
  {titulo: "Love is embarrassing", artista:"Olivia Rodrigo", src: "musicas/love is embarrassing.mp3", portada: "imagenes/loveisembarasing.jpg"},
  {titulo: "Obsessed",    artista: "Olivia Rodrigo",  src: "musicas/obsessed.mp3",  portada: "imagenes/obsessedjpg.jpg"},
  {titulo: "Girl i've always been", artista: "Olivia Rodrigo", src: "musicas/girl ive always been.mp3", portada: "imagenes/girlivealwaysbeen.jpg"},
  {titulo: "All american bitch", artista: "Olivia Rodrigo", src: "musicas/all american bitch.mp3", portada: "imagenes/allamericanbitch.jpg"},
  {titulo: "Making the bed", artista: "Olivia Rodrigo", src: "musicas/making the bed.mp3", portada: "imagenes/makingthebed.jpg"},
  {titulo: "Get him back!",  artista: "Olivia Rodrigo",  src: "musicas/get him back.mp3", portada: "imagenes/gethimback.jpg"},
  {titulo: "The grudge",   artista: "Olivia Rodrigo",  src: "musicas/the grudge.mp3",  portada: "imagenes/thegrudge.jpg"},
  {titulo: "Teenage dream", artista: "Olivia Rodrigo", src: "musicas/teenage dream.mp3", portada: "imagenes/teenagedream.jpg"},
  {titulo: "Pretty isn't pretty", artista: "Olivia Rodrigo", src: "musicas/pretty isnt pretty.mp3", portada: "imagenes/prettyisntpretty.jpg"},
  {titulo: "Drop dead",    artista: "Olivia Rodrigo",   src: "musicas/drop dead.mp3",   portada: "imagenes/dropdead.jpg"},
  {titulo: "Stupid Song",  artista: "Olivia Rodrigo",   src: "musicas/stupid song.mp3",  portada: "imagenes/stupidsong.jpg"},
  {titulo: "Honeybee",     artista: "Olivia Rodrigo",   src: "musicas/honeybee.mp3",     portada: "imagenes/honeybee.jpg"},
  {titulo: "Maggots for brains", artista: "Olivia Rodrigo", src: "musicas/maggots for brains.mp3", portada: "imagenes/maggotsforbrains.jpg"},
  {titulo: "U + me = ♡", artista: "Olivia Rodrigo",    src: "musicas/u+me=.mp3",   portada: "imagenes/u+me=.jpg"},
  {titulo: "My way",      artista: "Olivia Rodrigo",    src: "musicas/my way.mp3",  portada: "imagenes/myway.jpg"},
  {titulo: "Purple",      artista: "Olivia Rodrigo",    src: "musicas/purple.mp3",  portada: "imagenes/purple.jpg"},
  {titulo: "The cure",    artista: "Olivia Rodrigo",    src: "musicas/the cure.mp3",  portada: "imagenes/thecure.jpg"},
  {titulo: "What's wrong with me", artista: "olivia Rodrigo", src: "musicas/whats wrong with me.mp3", portada: "imagenes/whatswrongwithme.jpg"},
  {titulo: "Less",       artista: "Olivia Rodrigo",    src: "musicas/less.mp3",      portada: "imagenes/less.jpg"},
  {titulo: "Expectations",  artista: "Olivia Rodrigo", src: "musicas/expectations.mp3",   portada: "imagenes/expectations.jpg"},
  {titulo: "Cigarette smoke", artista: "Olivia Rodrigo", src: "musicas/cigarette smoke", portada: "imagenes/cigarettesmoke.jpg"}
];


let indiceActual = 0;
let reproduciendo = false;
let modoAleatorio = false;
let listaActual = canciones.map((_, i) => i);

const audio          = document.getElementById('audio');
const btnPlay        = document.getElementById('play');
const btnAnterior    = document.getElementById('anterior');
const btnSiguiente   = document.getElementById('siguiente');
const progreso       = document.getElementById('progress');
const barraProgreso  = document.getElementById('progressBar');
const tiempoActual   = document.getElementById('tiempoActual');
const tiempoDuracion = document.getElementById('tiempoDuracion');
const tituloEl       = document.getElementById('titulo');
const artistaEl      = document.getElementById('artista');
const portadaEl      = document.getElementById('portadaActual');



function togglePlay() {
  if (reproduciendo) {
    audio.pause();
    btnPlay.setAttribute('name', 'play-circle'); 
  } else {
    audio.play();
    btnPlay.setAttribute('name', 'pause-circle'); 
  }
  reproduciendo = !reproduciendo;
}


function siguiente() {
  if (modoAleatorio && listaActual.length > 0) {
    const indiceRandom = listaActual[Math.floor(Math.random() * listaActual.length)];
    indiceActual = indiceRandom;
  } else {
    const posActual = listaActual.indexOf(indiceActual);
    if (posActual === -1 || listaActual.length === 0) {
      indiceActual = (indiceActual + 1) % canciones.length;
    } else {
      indiceActual = listaActual[(posActual + 1) % listaActual.length];
    }
  }
  cargarCancion(indiceActual);
  audio.play();
  reproduciendo = true;
  btnPlay.setAttribute('name', 'pause-circle');
}

function anterior() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  if (modoAleatorio && listaActual.length > 0) {
    const indiceRandom = listaActual[Math.floor(Math.random() * listaActual.length)];
    indiceActual = indiceRandom;
  } else {
    const posActual = listaActual.indexOf(indiceActual);
    if (posActual === -1 || listaActual.length === 0) {
      indiceActual = (indiceActual - 1 + canciones.length) % canciones.length;
    } else {
      indiceActual = listaActual[(posActual - 1 + listaActual.length) % listaActual.length];
    }
  }
  cargarCancion(indiceActual);
  audio.play();
  reproduciendo = true;
  btnPlay.setAttribute('name', 'pause-circle');
}


audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;

  const porcentaje = (audio.currentTime / audio.duration) * 100;
  progreso.style.width = porcentaje + '%';

  tiempoActual.textContent  = formatearTiempo(audio.currentTime);
  tiempoDuracion.textContent = formatearTiempo(audio.duration);
});

function formatearTiempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = Math.floor(segundos % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}


barraProgreso.addEventListener('click', (e) => {
  const rect = barraProgreso.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const porcentaje = clickX / rect.width;
  audio.currentTime = porcentaje * audio.duration;
});


audio.addEventListener('ended', siguiente);

function seleccionarCancion(indice) {
  indiceActual = indice;
  cargarCancion(indiceActual);
  audio.play();
  reproduciendo = true;
  btnPlay.setAttribute('name', 'pause-circle');
}

btnPlay.addEventListener('click', togglePlay);
btnSiguiente.addEventListener('click', () => siguiente());
btnAnterior.addEventListener('click', anterior);



function actualizarCola() {
    const listaCola = document.getElementById('listaCola');
    listaCola.innerHTML = ''; 

    for (let i = 1; i <= 4; i++) {
        const siguiente = (indiceActual + i) % canciones.length;
        const cancion = canciones[siguiente];

        const item = document.createElement('div');
        item.className = 'item-cola';
        item.onclick = () => seleccionarCancion(siguiente);

        item.innerHTML = `
            <img src="${cancion.portada}" alt="${cancion.titulo}">
            <div class="item-cola-info">
                <span class="item-cola-titulo">${cancion.titulo}</span>
                <span class="item-cola-artista">${cancion.artista}</span>
            </div>
        `;

        listaCola.appendChild(item);
    }
}

function cargarCancion(indice) {
  const cancion = canciones[indice];
  audio.src        = cancion.src;
  tituloEl.textContent  = cancion.titulo;
  artistaEl.textContent = cancion.artista;
  portadaEl.src         = cancion.portada;
  progreso.style.width  = '0%';
  tiempoActual.textContent  = '0:00';
  tiempoDuracion.textContent = '0:00';
  actualizarCola(); 
}



function cargarDuraciones() {
  const items = document.querySelectorAll('.item-cancion-animado');
  
  items.forEach((item) => {
    const indice = parseInt(item.getAttribute('data-index'));
    if (isNaN(indice)) return;

    const cancion = canciones[indice];
    const audioTemp = new Audio(cancion.src);

    audioTemp.addEventListener('loadedmetadata', () => {
      const duracionEl = item.querySelector('.duracion-item');
      if (duracionEl) {
        duracionEl.textContent = formatearTiempo(audioTemp.duration);
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const usuario = localStorage.getItem('nombreUsuario');
  document.getElementById('saludoBienvenida').textContent =
    usuario ? `Te damos la bienvenida, ${usuario}` : 'Bienvenido, Invitado';

  cargarCancion(indiceActual);
  cargarDuraciones(); 
});



let htmlListaOriginal = null;
let tituloOriginal = null;

const albumes = {
  'sour': [1, 2, 5, 6, 7, 9, 10, 11, 12, 16, 17],
  'guts': [0, 4, 15, 18, 19, 20, 23, 24, 25, 26, 27, 28],
  'guts-deluxe': [0, 4, 8, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
  'pretty-sad': [3, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
};

const nombresAlbumes = {
  'sour': 'SOUR',
  'guts': 'GUTS',
  'guts-deluxe': 'GUTS (deluxe)',
  'pretty-sad': 'You Seem Pretty Sad for a Girl So in Love'
};

function mostrarTodasLasCanciones() {
  const seccion = document.querySelector('.seccion-lista-dinamica');
  const tituloEl = seccion.querySelector('.titulo-seccion');
  const contenedor = seccion.querySelector('.contenedor-lista-animada');
  const flechaExistente = seccion.querySelector('.btn-volver-album');

  tituloEl.textContent = tituloOriginal;
  contenedor.innerHTML = htmlListaOriginal;

  if (flechaExistente) flechaExistente.remove();

  
  listaActual = canciones.map((_, i) => i);
  modoAleatorio = false;
}

function mostrarAlbum(albumId) {
  const listaIndices = albumes[albumId];
  const nombre = nombresAlbumes[albumId];
  const seccion = document.querySelector('.seccion-lista-dinamica');
  const tituloEl = seccion.querySelector('.titulo-seccion');
  const contenedor = seccion.querySelector('.contenedor-lista-animada');

  if (!htmlListaOriginal) {
    htmlListaOriginal = contenedor.innerHTML;
    tituloOriginal = tituloEl.textContent;
  }

  tituloEl.textContent = nombre;

  let flecha = seccion.querySelector('.btn-volver-album');
  if (!flecha) {
    flecha = document.createElement('button');
    flecha.className = 'btn-volver-album';
    flecha.title = 'Volver a todas las canciones';
    flecha.onclick = mostrarTodasLasCanciones;
    flecha.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    `;
    
    tituloEl.parentNode.insertBefore(flecha, tituloEl);
  }

  contenedor.innerHTML = '';
  listaIndices.forEach(indice => {
    const cancion = canciones[indice];
    const item = document.createElement('div');
    item.className = 'item-cancion-animado';
    item.setAttribute('data-index', indice);
    item.onclick = () => seleccionarCancion(indice);
    item.innerHTML = `
      <img src="${cancion.portada}" class="imagen-item" alt="${cancion.titulo}">
      <div class="letras-item">
        <span class="titulo-item">${cancion.titulo}</span>
        <span class="artista-item">${cancion.artista}</span>
      </div>
      <span class="duracion-item">0:00</span>
    `;
    contenedor.appendChild(item);
  });

  cargarDuraciones();
  seccion.scrollIntoView({ behavior: 'smooth' });

  
  listaActual = [...listaIndices];
  modoAleatorio = false;
}


const inputBusqueda = document.getElementById('inputBusqueda');
const dropdown = document.getElementById('dropdownBusqueda');

inputBusqueda.addEventListener('input', () => {
  const texto = inputBusqueda.value.trim().toLowerCase();
  dropdown.innerHTML = '';

  if (texto === '') {
    dropdown.classList.remove('activo');
    return;
  }

  const resultados = canciones.filter(c =>
    c.titulo.toLowerCase().includes(texto) ||
    c.artista.toLowerCase().includes(texto)
  );

  if (resultados.length === 0) {
    dropdown.innerHTML = `<p class="dropdown-sin-resultados">No se encontraron canciones para "${inputBusqueda.value}"</p>`;
    dropdown.classList.add('activo');
    return;
  }

  resultados.forEach(cancion => {
    const indice = canciones.indexOf(cancion);
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.innerHTML = `
      <img src="${cancion.portada}" alt="${cancion.titulo}">
      <div class="dropdown-item-info">
        <span class="dropdown-titulo">${cancion.titulo}</span>
        <span class="dropdown-artista">${cancion.artista}</span>
      </div>
    `;
    item.addEventListener('click', () => {
      seleccionarCancion(indice);
      inputBusqueda.value = '';
      dropdown.classList.remove('activo');
      dropdown.innerHTML = '';
    });
    dropdown.appendChild(item);
  });

  dropdown.classList.add('activo');
});


document.addEventListener('click', (e) => {
  if (!e.target.closest('.centro')) {
    dropdown.classList.remove('activo');
    dropdown.innerHTML = '';
    inputBusqueda.value = '';
  }
});

function reproducirAleatorio() {
  modoAleatorio = true;
  const indiceRandom = listaActual[Math.floor(Math.random() * listaActual.length)];
  seleccionarCancion(indiceRandom);
}