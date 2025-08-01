// A toi de jouer pour cette partie :-) Happy coding !
const city = document.getElementById("city");
const details = document.getElementById("details");
const search = document.querySelector(".city-search");
const button = document.getElementById("button");
const temperature = document.getElementById("temperature")

async function getLocation(town) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${town}&format=json&addressdetails=1&limit=1`
  );
  const data = await response.json();

  if (data.length === 0) {
    city.innerHTML = "";
    details.innerHTML = "";
    return null;
  }

  const result = data[0];
  const latitude = result.lat
  const longitude = result.lon

  city.innerHTML = result.name
  details.innerHTML = `Latitude : ${result.lat} Longitude : ${result.lon}`

  return { latitude, longitude };
  }


async function fetchWeather(latitude,longitude){
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    const data = await response.json();

    if (data.current_weather){
        temperature.innerHTML = `Température : ${data.current_weather.temperature} °C`;
    } else {
    temperature.innerHTML = "Impossible d'obtenir la météo.";
    }
    }

button.addEventListener("click", async () => {
  const inputCity = document.getElementById("cityInput").value;

  if (!inputCity) {
    city.innerHTML = "Veuillez entrer une ville.";
    details.innerHTML = "";
    temperature.innerHTML = "";
    return;
  }

  const coordonate = await getLocation(inputCity);

  if (coordonate) {
    await fetchWeather(coordonate.latitude, coordonate.longitude);
  } else {
    temperature.innerHTML = "Ville non trouvée.";
    city.innerHTML = "";
    details.innerHTML = "";
  }
});

