// SI CONSTRUYO UN COMPONENTE CREAR UNA CAJA DE TEXTO TIPO PASSWORD E INTEGRARLO A UN FORMULARIO
class FechaHoy extends HTMLElement {
  constructor() {
    super();  
    let shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
    <style>
      div {
        font-size: 20px;
        color: blue;
      }
    </style>
  <div>${this.fecha()}</div>`;

  }

  fecha() {
    var today = new Date();
    var dia = String(today.getDate());
    var mes = String(today.getMonth() + 1); //January is 0!
    var ano = today.getFullYear();

   return `${dia}/${mes}/${ano}`;
  }
}
customElements.define("fecha-hoy", FechaHoy);


function actualizarHora() {
  const horaActual = new Date();
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const hora = horaActual.toLocaleTimeString('es-ES', opcionesHora);
  document.getElementById('hora').textContent = hora;
}

// Actualiza la hora al cargar
actualizarHora();

// Actualiza cada segundo
setInterval(actualizarHora, 1000);

class titulosElprofebarrientos extends HTMLElement{
    constructor(){
       super();
    }
   // este metodo activa el uso del componente 
  connectedCallback(){    
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <style>
      div {      
    background-color: green;
    border-radius: 8px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 1800px; 
    font-size: 1.0em;
    color: #ffffff;
    margin: 0 0 20px;
    text-align: center;
    font-family: Arial;
    }
    </style>
    <div><b>Derechos reservados El profe barrientos</b></div>
    `
  }
}

// Define the new element
customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);


class buscarElprofebarrientos extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    // Create caja de texto
    const buscarcaja = document.createElement("input");
    buscarcaja.type = 'text';
    buscarcaja.name = 'buscar';
    buscarcaja.id = 'buscar';

    buscarcaja.placeholder = 'Burcar con ChatGPT';
    buscarcaja.setAttribute("class", "buscarcaja");
    const style = document.createElement("style");
    style.textContent = `
      .buscarcaja {       
        text-align: center;
        width: 1800px;           /* Ancho de la caja de texto */
        padding: 10px;         /* Espaciado interno */
        border: 2px solid #007bff; /* Color y grosor del borde */
        border-radius: 20px;   /* Esquinas redondeadas */
        outline: none;         /* Quitar el contorno al hacer clic */
        transition: border-color 0.3s; /* Transición suave para el color del borde */
      }
      .buscarcaja:focus {
        border-color: #CD5C5C;  /* Color del borde al enfocar */
      }`;
    // Attach the created elements to the shadow dom
    shadow.appendChild(style);   
    shadow.appendChild(buscarcaja);
    
  }
}
customElements.define("buscar-elprofebarrientos", buscarElprofebarrientos);



