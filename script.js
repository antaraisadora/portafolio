const retratos = ["foto (1).jpg", "foto (2).jpg", "foto (3).jpg", "foto (4).jpg", "foto (5).jpg", "foto (6).jpg", "foto (7).jpg", "foto (8).jpg"];

const conciertos = [
  {
    artista: "Alondra Noctvrna",
    fecha: "26 de abril 2025",
    carpeta: "Alondra Noctvrna - Encuentro Detonadas - 26 de abril 2025",
    cantidadFotos: 20
  },

  {
    artista: "Los Amigos de tu Hermano",
    fecha: "Palacio Rioja, Viña del Mar",
    carpeta: "LADTH - Placio Rioja en Viña del Mar",
    cantidadFotos: 7
  },
  {
    artista: "Manul",
    fecha: "03 de mayo 2025 · Marejada",
    carpeta: "Manul - Marejada - 03 de mayo 2025",
    cantidadFotos: 25
  },
  {
    artista: "Safo",
    fecha: "26 de julio 2025 · Marejada",
    carpeta: "Safo - Marejada - 26 de julio",
    cantidadFotos: 20
  },
  {
    artista: "Simonia",
    fecha: "03 de mayo 2025 · Marejada",
    carpeta: "Simonia - Marejada - 03 de mayo 2025",
    cantidadFotos: 18
  },
  {
    artista: "The Phantom Tapes",
    fecha: "03 de mayo 2025 · Marejada",
    carpeta: "THE PHANTOM TAPES - Marejada - 03 de mayo 2025",
    cantidadFotos: 11
  },
  {
    artista: "Vale Nein",
    fecha: "03 de mayo 2025 · Marejada",
    carpeta: "Vale Nein - Marejada - 03 de mayo 2025",
    cantidadFotos: 13
  }
];

const rodajes = [
  {
    artista: "Días de Verano - Flora Salas-Román",
    fecha: "Cortometraje · 2024", 
    carpeta: "Días de Verano - Flora Salas-Román - 2024",
    cantidadFotos: 11
  }
];

function generarNombresFotos(cantidad) {
  const nombres = [];
  for (let i = 1; i <= cantidad; i++) {
    nombres.push(`foto (${i}).jpg`);
  }
  return nombres;
}

function cargarGaleriaSimple(idSeccion, listaFotos) {
  const contenedor = document.querySelector(`#${idSeccion} .gallery`);
  if (!contenedor) return;
  listaFotos.forEach(nombre => {
    const img = document.createElement("img");
    img.src = `images/${idSeccion}/${nombre}`;
    img.alt = idSeccion;
    contenedor.appendChild(img);
  });
}

function cargarBloques(idSeccion, lista) {
  const contenedor = document.querySelector(`#${idSeccion} .lista-bloques`);
  if (!contenedor) return;

  lista.forEach(item => {
    const bloque = document.createElement("div");
    bloque.classList.add("concierto-bloque");

    const titulo = document.createElement("h3");
    titulo.textContent = item.artista;

    const fecha = document.createElement("p");
    fecha.classList.add("concierto-fecha");
    fecha.textContent = item.fecha;

    const galeria = document.createElement("div");
    galeria.classList.add("gallery");

    const fotos = generarNombresFotos(item.cantidadFotos);
    fotos.forEach(nombre => {
      const img = document.createElement("img");
      img.src = `images/${idSeccion}/${item.carpeta}/${nombre}`;
      img.alt = item.artista;
      galeria.appendChild(img);
    });

    bloque.appendChild(titulo);
    bloque.appendChild(fecha);
    bloque.appendChild(galeria);
    contenedor.appendChild(bloque);
  });
}

cargarGaleriaSimple("retratos", retratos);
cargarBloques("conciertos", conciertos);
cargarBloques("rodajes", rodajes);
function activarLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("activo");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("activo");
  });
}

activarLightbox();
function activarAnimacionesScroll() {
  document.querySelectorAll("section h2, .sobre-mi-contenido, .contacto-links, .gallery img, .concierto-bloque").forEach(el => {
    el.classList.add("reveal");
  });

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observador.observe(el));
}

activarAnimacionesScroll(); 