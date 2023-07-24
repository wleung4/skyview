import { getAirportICAO } from './airport.js';
import { calculateTime, getAircraft, getAirportArrivals, getAirportDepartures } from './flight.js';

const searchForm = document.getElementById("search-form");
const searchValue = document.getElementById("search");

let departures;
let arrivals;
let aircrafts;
searchForm.addEventListener("submit", async(e) => {
	e.preventDefault();
	const value = searchValue.value;
	const airportICAO = await getAirportICAO(value);
	console.log("Airport ICAO:", airportICAO);
	// 1 day = 86400, 1 hr = 3600
	departures = await getAirportDepartures(airportICAO, calculateTime() - 3600, calculateTime());
	console.log("Airport Departures from past hr to now: ", departures);
	
	arrivals = await getAirportArrivals(airportICAO, calculateTime() - 86400, calculateTime());
	console.log("Airport Arrivals from 1 days ago:", arrivals);

	// callsign = Plane identifier i.e. DAL767
	departures.forEach(departure => console.log(departure.callsign, departure.icao24));
	// get aircraft information for past day
	//departures.forEach(departure => {
		const info = getAircraft(departures[0].icao24, calculateTime() - 3600, calculateTime());
		console.log(`Information about ${departure[0].callsign}: `, info);
	//})
});