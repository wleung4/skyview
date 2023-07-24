let allFlights;
let arrivalFlights;
let departureFlights;
let aircraftFlights;

const url = "https://opensky-network.org/api/flights/";

// Get all flights between time frame < 2 hrs
export const getAllFlights = async (begin, end)  => {
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
export const getAircraft = async(icao24, begin, end) => {
	try {
		const res = await fetch(url + `aircraft?icao24=${icao24}&begin=${begin}&end=${end}`, {headers: {
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			//console.log('aircraft:');
			//console.log(data);
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
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			//console.log('arrivals:');
			//console.log(data);
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
			'Accept': 'application/json'
		}});
		if(res.ok) {
			const data = await res.json();
			//console.log('departures:'); 
			//console.log(data);
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


// const airport = 'KSFO';
// const begin = 1690090801;
// const end = 1690177414;

// const start = 1689445822;
// const plane = 'a6f5b5'; 

// getAllFlights(begin, end);
// getAirportArrivals(airport, start, end);
// getAirportDepartures(airport, begin, end);
// getAircraft(plane, start, end);

