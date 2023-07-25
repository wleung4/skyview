export const addMap = () => {
	const height = 600;
	const width = 800;

	const svg = d3.select('#map')
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	const projection = d3.geoMercator()
		.translate([width / 2, height / 1.35])
		.scale(140);
	
	const path = d3.geoPath()
		.projection(projection);

	d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
		.then(data => {
			const countries = topojson.feature(data, data.objects.countries);

			svg.selectAll('path')
				.data(countries.features)
				.enter()
				.append('path')
				.attr('d', path)
		});
}