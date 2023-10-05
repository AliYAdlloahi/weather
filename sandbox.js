const key = "f042b47d6eda46f7bc294734230510";
const url = new URL("http://api.weatherapi.com/v1/current.json");
const cityName = document.querySelector("h5");
const input = document.querySelector("input");
url.searchParams.append("key", key);
url.searchParams.append("q", "tehran");
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    cityName.textContent = data.location.name;
  });
