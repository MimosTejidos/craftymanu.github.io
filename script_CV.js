window.onload = init;

function init () {
    const user_url = 'https://randomuser.me/api/?exc=login,registered,id';
    fetchData (user_url);
    crearTitulo ();



  
//  document.getElementById('enviar').addEventListener('click', localStorage);
}





 /*function localStorage () {
  console.log('Inicio de la función localStorage');
  
    if (localStorage.nombre) {
      console.log('Nombre guardado: ' + localStorage.nombre);
    } else {
      const nombre = document.getElementById("nombre").value;
      localStorage.nombre = nombre;
      console.log('Nombre: ' + localStorage.nombre);
    }
  
  
    if (localStorage.apellido) {
      console.log('Apellido guardado: ' + localStorage.apellido);
    } else {
      const apellido = document.getElementById("apellido").value
      localStorage.apellido = apellido;
      console.log('Apellido: ' + localStorage.apellido);
    }
  
  
  if (localStorage.email) {
    console.log('email guardado: ' + localStorage.email);
  } else {
    localStorage.email = document.getElementById("email").value;
    console.log('email: ' + localStorage.email);
  }
  if (localStorage.web) {
    console.log('url guardada: ' + localStorage.url);
  } else {
    localStorage.url = document.getElementById("url").value;
    console.log('url : ' + localStorage.url);
  }
  if (localStorage.ciudad) {
    console.log('ciudad guardado: ' + localStorage.ciudad);
  } else {
    localStorage.ciudad = document.getElementById("ciudad").value;
    console.log('ciudad: ' + localStorage.ciudad);
  }
  if (localStorage.provincia) {
    console.log('Provincia guardada: ' + localStorage.provincia);
  } else {
    localStorage.provincia = document.getElementById("provincia").value;
    console.log('Provincia: ' + localStorage.provincia);
  }
  if (localStorage.codigo) {
    console.log('CP guardado: ' + localStorage.codigo);
  } else {
    localStorage.codigo = document.getElementById("codigoPostal").value;
    console.log('CP: ' + localStorage.codigo);
  }
  if (localStorage.motivoConsulta) {
    console.log('motivo consulta guardado: ' + localStorage.motivoConsulta);
  } else {
    localStorage.motivoConsulta = document.getElementById("motivo").value;
    console.log('motivo consulta: ' + localStorage.motivoConsulta);
  }
  
} 
*/


 
function fetchData (url) { //traer los datos del CV de la persona de la API (de la url definida como constante en la función init) y mostrarlos en el HTML.
  console.log('start fetch');
  fetch(url).then(response => {
    console.log('response: ');
    console.log(response);
    if (!response.ok) //si el estatus del pedido no es "ok: true", entonces dar un mensaje de error.
      throw Error('ERROR')
    return data = response.json();
  }).then(data => {
      console.log('data: ');
      console.log(data);
      const nombre = data.results.map(user => {
        return data.results[0].name.first + " " + data.results[0].name.last;
      })
      document.querySelector('#obj-name').innerHTML = nombre;

      const foto = data.results.map(user => {
        return data.results[0].picture.large;
      })
      document.querySelector('#divFoto').innerHTML = '<img alt="foto de perfil" id="p-img" src="' + foto  + '" >'

      const email = data.results.map(user => {
        return data.results[0].email;
      })
      document.querySelector('#p-email').innerHTML = '<p> <span> e-mail: </span> <br>' + email + '</p>';

      const telefono = data.results.map(user => {
        return data.results[0].phone;
      })
      document.querySelector('#p-phone').innerHTML = '<p> <span> Telefono: </span> <br>' + telefono + '</p>';

      const calle_nro = data.results.map(user => {
        return data.results[0].location.street.number
      })

      const calle_nombre =  data.results.map(user => {
        return data.results[0].location.street.name
      })
      const ciudad =  data.results.map(user => {
        return data.results[0].location.city
      })
      const pais =  data.results.map(user => {
        return data.results[0].location.country
      })
      const codigo_postal =  data.results.map(user => {
        return data.results[0].location.postcode
      })

      document.querySelector('#p-adress').innerHTML = '<p> <span> Dirección: </span> <br>' + calle_nombre + " " + calle_nro + ", " + ciudad + ", " + pais + ". CP:" + codigo_postal + '</p>';
  }).catch(error => {
    console.log(error);
  })
  } 


  function crearTitulo () {
    // arrays para randomizar el título universitario del CV de la persona:
    const preTitulo = ["Ing.", "Lic.", "Técnico"]
    const titulo = ["en Informática", "Agronomo", "en Sistemas", "Industrial", "en Desarrollo", "en Biotecnología", "Electrónico"]
    // mostrar el título en el CV:
    var preIndex = Math.round(Math.random()*(preTitulo.length -1));
    var pre = preTitulo[preIndex];
    console.log('Pre titulo: ' + pre);
    var tituloIndex = Math.round(Math.random()*(titulo.length -1));
    var Titulo = titulo[tituloIndex];
    console.log('Titulo: ' + Titulo);
    document.querySelector('#titulo').innerHTML = pre + " " + Titulo;
  }


 

  

  // -------

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log("Latitud: " + position.coords.latitude)
    console.log("Longitud: " + position.coords.longitude);

  x.innerHTML = "Latitud: " + position.coords.latitude + 
  "<br>Longitud: " + position.coords.longitude;
}

