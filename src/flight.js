let flights;
const url = "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800";

const getFlights = async e => {
	//e.preventDefault();
	try {
		const res = await fetch(url, {headers: {'Accept': 'application/json'}});
		if(res.ok){
			const data = await res.json();
			console.log(data);
			flights = data;
			return data;
		} else {
			throw new Error("response not ok");
		}
	} catch(error) {
		console.error('Error fetching data', error);
	}
}

getFlights();
