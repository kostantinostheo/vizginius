import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Chart } from 'react-google-charts';
import './index.css'
import { CSSTransition } from 'react-transition-group';
import csv_data from '../../resources/datasets/birth_rates_greece.csv'
import greece_geojson from '../../resources/datasets/greece-regions.geojson'


export function GeoChartGreece() {
    const [data, setData] = useState([]);
    const [geoData, setGeoData] = useState(null);
    const [year, setYear] = useState(2022);
    const [selectedRegion, setSelectedRegion] = useState('Attica');
    const [regionData, setRegionData] = useState([]);
    const svgRef = useRef();

    const options = {
        title: `${selectedRegion} Birth Rate Over Time (1999-2022)`,
        hAxis: { 
            title: 'Year' ,
            ticks: [
                {v: "2000", f: "2000"},
                {v: "2005", f: "2005"},
                {v: "2010", f: "2010"},
                {v: "2015", f: "2015"},
                {v: "2020", f: "2020"}
            ],
            textStyle: {
              color: '#FFFFFF', // X-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // X-axis title text color
            },
            gridlines: {
                color: '#111827', // Make horizontal grid lines transparent
            },
        },
        vAxis: { 
            title: 'Birth Rate',
            textStyle: {
              color: '#FFFFFF', // Y-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // Y-axis title text color
            },
            gridlines: {
                color: '#363c45', // Make horizontal grid lines transparent
            },
        },
        legend: { 
            position: 'none' ,
        },
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        curveType: "function",
          
        // Optionally set the background color of the chart
        backgroundColor: {
            fill: 'transparent' // Transparent or any color you prefer
        }
    };

    useEffect(() => {
        // Fetch and parse CSV data
        d3.csv(csv_data).then(csvData => {
            csvData.forEach(d => {
                d['Birth Rate'] = +d['Birth Rate']; // Ensure Birth Rate is a number
                d['Year'] = +d['Year']; // Ensure Year is a number
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
            
            // Filter data for the selected year
            const filteredData = data.filter(d => d.Year === year);
            console.log('Filtered Data:', filteredData);


            const width = 600;
            const height = 400;
            const legendHeight = 50; // Additional height for the legend
            const sliderHeight = 50; // Height for the slider
            const sliderMargin = 20; // Margin for the slider

            const svg = d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height + legendHeight + sliderHeight + sliderMargin);

            svg.selectAll('*').remove(); // Clear previous elements

            const projection = d3.geoMercator().fitSize([width, height], geoData);
            const path = d3.geoPath().projection(projection);

            // Create a color scale
            const colorDomain = [0,43000] // Adjust as needed
            const colorScale = d3.scaleSequential(d3.interpolateViridis)  // d3.interpolateRgb("purple", "orange") is also ok
                .domain(colorDomain); // Adjust the domain based on your data range

            // Draw the map
            const regions = svg.selectAll('path')
                .data(geoData.features)
                .join('path')
                .attr('d', path)
                .attr('fill', d => {
                    const region = filteredData.find(row => row.Region === d.properties.name);
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
                    const region = filteredData.find(row => row.Region === d.properties.name);
                    const birthRate = region ? region['Birth Rate'] : 'N/A';
                    console.log('Region:', d.properties.name, 'Birth Rate:', birthRate); // Debug log
          
                    // Highlight the region
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 3)
                        .attr('fill', d => {
                            //const region = data.find(row => row.Region === d.properties.name);
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
                    const region = filteredData.find(row => row.Region === event.currentTarget.__data__.properties.name);
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 1)
                        .attr('fill', d => {
                            return region ? colorScale(region['Birth Rate']) : '#ccc';
                        });

                    tooltip.style('visibility', 'hidden');
                })
                .on('click', (event, d) => {
                    const regionName = d.properties.name;
                    const regionData = data.filter(row => row.Region === regionName).map(row => [row.Year, row['Birth Rate']]);
                    regionData.unshift(['Year', 'Birth Rate']);
                    setSelectedRegion(regionName);
                    setRegionData(regionData);
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
                .domain(colorDomain)
                .range([0, legendWidth]);

            const xAxis = d3.axisBottom(xScale)
                .ticks(5);

            legendSvg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', `translate(0,10)`)
                .call(xAxis);

            // Initialize region data for Attica
            if (selectedRegion === 'Attica') {
                const initialRegionData = data.filter(row => row.Region === 'Attica').map(row => [row.Year, row['Birth Rate']]);
                initialRegionData.unshift(['Year', 'Birth Rate']);
                setRegionData(initialRegionData);
            }

        }
    }, [geoData, data, year]);

    return (
        <div className="flex justify-center items-center p-3">
            <div className={'leftToRightAnimate'}>
                <div style={{ "width": 600, "height":20, textAlign: 'center', marginBottom: '20px' }}>
                    <input
                        type="range"
                        style={{ width: '200px' }} // Adjust the width here
                        min="1999"
                        max="2022"
                        value={year}
                        step="1"
                        onChange={(e) => setYear(+e.target.value)}
                    />
                    <span style={{  marginLeft: '10px' }}>{year}</span>
                </div>
                <svg ref={svgRef}></svg>
            </div>

            <div className={'rightToLeftAnimate'} style={{width: '750px', marginTop: '-80px'}}>
                {selectedRegion && (
                    <div className={`chart-container ${selectedRegion ? 'visible' : ''}`}>
                        <Chart
                            chartType="LineChart"
                            width="750px"
                            height="200px"
                            data={regionData}
                            options={options}
                        />
                    </div>
                )}
                <p className={'text-justify p-3 rightToLeftAnimate' }>
                    The visualization presented here focuses on birth rate trends <b>within Greece's regions</b> over time.
                    It illustrates how birth rates have fluctuated across all regions <b>after the administrative changes of 1999.</b>
                    <br></br>
                    <br></br>
                    This visualization provides a historical perspective on demographic changes in Greece's regions.
                    The highlight that can be observed is the <b>42.899 all time high in Attica in 2008</b> compared to the all time low in the same region in <b>2022 that was recorded as 28.125</b>
                    <br></br>
                    <br></br>
                    <b>Clicking a region</b> shows a line graph that highlights the drop in birth rates in that specific region.
                </p>
            </div>
        </div>
    );
};

export default GeoChartGreece;