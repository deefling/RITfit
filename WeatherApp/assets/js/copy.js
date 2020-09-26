
fetch("https://api.openweathermap.org/data/2.5/weather?zip=14623,us&appid=c7cb57ebe343f1d88e49cefc0a51c128&units=imperial")
    .then(weather => weather.json())
    .then(response => displayValues(response));
	
	
function displayValues(response){
	console.log(response);
	
	var tempDisp = document.getElementById('temp');
	tempDisp.innerHTML = "Temperature: " + response.main.temp + " F";
	
	var windDisp = document.getElementById('wind');
	windDisp.innerHTML = "Wind speed: " + response.wind.speed + " mph"
	
	var feelDisp = document.getElementById('feels');
	feelDisp.innerHTML = "Feels like: " + response.main.feels_like + " F";
	
	var humidDisp = document.getElementById('humid');
	humidDisp.innerHTML = "Humidity: " + response.main.humidity + " %";
	
	topSelect(response);
	bottomSelect(response);
	shoeSelect(response);
	accSelect(response);
	
}

function topSelect(response){
	
	var topPic = document.getElementById('top1')
	var topText = document.getElementById('top2');
	
	if(response.main.feels_like < 45){
		
		topText.innerHTML = "Coat";
	}
	else if(response.main.feels_like > 65){
		
		topText.innerHTML = "T-Shirt";
	}
	else{
		topText.innerHTML = "Sweatshirt";
	}
}


function bottomSelect(response){
	
	var botPic = document.getElementById('pants1')
	var botText = document.getElementById('pants2');
	
	if(response.main.feels_like < 40){
		
		botText.innerHTML = "Long Pants";
	}
	else if(response.main.feels_like > 65){
		
		botText.innerHTML = "Shorts";
	}
	else{
		botText.innerHTML = "Pants or Shorts";
	}
}

function shoeSelect(response){
	
	var shoePic = document.getElementById('shoe1');
	var shoeText = document.getElementById('shoe2');
	
	if(response["snow"]["3h"] > 0){
		
		shoeText.innerHTML = "Boots";
	}
	else if(response["rain"]["1h"] > 0){
		shoeText.innerHTML = "Waterproof Shoes";
	}
	else{
		
		shoeText.innerHTML = "Regular Shoes";
	}
}

function accSelect(response){
	var accPic = document.getElementById('acc1');
	var accText = document.getElementById('acc2');
	
	if (response["rain"]["1h"] > 0){
		accText.innerHTML = "Umbrella";
	}
	else if(response["clouds"]["all"] < 30 ){
		accText.innerHTML = "Sunglasses";
	}
	else{
		accText.innerHTML = "A Fun Hat";
	}
	
}
