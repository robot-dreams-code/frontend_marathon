const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9a3a7569cmsh5efe6d4beb50505p19bb3ejsn6dbe5402dbe9',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=London', options)
	.then(response => response.json())
	.then(response => {
    console.log(response);
    let location = response.location;
    let weather = response.current;

    document.getElementById('city').innerText = `${location.name}, ${location.country}`;
    document.getElementById('time').innerText = location.localtime.split(' ')[1];
    document.getElementById('temp').innerText = weather.temp_c;
    document.getElementById('condition').innerText = weather.condition.text;

    document.getElementById('wind').innerText = weather.wind_kph;
    document.getElementById('humidity').innerText = weather.humidity;
    document.getElementById('cloud').innerText = weather.cloud;
  })
	.catch(err => console.error(err));