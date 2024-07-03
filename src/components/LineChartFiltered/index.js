import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import './index.css'


export function LineChartFiltered() {

    const options = {
        title: 'Greece Birth Rate and Other Metrics Over Time',
        chartArea: {
	        height: "60%",
	        width: "65%"
	    },
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        curveType: "function",
        hAxis: {
            ticks: [
                {v: "1980", f: "1980"},
                {v: "1990", f: "1990"},
                {v: "2000", f: "2000"},
                {v: "2010", f: "2010"},
                {v: "2020", f: "2020"}
            ],
            textStyle: {
              color: '#FFFFFF', // X-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // X-axis title text color
            },
            gridlines: {
                color: '#111827', // Make vertical grid lines invinsible
            },
          },
          
          // Vertical axis
          vAxis: {
            ticks: [
                {v: "0", f: "0"},
                {v: "0.2", f: "0.2"},
                {v: "0.4", f: "0.4"},
                {v: "0.6", f: "0.6"},
                {v: "0.8", f: "0.8"},
                {v: "1", f: "1"},
            ],
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
          
          // Chart legend
          legend: {
            textStyle: {
              color: '#FFFFFF', // Legend text color
            },
          },
        
          // Optionally set the background color of the chart
          backgroundColor: {
            fill: 'transparent' // Transparent or any color you prefer
          },
            series: {
                0: { color: '#e2431e' }, // Greece Birth Rate color
                1: { color: '#f1ca3a' },
                2: { color: '#6f9654' },
                3: { color: '#1c91c0' },
            },
    };
    const exampleData = [
        ["Year", "Births", "GDP Per Capita", "Unemployment Rate", "Median Age", "Refugee Population"],
        ["1980", 148134, 5894, 0, 337248, 3750 ],
        ["1981", 140953, 5380, 0, 337687, 3990 ],
        ["1982", 137275, 5579, 0, 338522, 3950 ],
        ["1983", 132608, 5020, 0, 339584, 4090 ],
        ["1984", 125724, 4853, 0, 340845, 4320 ],
        ["1985", 116481, 4814, 0, 342183, 4360 ],
        ["1986", 112810, 5657, 0, 343593, 3280 ],
        ["1987", 106392, 6565, 0, 345050, 4630 ],
        ["1988", 107505, 7598, 0, 346617, 8262 ],
        ["1989", 101657, 7847, 0, 348336, 7490 ],
        ["1990", 102229, 9600, 0, 350139, 8488 ],
        ["1991", 102620, 10188, 757, 352041, 8989 ],
        ["1992", 104081, 11176, 893, 354020, 8456 ],
        ["1993", 101799, 10402, 1018, 356113, 7859 ],
        ["1994", 103763, 11091, 981, 358295, 7773 ],
        ["1995", 101495, 12959, 1012, 360479, 4428 ],
        ["1996", 100718, 13749, 1040, 362730, 5780 ],
        ["1997", 102038, 13428, 1047, 365101 , 5520],
        ["1998", 100894, 13472, 1223, 367590 , 6145],
        ["1999", 100643, 13250, 1214, 370166 , 6283],
        ["2000", 103274, 12073, 1134, 372861 , 6653],
        ["2001", 102282, 12549, 1076, 375674 , 6927],
        ["2002", 103569, 14178, 1035, 378626 , 2778],
        ["2003", 104420, 18518, 984, 381677 , 2762],
        ["2004", 105655, 21995, 1063, 384831 , 2479],
        ["2005", 107545, 22560, 1007, 388077, 2394 ],
        ["2006", 112042, 24822, 891, 391382, 2292 ],
        ["2007", 111926, 28864, 835, 394739, 2228 ],
        ["2008", 118302, 32128, 766, 398130, 2169 ],
        ["2009", 117933, 29829, 955, 401567, 1700 ],
        ["2010", 114766, 26717, 1272, 405037, 1443 ],
        ["2011", 106428, 25484, 1797, 408634, 1566 ],
        ["2012", 100371, 21913, 2473, 412327, 2090 ],
        ["2013", 94134, 21788, 2769, 416135, 3468 ],
        ["2014", 92149, 21617, 2671, 420091, 10292 ],
        ["2015", 91877, 18084, 2498, 423922, 24831 ],
        ["2016", 92898, 17924, 2351, 427716, 46411 ],
        ["2017", 88553, 18582, 2141, 431508, 38988 ],
        ["2018", 86440, 19757, 1918, 435434, 61446 ],
        ["2019", 83756, 19144, 1704, 439489, 80454 ],
        ["2020", 84764, 17617, 1590, 443513, 103101 ],
        ["2021", 85346, 20311, 1466, 447398, 119650 ],
        ["2022", 76095, 20867, 1243, 451012, 160761 ]
    ];

    const [data, setData] = useState(exampleData);
    const [selectedMetric, setSelectedMetric] = useState('GDP Per Capita');

    const metricDescriptions = {
        'GDP Per Capita': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Nunc sed augue lacus viverra vitae.',
        'Unemployment Rate': 'According to N.Apergis (https://doi.org/10.1016/j.jpolmod.2005.01.001)   Eget nulla facilisi etiam dignissim diam quis enim lobortis. Pretium vulputate sapien nec sagittis. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Sit amet aliquam id diam maecenas ultricies mi. Rhoncus mattis rhoncus urna neque viverra justo nec. Enim neque volutpat ac tincidunt vitae semper quis.',
        'Median Age' : 'The Refugee Crisis in 2005 even though we cannot claim that has affected the Birth rates in Greece is associated with the economic crisis. High refugees numbers are associated with lower wages, higher housing prices, and higher GDP. (https://www.brookings.edu/articles/10-economic-characteristics-of-refugee-arrivals-and-returns/) ',
        'Refugee Population' : 'The Refugee Crisis in 2005 even though we cannot claim that has affected the Birth rates in Greece is associated with the economic crisis. High refugees numbers are associated with lower wages, higher housing prices, and higher GDP. (https://www.brookings.edu/articles/10-economic-characteristics-of-refugee-arrivals-and-returns/) '
    };
  
    const normalizeData = (data) => {
        const minMax = {};

        // Find min and max for each metric
        data[0].forEach((metric, i) => {
            if (i > 0) { // Skip 'Year' column
                const values = data.slice(1).map(row => row[i]);
                minMax[metric] = { min: Math.min(...values), max: Math.max(...values) };
            }
            });

            // Normalize values
            return data.map((row, rowIndex) => {
            if (rowIndex === 0) return row; // Header row
            return row.map((cell, cellIndex) => {
                if (cellIndex === 0) return cell; // Year column
                const metric = data[0][cellIndex];
                const { min, max } = minMax[metric];
                return (cell - min) / (max - min);
            });
        });
    };

    const normalizedData = normalizeData(data);

    const toggleMetric = (metric) => {
        setSelectedMetric(metric);

    };
  
    const filteredData = normalizedData.map((row, index) => {
      if (index === 0) {
        return row;
      }
      return row.map((cell, cellIndex) => {
        if (cellIndex === 0 || cellIndex === 1) {
          return cell;
        }
        const metricName = normalizedData[0][cellIndex];
        return metricName === selectedMetric ? cell : Number.NaN; 
      });
    });
  
  
    return (
        <div className="flex justify-center items-center p-3">
            
            <div className='pl-5' style={{marginRight: '-60px'}}>
                <label className='text-left' style={{ display: 'block', marginBottom: '10px'}}>
                    <input
                    type="radio"
                    checked={selectedMetric === 'GDP Per Capita'}
                    onChange={() => toggleMetric('GDP Per Capita')}
                    />
                    <span style={{marginLeft: '4px'}}>GDP Per Capita</span>
                </label>
                <label className='text-left' style={{ display: 'block', marginBottom: '10px'}}>
                    <input
                    type="radio"
                    checked={selectedMetric === 'Unemployment Rate'}
                    onChange={() => toggleMetric('Unemployment Rate')}
                    />
                    <span style={{marginLeft: '4px'}}>Unemployment Rate</span>
                </label>
                <label className='text-left' style={{ display: 'block', marginBottom: '10px'}}>
                    <input
                    type="radio"
                    checked={selectedMetric === 'Median Age'}
                    onChange={() => toggleMetric('Median Age')}
                    />
                    <span style={{marginLeft: '4px'}}>Median Age</span>
                </label>
                <label className='text-left' style={{ display: 'block', marginBottom: '10px'}}>
                    <input
                    type="radio"
                    checked={selectedMetric === 'Refugee Population'}
                    onChange={() => toggleMetric('Refugee Population')}
                    />
                    <span style={{marginLeft: '4px'}}>Refugee Population</span>
                </label>
            </div>
            <div style={{width: '60%'}}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={filteredData}
                    options={options}
                />

            </div>

            <p className={'text-justify p-3 rightToLeftAnimate' } style={{width: '30%'}}>
                    {metricDescriptions[selectedMetric]}
                </p>
      </div>
    );
};

export default LineChartFiltered;