const submitBtn = document.getElementById('submit');
const inputValue = document.getElementById('search');
const apiKey = '58ccf8033c6a3809bd3a8bd65bc7b147';
const degress = document.getElementById('degress');

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
submitBtn.addEventListener('click', () => {
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + apiKey).then(
    response => response.json()).then(data => {
        console.log(data);
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let fconvert = Math.floor(((tempValue - 273.15) * 9/5) + 32);
        let descValue = data['weather'][0]['description'];
        let answer;
        fconvert < 70 ? answer = "Better grab that 🧥!" : answer = "No need for a 🧥";
        degress.innerHTML = `Looks like it is gonna be ${fconvert} degress Farenheight! \n ${answer}`;

    }).catch(err => {
        alert("Wrong City Value, try agian");
        console.log(err);
})


});
