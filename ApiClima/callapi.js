var la1
var lo1
var lat2
var lon2


function getWeather() {
	var la1 = document.getElementById("la").value;
	var lo1 = document.getElementById("lo").value;
	
	console.log(la1);
	console.log(lo1);
	
	lat2=parseFloat(la1);
	lon2=parseFloat(lo1);
	

  var request = new XMLHttpRequest();

  // Open a new connection, using GET request on the URL endpoint
  // Asincronas

  request.onload = function (resp) {
    console.log(resp.target.response);
    console.log(JSON.parse(resp.target.response));
  }

  //request.open('GET', 'https://api.ipify.org?format=json', true);
  
  request.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat="+lat2+"&lon="+lon2+"&appid=4b46d809fd3bb12c9038fd7e92e137cf", true);

  request.send();
  
}
