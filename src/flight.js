let allFlights;
let arrivalFlights;
let departureFlights;
let aircraftFlights;

const url = "https://opensky-network.org/api/flights/";

// Get all flights between time frame < 2 hrs
const getAllFlights = async (begin, end, e)  => {
	//e.preventDefault();
	// beginning and ending in unix time, seconds since epoch
	try {
		const res = await fetch(url + `all?begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok){
			const data = await res.json();
			console.log('all flights');
			console.log(data);
			allFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching data', error);
	}
}

// Get flight information for aircraft departed and arrived within time frame < 30 days
const getAircraft = async(icao24, begin, end) => {
	try {
		const res = await fetch(url + `aircraft?icao24=${icao24}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			console.log('aircraft:');
			console.log(data);
			aircraftFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching aircraft', error);
	}
}

// Get all airport arrivals at specific airport, time frame < 1 week
const getAirportArrivals = async (airport, begin, end) => {
	try {
		const res = await fetch(url + `arrival?airport=${airport}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			console.log('arrivals:');
			console.log(data);
			arrivalFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching arrivals', error);
	}
}

// Get all airport departures at specific airport, time frame < 1 week
const getAirportDepartures = async (airport, begin, end) => {
	try {
		const res = await fetch(url + `departure?airport=${airport}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			console.log('departures:'); 
			console.log(data);
			departureFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching departures', error);
	}
}



// convert user input time
const calculateTime = (time = 0) => {
	return Math.floor(new Date(time) / 1000);
}
const airport = 'KSFO';
const begin = 1689964222;
const end = 1689965278;

const start = 1689445822;
const plane = 'a6f5b5'; 
//getAllFlights(begin, end);
// getAirportArrivals(airport, start, end);
// getAirportDepartures(airport, start, end);
// getAircraft(plane, start, end);

