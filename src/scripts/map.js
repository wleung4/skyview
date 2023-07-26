import { beginHiddenCallStack } from "@babel/core/lib/errors/rewrite-stack-trace";

export const addMap = (location, icao) => {
	const height = 600;
	const width = 800;

	const svg = d3.select('#map')
		.append('svg')
		.attr('width', width)
		.attr('height', height)

	const g = svg.append('g');
	
	const handleZoom = (e) => {
		g.attr('transform', e.transform);
	}

	let zoom = d3.zoom()
		.scaleExtent([1, 40])
		.translateExtent([[0, 0], [width, height]])
		.on('zoom', handleZoom);
	
	svg.call(zoom);

	const projection = d3.geoMercator()
		.center([location[0], location[1]])
		.translate([width / 2, height / 2])
		.scale(120);

	zoom.scaleTo(svg, 30);
	
	const path = d3.geoPath()
		.projection(projection);

	// const addPath = (coordinates) => {
	// 	const lineGenerator = d3.line();
	// 	let pathData = lineGenerator(coordinates);
	// 	g.selectAll('path')
	// 		.data([coordinates])
	// 		.join('path')
	// 		.attr('d',pathData)
	// }
	
	d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
		.then(data => {
			const countries = topojson.feature(data, data.objects.countries);
			const coordinates = projection(location);
			g.selectAll('path')
				.data(countries.features)
				.enter()
				.append('path')
				.attr('d', path)
			
			g.selectAll('circle')
				.data(location)
				.enter()
				.append('circle')
				.attr('cx', coordinates[0])
				.attr('cy', coordinates[1])
				.attr('r', .25)
				.style('fill', '#000000');

			g.selectAll('text')
				.data(location)
				.enter()
				.append('text')
				.attr('x', coordinates[0] + .5)
				.attr('y', coordinates[1])
				.text(icao)
				.style('font-size', '1px');

			
		});	
}