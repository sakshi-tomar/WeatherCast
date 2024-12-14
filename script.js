const apiKey = "70daea9fe2fd1c2d96250d03de5038e3";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchButton =document.querySelector(".search button");
const error =document.querySelector(".error");

async function Weather(city){
const data = await fetch(apiUrl + city + `&appid=${apiKey}`);
if(data.status ===404){
    error.style.display="block"
    ;document.querySelector(".weather").style.display = "none";
} else
error.style.display="none";
var json = await data.json();
console.log(json);

document.querySelector(".city").innerHTML = json.name;
document.querySelector(".temp").innerHTML = Math.round(json.main.temp) +"°C";
document.querySelector(".humidity").innerHTML = json.main.humidity +"%";
document.querySelector(".wind").innerHTML = json.wind.speed +" km/h";
document.querySelector(".weather-icon").setAttribute("src","images/"+json.weather[0].main+".png");
document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click",()=>{
    Weather(searchBox.value);
})