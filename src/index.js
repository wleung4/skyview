import { getAirportICAO } from './airport.js';

const searchForm = document.getElementById("search-form");
const searchValue = document.getElementById("search");

searchForm.addEventListener("submit", async(e) => {
	e.preventDefault();
	const value = searchValue.value;
	const icao = await getAirportICAO(value);
	console.log(icao);
});