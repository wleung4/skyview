import { getAirportICAO } from './scripts/airport.js';
import { calculateTime, getAircraft, getAirportArrivals, getAirportDepartures, getAllFlights } from './scripts/flight.js';
import { addMap } from './scripts/map.js';

const searchForm = document.querySelector(".home-search");
const searchValue = document.getElementById("search");
const flightTable = document.getElementById("flight-table");
const mainPage = document.querySelector(".main-page");
const background = document.querySelector("#background");

let departures;
let arrivals;
searchForm.addEventListener("submit", async(e) => {
	e.preventDefault();
	const value = searchValue.value;
	searchForm.style.display = 'none';
	mainPage.style.display = "flex";
	background.style.display = "none";

	// airport ICAO
	const airportICAO = await getAirportICAO(value);
	
	// 1 day = 86400, 1 hr = 3600
	departures = await getAirportDepartures(airportICAO, calculateTime() - 3600, calculateTime());
	console.log("Airport Departures from past hr to now: ", departures);
	
	//console.log("Departures: ");
	// callsign = Plane identifier i.e. DAL767
	//departures.forEach(departure => console.log(`Plane number: ${departure.callsign}`, `ICAO: ${departure.icao24}`));

	//console.log(departures);
	addFlightTable(departures);
	addMap();
	// get arrival aircraft info for past day
	//arrivals = await getAirportArrivals(airportICAO, calculateTime() - 86400*2, calculateTime());
	// console.log("Airport Arrivals from 2 days ago:", arrivals);

	// console.log("Arrivals: ");
	// arrivals.forEach(arrival => console.log(`Plane number: ${arrival.callsign}`, `ICAO: ${arrival.icao24}`));

	// console.log("Arrivals Aircraft info for past 2 days:")
	// for(let i = 0; i < arrivals.length; i++){
	// 	const info = await getAircraft(arrivals[i].icao24, calculateTime() - 86400*2, calculateTime());
	// }
});

const addFlightTable = async(info) => {
	let table = document.createElement("table");
	let tableBody = document.createElement("tbody");

	//top column name row
	const colRow = document.createElement("tr");
	colRow.classList.add("header");
	const callsignCol = document.createElement("td");
	callsignCol.textContent = "Plane";
	const departureTimeCol = document.createElement("td");
	departureTimeCol.textContent = "Time Departed";
	const departureAirportCol = document.createElement("td");
	departureAirportCol.textContent = "From";
	const arrivalAirportCol = document.createElement("td");
	arrivalAirportCol.textContent = "To";

	colRow.appendChild(callsignCol);
	colRow.appendChild(departureTimeCol);
	colRow.appendChild(departureAirportCol);
	colRow.appendChild(arrivalAirportCol);
	tableBody.appendChild(colRow);

	// actual data
	for(let i = 0; i < info.length; i++){
		const row = document.createElement("tr");

		const callsign = document.createElement("td");
		callsign.textContent = info[i].callsign;

		const departureTime = document.createElement("td");
		const date = new Date(info[i].firstSeen * 1000).toString();
		departureTime.textContent = date.slice(0, 28);

		const departureAirport = document.createElement("td");
		departureAirport.textContent = info[i].estDepartureAirport;

		let arrivalAirport = document.createElement("td");
		if(info[i].estArrivalAirport === null){
			arrivalAirport.textContent = "TBD";
		} else {
			arrivalAirport.textContent = info[i].estArrivalAirport;
		}

		row.appendChild(callsign);
		row.appendChild(departureTime);
		row.appendChild(departureAirport);
		row.appendChild(arrivalAirport);

		tableBody.appendChild(row);
	}
	table.appendChild(tableBody);
	flightTable.appendChild(table);
	flightTable.classList.add("table-style");
}

