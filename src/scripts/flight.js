let allFlights;
let arrivalFlights;
let departureFlights;
let aircraftFlights;
let flightLocations;

const url = "https://opensky-network.org/api/flights/";

// track gives back last reported location of an airplane
export const getFlightLocation = async(icao24, time = 0) => {
	try {
		const res = await fetch(`https://opensky-network.org/api/tracks/all?icao24=${icao24}&time=${time}` , {headers: {
			'Accept': 'application/json'
		}})
		if(res.ok) {
			const data = await res.json();
			const lastLocation = data.path[data.path.length - 1];
			console.log("Last reported Latitude:" , lastLocation[1]);
			console.log("Last reported Longitude:" , lastLocation[2]);
			console.log(data.path);
			return data.path;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching data', error);
	}
}
// Get all flights between time frame < 2 hrs
export const getAllFlights = async (begin, end)  => {
	// beginning and ending in unix time, seconds since epoch
	try {
		const res = await fetch(url + `all?begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok){
			const data = await res.json();
			allFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching data', error);
	}
}

// Get flight information for aircraft departed and arrived within time frame < 30 days, 
export const getAircraft = async(icao24, begin, end) => {
	try {
		const res = await fetch(url + `aircraft?icao24=${icao24}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json',
		}});
		if(res.ok) {
			const data = await res.json();
			aircraftFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching aircraft', error);
	}
}

// Get all airport arrivals at specific airport, time frame < 1 week, arrival data from previous day or earlier
export const getAirportArrivals = async (airport, begin, end) => {
	try {
		const res = await fetch(url + `arrival?airport=${airport}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json',
		}});
		if(res.ok) {
			const data = await res.json();
			arrivalFlights = data;
			return data;
		} else {
			throw new Error('response not ok');
		}
	} catch(error) {
		console.error('Error fetching arrivals', error);
	}
}

// Get all flight depatures at specific airport, time frame < 1 week, ALWAYS UP TO DATE
export const getAirportDepartures = async (airport, begin, end) => {
	try {
		const res = await fetch(url + `departure?airport=${airport}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json',
		}});
		if(res.ok) {
			const data = await res.json();
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
export const calculateTime = () => {
	return Math.floor(new Date() / 1000);
}



