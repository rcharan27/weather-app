var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = documentquerySelector('cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik ="63a90ae96d390ec37d6c1252f5a86ela"
function convertion(val)
{
    return(val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
     fetch('https://api.openweather.org/data/2.5/weather?q='+inputvalue)
    .then(res =>res.json))

     .then(data =>
          {
            var nameval = data['name']
            var descrip = data['weather']['0']['descriptiion']
            var tempature = data['main']['temp']
            var wndpeed = data['wind']['speed']
            

            city.innerHTML='Weather of <span>${nameval}<span>'
            temp.innerHTML='Temparature :  <span>${convertion(tempature)}C</s
            descriptiion.innerHTML='Sky Conditions: <span>${descrip}<span>'
            wind.innerHTML = 'Wind speed: <span>${windspeed} km/h<span>'

          })

          .catch(err => alert('Tou entered Wrong city name'))
 
          
        })