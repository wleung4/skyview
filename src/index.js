import { getAirportInfo, search } from './scripts/airport.js';
import { calculateTime, getAirportDepartures, getFlightLocation } from './scripts/flight.js';
import { addMap, drawPath, resetPaths } from './scripts/map.js';

const searchForm = document.querySelector(".home-search");
const searchValue = document.querySelector("#search");
const searchResults = document.querySelector("#search-results");
const flightTable = document.querySelector("#flight-table");
const mainPage = document.querySelector(".main-page");
const background = document.querySelector("#background");
const instructions = document.querySelector(".instructions");
const reset = document.querySelector(".reset");
const map = document.querySelector("#map");
const resetMapPaths = document.querySelector(".reset-paths");

let departures;
let locations;
let airportName;
let timer = null;
let resultClicked = false;

searchValue.addEventListener("keyup", () => {
	clearTimeout(timer);

	if (!resultClicked) {
		timer = setTimeout(async () => {
			if (searchValue.value !== "") {
				const matches = await search(searchValue.value);
				instructions.style.display = "none";
				addResults(matches);
			} else {
				searchResults.style.display = "none";
				instructions.style.display = "block";
			}
		}, 500);
	}
	resultClicked = false;
})

reset.addEventListener("click", (e) => {
	e.preventDefault();
	mainPage.style.display = "none";
	map.style.display = "none";
	searchForm.style.display = "flex";
	background.style.display = "inline";
	searchValue.value = "";
	searchResults.style.display = "none";
	instructions.style.display = "block";
	reset.style.display = "none";
	resetMapPaths.style.display = "none";
	flightTable.removeChild(flightTable.firstChild);
	d3.select("#map").select("svg").remove();
})

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	let value = searchValue.value;
	// airport ICAO
	if (value === "") value = "N/A";
	let airportInfo = await getAirportInfo(value);
	while (!airportInfo) {
		airportInfo = await getAirportInfo(value);
	}
	airportName = airportInfo[0];
	const airportICAO = airportInfo[1];
	const airportLatitude = airportInfo[2];
	const airportLongitude = airportInfo[3];
	searchForm.style.display = 'none';
	mainPage.style.display = "flex";
	background.style.display = "none";
	reset.style.display = "block";
	map.style.display = "block";
	resetMapPaths.style.display = "block";

	// 1 day = 86400, 1 hr = 3600
	departures = await getAirportDepartures(airportICAO, calculateTime(6), calculateTime());

	// callsign = Plane identifier i.e. DAL767
	addFlightTable(departures);
	addMap([airportLongitude, airportLatitude], airportICAO);
});

const addFlightTable = async (info) => {
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
	for (let i = 0; i < info.length; i++) {
		const row = document.createElement("tr");

		const callsign = document.createElement("td");
		callsign.textContent = info[i].callsign;
		callsign.classList.add("clickable");

		// allows clickable planes => gets location info about clicked plane
		callsign.addEventListener("click", async (e) => {
			e.stopPropagation();
			locations = getFlightLocation(info[i].icao24);
			if (locations !== 'No data found') drawPath(locations, callsign.textContent);
		})

		const departureTime = document.createElement("td");
		const date = new Date(info[i].firstSeen * 1000).toString();
		console.log(date);
		departureTime.textContent = date;

		const departureAirport = document.createElement("td");
		departureAirport.textContent = info[i].estDepartureAirport;

		let arrivalAirport = document.createElement("td");
		if (info[i].estArrivalAirport === null) {
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

const addResults = (matches) => {
	while (searchResults.firstChild) {
		searchResults.removeChild(searchResults.firstChild);
	}
	matches.forEach(match => {
		const result = document.createElement("div");
		result.textContent = match;
		result.addEventListener("click", (e) => {
			e.stopPropagation();
			searchValue.value = result.textContent;
			searchResults.style.display = "none";
			resultClicked = true;
			instructions.style.display = "block";
		});
		searchResults.appendChild(result);
	});

	if (!resultClicked) {
		searchResults.style.display = "block";
	}
}

resetMapPaths.addEventListener("click", resetPaths);