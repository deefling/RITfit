
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
	bkgSelect(response);
	
}

function topSelect(response){
	
	var topPic = document.getElementById('top1')
	var topText = document.getElementById('top2');
	
	if(response.main.feels_like < 45){
		topPic.src = "assets/media/icons/coat.png";
		topText.innerHTML = "Coat";
	}
	else if(response.main.feels_like > 65){
		topPic.src = "assets/media/icons/t-shirt.png";
		topText.innerHTML = "T-Shirt";
	}
	else{
		topPic.src = "assets/media/icons/sweatshirt.png";
		topText.innerHTML = "Sweatshirt";
	}
}


function bottomSelect(response){
	
	var botPic = document.getElementById('pants1')
	var botText = document.getElementById('pants2');
	
	if(response.main.feels_like < 40){
		botPic.src = "assets/media/icons/pants.png";
		botText.innerHTML = "Long Pants";
	}
	else if(response.main.feels_like > 65){
		botPic.src = "assets/media/icons/shorts.png";		
		botText.innerHTML = "Shorts";
	}
	else{
		botPic.src = "assets/media/icons/pants.png";
		botText.innerHTML = "Pants or Shorts";
	}
}

function shoeSelect(response){
	
	var shoePic = document.getElementById('shoe1');
	var shoeText = document.getElementById('shoe2');
	
	if(response["snow"] !== undefined || response.main.feels_like < 35){
		shoePic.src = "assets/media/icons/boots.png";
		shoeText.innerHTML = "Boots";
	}
	else if(response["rain"] !== undefined){
		shoePic.src = "assets/media/icons/boots.png";
		shoeText.innerHTML = "Waterproof Shoes";
	}
	else if(response.main.feels_like > 80){
		shoePic.src = "assets/media/icons/flipflop.png";
		shoeText.innerHTML = "Flip Flops";
	}
	else{
		shoePic.src = "assets/media/icons/shoe.png";
		shoeText.innerHTML = "Regular Shoes";
	}
}

function accSelect(response){
	var accPic = document.getElementById('acc1');
	var accText = document.getElementById('acc2');
	
	if (response.rain !== undefined){
		accPic.src = "assets/media/icons/umbrella.png";
		accText.innerHTML = "Umbrella";
	}
	else if(response["clouds"]["all"] < 30 ){
		accPic.src = "assets/media/icons/sunglasses.png";
		accText.innerHTML = "Sunglasses";
	}
	else{
		accPic.src = "assets/media/icons/buckethat.png";
		accText.innerHTML = "A Fun Hat";
	}
	
}

function bkgSelect(response){
	
	if(response.rain !== undefined){
		document.body.style.backgroundImage = "url(assets/media/bkg/rainy.png)";
	}
	else if(response.main.feels_like > 70){
		document.body.style.backgroundImage = "url(assets/media/bkg/sunny.png)";
	}
	else if(response.main.feels_like > 50){
		document.body.style.backgroundImage = "url(assets/media/bkg/cloudy.png)";
	}
	else if(response.main.feels_like > 30){
		document.body.style.backgroundImage = "url(assets/media/bkg/cloudycold.png)";
	}
	else{
		document.body.style.backgroundImage = "url(assets/media/bkg/snowy.png)";
	}
	

}


