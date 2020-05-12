const baseURL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

/** fetch(baseURL)
  .then(function (response) {
    response.json().then(function (data) {
      const dadosApi = data;
      return dadosApi;
    });
  })
  .catch(function (err) {
    console.error("Failed retrieving information", err);
  }); **/

//Buscar API
async function buscarApi(val1) {
  const data = await fetch(val1);
  return data.json();
}

// Chamando API Inicial
buscarApi(baseURL).then(showApartamentos);

function showApartamentos(data) {
  const total_result = data.length;
  //document.getElementById("totalJs").innerHTML = total_result;

  const cardsdestaque = document.getElementById("cardsdestaque");
  //const total_result = Object.keys(dadosApi).length;
  console.log(total_result);
  console.log(data);
  for (i = 0; i <= total_result; i++) {
    cardsdestaque.innerHTML += `<div class="carddestaque">
    <div class="imgdestaque">
      <img src=${data[i].photo} alt="Experiência Online" />
    </div>
    <div class="titulodestaque">
      <p>${data[i].name}</p>
    </div>
    <div class="categoria">
    <p>${data[i].property_type}</p>
  </div>
    <div class="textodestaque">
      <p>
        <span>${data[i].price}</span>
      </p>
    </div>
  </div>`;
  }
}

showApartamentos();
