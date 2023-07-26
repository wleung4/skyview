let g;
let projection;

export const addMap = (location, icao) => {
	const height = 600;
	const width = 800;

	const svg = d3.select('#map')
		.append('svg')
		.attr('width', width)
		.attr('height', height)

	g = svg.append('g');
	
	const handleZoom = (e) => {
		g.attr('transform', e.transform);
	}

	let zoom = d3.zoom()
		.scaleExtent([1, 80])
		.translateExtent([[0, 0], [width, height]])
		.on('zoom', handleZoom);
	
	svg.call(zoom);

	projection = d3.geoMercator()
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

export const drawPath = async(path) => {
	const waypoints = await path;
	const coordinates = [];
	waypoints.forEach((waypoint) => {
		// [time, latitude, longitude, baro_altitude, true_track, on_ground]
		coordinates.push(projection([waypoint[2], waypoint[1]]));
	})
	
	// path using circles
	// g.selectAll('circle')
	// 	.data(coordinates)
	// 	.enter()
	// 	.append('circle')
	// 	.attr('cx', d => d[0])
	// 	.attr('cy', d => d[1])
	// 	.attr('r', .1)
	// 	.style('fill', '#ffffff');
	
	// path using line
	const lineGenerator = d3.line()
		.x(d => d[0])
		.y(d => d[1]);

	g.append('path')
		.data([coordinates])
		.attr('fill', 'none')
		.attr('stroke', 'add8e6')
		.attr('stroke-width', 0.1)
		.attr('d', lineGenerator)
}