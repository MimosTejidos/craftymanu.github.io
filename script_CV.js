window.onload = init;

function init () {
  //variables:
  const user_url = 'https://randomuser.me/api/?exc=login,registered,id';

  fetchData (user_url);

}

 
function fetchData (url) {
  console.log('start fetch');
  fetch(url).then(response => {
    console.log('response: ');
    console.log(response);
    if (!response.ok) //si el estatus del pedido no es "ok: true", entonces dar un mensaje de error
      throw Error('ERROR')
    return data = response.json();
  }).then(data => {
      console.log('data: ');
      console.log(data);
      // console.log("data.results[0].name.first: ");
      // console.log(data.results[0].name.first);
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

  //--------------



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

