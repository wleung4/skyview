const airports = [];
let airportObj;
export const getAllAirports = async () => {
	// csv file row = "country_code","region_name","iata","icao","airport","latitude","longitude"
	const res = await fetch('https://wleung4.github.io/skyview/iata-icao.csv');
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
	airportObj = airports.reduce((obj, item) => Object.assign(obj, {[item.airport]:item}, {}));
}

export const getAirportInfo = async(airportName) => {
	await getAllAirports();
	for(const airport in airportObj) {
		if (airport.toLowerCase() === airportName.toLowerCase()) {
			return [airport, airportObj[airport].icao, airportObj[airport].latitude, airportObj[airport].longitude];
		}
	}
	return undefined;
}

export const search = async(input) => {
	await getAllAirports();
	const results = [];
	const keys = Object.keys(airportObj).slice(7);
	// console.log('airportObj', airportObj);
	keys.forEach(airport => {
		if(airport.toLowerCase().includes(input.toLowerCase())){
			results.push(airport);
		}
	})
	if(results.length === 0) results.push('No Results Found')
	return results;	
}

