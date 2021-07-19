const submitBtn = document.getElementById("submit");
const inputValue = document.getElementById("search");
const apiKey = "58ccf8033c6a3809bd3a8bd65bc7b147";
const degrees = document.getElementById("degrees");

submitBtn.addEventListener("click", async () => {
  const data = await getWeatherData(inputValue, apiKey);
  let tempValue = data["main"]["temp"];
  let fconvert = Math.floor(((tempValue - 273.15) * 9) / 5 + 32);
  let answer;
  fconvert < 65
    ? (answer = "Better grab that 🧥!")
    : (answer = "No need for a 🧥");
  degrees.innerHTML = `Looks like it is gonna be ${fconvert} degrees Farenheight in ${inputValue.value}! \n ${answer}`;
});

async function getWeatherData(inputValue, apiKey) {
  const response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value} 
    &appid=${apiKey}
`);
  const data = await response.json();
  if (data.cod == 404) {
    alert("Error, Try another city");
  }
  return data;
}
