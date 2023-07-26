export const getAirportInfo = async (airportName) => {
	const airports = [];
	// "country_code","region_name","iata","icao","airport","latitude","longitude"
	const res = await fetch('../iata-icao.csv');
	const data = await res.text();
	const rows = data.split('\n').slice(1);

	rows.forEach((ele)=>{
		const row = ele.split(",");
		const country_code = row[0].slice(1, row[0].length - 1);
		const region_name = row[1].slice(1, row[1].length - 1);
		const iata = row[2].slice(1, row[2].length - 1);
		const icao = row[3].slice(1, row[3].length - 1);
		const airport = row[4].slice(1, row[4].length - 1);
		const latitude = row[5].slice(1, row[5].length - 1);
		const longitude = row[6].slice(1, row[6].length - 2);
		airports.push({airport: airport,country_code: country_code, region_name: region_name, iata: iata, 
			icao: icao, latitude: latitude, longitude: longitude});
	})

	// transform array of objects into single object where keys is the airport name
	const airportObj = airports.reduce((obj, item) => Object.assign(obj, {[item.airport]:item}, {}));
	//console.log(airportObj); // search for airport using airport name key, can key into

	if (airportObj[airportName]) {
		return [airportObj[airportName].icao, airportObj[airportName].latitude, airportObj[airportName].longitude];
	} else {
		return undefined;
	}
}




