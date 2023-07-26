import { async } from 'regenerator-runtime';
import { getAirportInfo, search } from './scripts/airport.js';
import { calculateTime, getAirportDepartures, getFlightLocation } from './scripts/flight.js';
import { addMap, drawPath } from './scripts/map.js';

const searchForm = document.querySelector(".home-search");
const searchValue = document.getElementById("search");
const flightTable = document.getElementById("flight-table");
const mainPage = document.querySelector(".main-page");
const background = document.querySelector("#background");

let departures;
let arrivals;
let locations;
let timer = null;
searchValue.addEventListener("keyup", async(e) => {
	clearTimeout(timer);
	timer = setTimeout(async()=>{
		const matches = await search(searchValue.value);
		console.log('searched');
		console.log(matches);
	}, 750);
}) 

searchForm.addEventListener("submit", async(e) => {
	e.preventDefault();

	const value = searchValue.value;
	// airport ICAO
	if(value === "") value = "N/A";
	let airportInfo = await getAirportInfo(value);
	while (!airportInfo) {
		airportInfo = await getAirportInfo(value);
	}
	const airportICAO = airportInfo[0];
	const airportLatitude = airportInfo[1];
	const airportLongitude = airportInfo[2];
	searchForm.style.display = 'none';
	mainPage.style.display = "flex";
	background.style.display = "none";

	// 1 day = 86400, 1 hr = 3600
	departures = await getAirportDepartures(airportICAO, calculateTime(4), calculateTime());
	//console.log("Airport Departures from past 4 hrs to now: ", departures);
	
	// callsign = Plane identifier i.e. DAL767
	addFlightTable(departures);
	addMap([airportLongitude, airportLatitude], airportICAO);
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
		callsign.classList.add("clickable");

		// allows clickable planes => gets location info about clicked plane
		callsign.addEventListener("click", async(e) => {
			e.stopPropagation();
			locations = getFlightLocation(info[i].icao24);
			drawPath(locations, callsign.textContent);
		})

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

