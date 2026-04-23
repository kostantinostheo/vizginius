import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Chart } from 'react-google-charts';
import { FaHandPointer } from 'react-icons/fa6';
import './index.css'
import csv_data from '../../resources/datasets/birth_rates_greece.csv'
import greece_geojson from '../../resources/datasets/greece-regions.geojson'
import Slider from "@mui/material/Slider";

export function GeoChartGreece() {
    const [data, setData] = useState([]);
    const [geoData, setGeoData] = useState(null);
    const [year, setYear] = useState(2022);
    const [selectedRegion, setSelectedRegion] = useState('Attica');
    const [regionData, setRegionData] = useState([]);
    const svgRef = useRef();

    const options = {
        title: `${selectedRegion} Births Over Time (1999-2022)`,
        hAxis: {
            title: 'Year',
            ticks: [
                {v: "2000", f: "2000"}, {v: "2005", f: "2005"},
                {v: "2010", f: "2010"}, {v: "2015", f: "2015"}, {v: "2020", f: "2020"}
            ],
            textStyle: { color: '#FFFFFF' },
            titleTextStyle: { color: '#FFFFFF' },
            gridlines: { color: '#111827' },
        },
        vAxis: {
            title: 'Number of Births',
            textStyle: { color: '#FFFFFF' },
            titleTextStyle: { color: '#FFFFFF' },
            gridlines: { color: '#363c45' },
        },
        legend: { position: 'none' },
        titleTextStyle: { color: '#FFFFFF' },
        curveType: "function",
        backgroundColor: { fill: 'transparent' },
    };

    useEffect(() => {
        d3.csv(csv_data).then(csvData => {
            csvData.forEach(d => {
                d['Birth Rate'] = +d['Birth Rate'];
                d['Year'] = +d['Year'];
            });
            setData(csvData);
        });
        d3.json(greece_geojson).then(setGeoData);
    }, []);

    useEffect(() => {
        if (geoData && data.length) {
            const filteredData = data.filter(d => d.Year === year);

            const width = 600;
            const height = 400;
            const legendHeight = 50;
            const sliderHeight = 50;
            const sliderMargin = 20;

            const svg = d3.select(svgRef.current)
                .attr('width', width)
                .attr('height', height + legendHeight + sliderHeight + sliderMargin);

            svg.selectAll('*').remove();

            const projection = d3.geoMercator().fitSize([width, height], geoData);
            const path = d3.geoPath().projection(projection);

            const colorDomain = [0, 43000];
            const colorScale = d3.scaleSequential(d3.interpolateViridis).domain(colorDomain);

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

            d3.selectAll('.geo-tooltip').remove();
            const tooltip = d3.select('body').append('div')
                .attr('class', 'geo-tooltip')
                .style('position', 'absolute')
                .style('visibility', 'hidden')
                .style('background', '#1f2937')
                .style('color', '#fff')
                .style('padding', '6px 10px')
                .style('border', '1px solid #4b5563')
                .style('border-radius', '6px')
                .style('font-size', '13px')
                .style('pointer-events', 'none');

            regions
                .on('mouseover', (event, d) => {
                    const region = filteredData.find(row => row.Region === d.properties.name);
                    const birthRate = region ? region['Birth Rate'] : 'N/A';
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 3)
                        .attr('fill', () => region ? d3.rgb(colorScale(region['Birth Rate'])).darker(1) : '#ccc');
                    tooltip.html(`${d.properties.name}: ${birthRate}`).style('visibility', 'visible');
                })
                .on('mousemove', event => {
                    tooltip.style('top', `${event.pageY + 5}px`).style('left', `${event.pageX + 5}px`);
                })
                .on('mouseout', (event) => {
                    const region = filteredData.find(row => row.Region === event.currentTarget.__data__.properties.name);
                    d3.select(event.currentTarget)
                        .attr('stroke', '#000')
                        .attr('stroke-width', 1)
                        .attr('fill', () => region ? colorScale(region['Birth Rate']) : '#ccc');
                    tooltip.style('visibility', 'hidden');
                })
                .on('click', (event, d) => {
                    const regionName = d.properties.name;
                    const regionData = data.filter(row => row.Region === regionName).map(row => [row.Year, row['Birth Rate']]);
                    regionData.unshift(['Year', 'Birth Rate']);
                    setSelectedRegion(regionName);
                    setRegionData(regionData);
                });

            const legendWidth = 300;
            const legendSvg = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${(width - legendWidth) / 2},${height + 20})`);

            const gradient = legendSvg.append('defs')
                .append('linearGradient')
                .attr('id', 'gradient')
                .attr('x1', '0%').attr('x2', '100%')
                .attr('y1', '0%').attr('y2', '0%');

            gradient.append('stop').attr('offset', '0%').attr('stop-color', colorScale.range()[0]);
            gradient.append('stop').attr('offset', '100%').attr('stop-color', colorScale.range()[1]);

            legendSvg.append('rect')
                .attr('width', legendWidth)
                .attr('height', 10)
                .style('fill', 'url(#gradient)');

            const xScale = d3.scaleLinear().domain(colorDomain).range([0, legendWidth]);
            legendSvg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', 'translate(0,10)')
                .call(d3.axisBottom(xScale).ticks(5));

            if (selectedRegion === 'Attica') {
                const initialRegionData = data.filter(row => row.Region === 'Attica').map(row => [row.Year, row['Birth Rate']]);
                initialRegionData.unshift(['Year', 'Birth Rate']);
                setRegionData(initialRegionData);
            }
        }
        return () => { d3.selectAll('.geo-tooltip').remove(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [geoData, data, year]);

    return (
        <div>
            <h1 className="section-title text-left pl-5 text-[30px] font-bold mt-6">Birth Rates Across Greece&apos;s Regions</h1>
            <p className="text-gray-400 text-[13px] pl-5 pr-5 mt-1 mb-5">
                Explore birth rate changes across Greece&apos;s 13 regions (1999–2022). Drag the slider to change the year; darker colours indicate fewer births.
            </p>

            <div className="flex flex-col lg:flex-row items-start gap-5 px-4 pb-4">
                <div className="leftToRightAnimate overflow-x-auto shrink-0">
                    <div className="flex items-center gap-3 mb-3 px-1">
                        <Slider
                            value={year}
                            onChange={(e, newValue) => setYear(newValue)}
                            valueLabelDisplay="off"
                            min={1999}
                            max={2022}
                            sx={{
                                color: '#3b82f6',
                                flex: 1,
                                '& .MuiSlider-thumb': { width: 16, height: 16 },
                            }}
                            style={{ flex: 1 }}
                        />
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-lg min-w-[58px] text-center shrink-0">
                            {year}
                        </span>
                    </div>
                    <svg ref={svgRef}></svg>
                </div>

                <div className="rightToLeftAnimate flex flex-col gap-4 w-full lg:flex-1 min-w-0">
                    {selectedRegion && regionData.length > 1 && (
                        <div className="chart-card">
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Selected Region</p>
                            <p className="text-base font-bold text-white mt-0.5 mb-2">{selectedRegion}</p>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="190px"
                                data={regionData}
                                options={options}
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <div className="stat-card">
                            <p className="text-xl font-bold text-emerald-400">42,899</p>
                            <p className="text-[11px] text-gray-400 mt-1">All-time high births</p>
                            <p className="text-[10px] text-gray-600 mt-0.5">Attica · 2008</p>
                        </div>
                        <div className="stat-card">
                            <p className="text-xl font-bold text-red-400">28,125</p>
                            <p className="text-[11px] text-gray-400 mt-1">All-time low births</p>
                            <p className="text-[10px] text-gray-600 mt-0.5">Attica · 2022</p>
                        </div>
                    </div>

                    <div className="info-panel text-[13px] text-gray-300 leading-relaxed">
                        Every region shows a consistent downward trend since 2008.
                        Attica (Greece&apos;s most populous region) recorded a
                        <span className="text-emerald-400 font-semibold"> 34% drop</span> in births
                        over just 14 years, reflecting a crisis that spans the entire country.
                    </div>

                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-lg px-3 py-2">
                        <FaHandPointer className="text-blue-300 shrink-0" size={15} />
                        <p className="text-[12px] text-blue-300">Click any region on the map to view its birth rate trend over time</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeoChartGreece;
