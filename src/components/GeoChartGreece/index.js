import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './index.css'
import csv_data from '../../resources/datasets/birth_rates_greece.csv'
import greece_geojson from '../../resources/datasets/greece-regions.geojson'


export function GeoChartGreece() {
    const [data, setData] = useState([]);
    const [geoData, setGeoData] = useState(null);
    const svgRef = useRef();

    useEffect(() => {
        // Fetch and parse CSV data
        d3.csv(csv_data).then(csvData => {
            csvData.forEach(d => {
                d['Birth Rate'] = +d['Birth Rate'];
            });
            setData(csvData);
        });

        // Fetch and parse GeoJSON data
        d3.json(greece_geojson).then(setGeoData);
    }, []);

    useEffect(() => {
        if (geoData && data.length) {
            console.log('GeoData:', geoData);
            console.log('CSV Data:', data);
            
            const width = 800;
            const height = 600;
            const legendHeight = 50; // Additional height for the legend

            const svg = d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height + legendHeight);

            const projection = d3.geoMercator().fitSize([width, height], geoData);
            const path = d3.geoPath().projection(projection);

            // Create a color scale
            const colorScale = d3.scaleSequential(d3.interpolateBlues)
                .domain(d3.extent(data, d => d['Birth Rate'])); // Adjust the domain based on your data range

            // Draw the map
            const regions = svg.selectAll('path')
                .data(geoData.features)
                .join('path')
                .attr('d', path)
                .attr('fill', d => {
                    const region = data.find(row => row.Region === d.properties.name);
                    return region ? colorScale(region['Birth Rate']) : '#ccc';
                })
                .attr('stroke', '#000')
                .attr('stroke-width', 1);

            // Add tooltip
            const tooltip = d3.select('body').append('div')
                .attr('class', 'tooltip')
                .style('position', 'absolute')
                .style('visibility', 'hidden')
                .style('background', '#fff')
                .style('padding', '5px')
                .style('border', '1px solid #ccc')
                .style('border-radius', '5px');

            regions
                .on('mouseover', (event, d) => {
                    const region = data.find(row => row.Region === d.properties.name);
                    const birthRate = region ? region['Birth Rate'] : 'N/A';
                    console.log('Region:', d.properties.name, 'Birth Rate:', birthRate); // Debug log
          
                    // Highlight the region
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 3)
                        .attr('fill', d => {
                            const region = data.find(row => row.Region === d.properties.name);
                            return region ? d3.rgb(colorScale(region['Birth Rate'])).darker(1) : '#ccc';
                        });
          
                    tooltip.html(`${d.properties.name}: ${birthRate}`)
                      .style('visibility', 'visible'); 
                })
                .on('mousemove', event => {
                    tooltip.style('top', `${event.pageY + 5}px`)
                        .style('left', `${event.pageX + 5}px`);
                })
                .on('mouseout', (event) => {
                    // Remove the highlight
                    const region = data.find(row => row.Region === event.currentTarget.__data__.properties.name);
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 1)
                        .attr('fill', d => {
                            return region ? colorScale(region['Birth Rate']) : '#ccc';
                        });

                    tooltip.style('visibility', 'hidden');
                });
            // Add color legend
            const legendWidth = 300;

            const legendSvg = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${(width - legendWidth) / 2},${height + 20})`); // position legend below map

            const gradient = legendSvg.append('defs')
                .append('linearGradient')
                .attr('id', 'gradient')
                .attr('x1', '0%')
                .attr('x2', '100%')
                .attr('y1', '0%')
                .attr('y2', '0%');

            gradient.append('stop')
                .attr('offset', '0%')
                .attr('stop-color', colorScale.range()[0]);

            gradient.append('stop')
                .attr('offset', '100%')
                .attr('stop-color', colorScale.range()[1]);

            legendSvg.append('rect')
                .attr('width', legendWidth)
                .attr('height', 10) // fixed legend height
                .style('fill', 'url(#gradient)');

            const xScale = d3.scaleLinear()
                .domain(colorScale.domain())
                .range([0, legendWidth]);

            const xAxis = d3.axisBottom(xScale)
                .ticks(5);

            legendSvg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', `translate(0,10)`)
                .call(xAxis);
        }
    }, [geoData, data]);

    return (
        <div className='pb-5'>
            <h2>Birth Rates in Greece by Region</h2>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default GeoChartGreece;