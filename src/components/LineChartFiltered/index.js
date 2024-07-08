import React, { useState } from 'react';
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
            format: '####'
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
            minValue: '-0.1',
            maxValue: '1.1'
            
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
      ["Year", "Births", { type: 'string', role: 'tooltip' }, "GDP Per Capita", { role: 'tooltip', type: 'string' }, "Unemployment Rate", { role: 'tooltip', type: 'string' }, "Emigration Rate", { role: 'tooltip', type: 'string'}, "Inflation Rate", { role: 'tooltip', type: 'string' }],
    ["1980", 148134, '', 5894, '', 2.86, '', 0, '', 19.239, ''],
    ["1981", 140953, '', 5380, '', 4.04, '', 0, '', 21.612, ''],
    ["1982", 137275, '', 5579, '', 5.88, '', 0, '', 27.213, ''],
    ["1983", 132608, '', 5020, '', 7.8, '', 0, '', 20.612, ''],
    ["1984", 125724, '', 4853, '', 8.09, '', 0, '', 21.918, ''],
    ["1985", 116481, '', 4814, '', 7.8, '', 0, '', 19.026, ''],
    ["1986", 112810, '', 5657, '', 7.3, '', 0, '', 18.882, ''],
    ["1987", 106392, '', 6565, '', 7.33, '', 0, '', 15.253, ''],
    ["1988", 107505, '', 7598, '', 7.77, '', 0, '', 16.680, ''],
    ["1989", 101657, '', 7847, '', 7.5, '', 0, '', 14.499, ''],
    ["1990", 102229, '', 9600, '', 6.98, '', 0, '', 20.691, ''],
    ["1991", 102620, '', 10188, '', 7.57, '', 0, '', 19.788, ''],
    ["1992", 104081, '', 11176, '', 8.93, '', 0, '', 14.799, ''],
    ["1993", 101799, '', 10402, '', 10.18, '', 0, '', 14.429, ''],
    ["1994", 103763, '', 11091, '', 9.81, '', 0, '', 11.182, ''],
    ["1995", 101495, '', 12959, '', 10.12, '', 0, '', 9.792, ''],
    ["1996", 100718, '', 13749, '', 10.40, '', 0, '', 7.636, ''],
    ["1997", 102038, '', 13428, '', 10.47, '', 0, '', 6.553, ''],
    ["1998", 100894, '', 13472, '', 12.23, '', 60.119, '', 5.104, ''],
    ["1999", 100643, '', 13250, '', 12.14, '', 54.175, '', 3.623, ''],
    ["2000", 103274, '', 12073, '', 11.34, '', 46.993, '', 1.593, ''],
    ["2001", 102282, '', 12549, '', 10.76, '', 45.909, '', 3.475, ''],
    ["2002", 103569, '', 14178, '', 10.35, '', 39.378, '', 3.349, ''],
    ["2003", 104420, '', 18518, '', 9.84, '', 37.433, '', 3.454, ''],
    ["2004", 105655, '', 21995, '', 10.63, '', 38.041, '', 3.063, ''],
    ["2005", 107545, '', 22560, '', 10.07, '', 38.583, '', 2.240, ''],
    ["2006", 112042, '', 24822, '', 8.91, '', 38.368, '', 3.495, ''],
    ["2007", 111926, '', 28864, '', 8.35, '', 40.400, '', 3.423, ''],
    ["2008", 118302, '', 32128, '', 7.66, '', 43.044, '', 4.345, ''],
    ["2009", 117933, '', 29829, '', 9.55, '', 43.686, '', 2.570, ''],
    ["2010", 114766, '', 26717, '', 12.72, '', 62.041, '', -0.177, ''],
    ["2011", 106428, '', 25484, '', 17.97, '', 92.404, '', 0.959, ''],
    ["2012", 100371, '', 21913, '', 24.73, '', 124.694, '', -0.275, ''],
    ["2013", 94134, '', 21788, '', 27.69, '', 117.094, '', -2.046, ''],
    ["2014", 92149, '', 21617, '', 26.71, '', 106.804, '', -1.939, ''],
    ["2015", 91877, '', 18084, '', 24.98, '', 109.351, '', -0.294, ''],
    ["2016", 92898, '', 17924, '', 23.51, '', 106.535, '', -0.579, ''],
    ["2017", 88553, '', 18582, '', 21.41, '', 103.327, '', 0.285, ''],
    ["2018", 86440, '', 19757, '', 19.18, '', 103.049, '', -0.165, ''],
    ["2019", 83756, '', 19144, '', 17.04, '', 95.020, '', 0.227, ''],
    ["2020", 84764, '', 17617, '', 15.90, '', 77.837, '', -0.752, ''],
    ["2021", 85346, '', 20311, '', 14.66, '', 79.596, '', 1.485, ''],
    ["2022", 76095, '', 20867, '', 12.43, '', 80.307, '', 7.847, '']
  ];

    const data = exampleData;
    const [selectedMetric, setSelectedMetric] = useState('GDP Per Capita');

    const metricDescriptions = {
        'GDP Per Capita': 'During periods of economic growth, rising GDP per capita can lead to an increase in birth rates. Economic improvement often brings better living conditions, improved healthcare, and increased optimism about the future, encouraging families to have more children. This phenomenon can be seen in some emerging economies where economic prosperity instills confidence and resources necessary to support larger families. As GDP declines families are not confident about having children and as a result birth rates decline.',
        'Unemployment Rate': 'The unemployment rate and birth rates often exhibit an inverse relationship. Higher unemployment rates can lead to economic insecurity and reduced household income, discouraging families from having children. Conversely, lower unemployment rates typically correlate with greater economic stability, increased disposable income, and a more favorable environment for family planning and child-rearing. This pattern underscores how economic conditions directly impact fertility decisions within societies.',
        'Emigration Rate' : 'Emigration rates can influence birth rates in complex ways. High emigration rates may lead to demographic shifts, reducing the population of childbearing age and potentially lowering birth rates due to a smaller reproductive pool. Conversely, low emigration rates can contribute to a stable population structure conducive to higher birth rates as families feel more secure about their future within the country. No data was found before 1998.',
        'Inflation Rate' : 'The inflation rate can impact birth rates through economic uncertainty and financial stability. High inflation rates often lead to increased living costs, making it more challenging for families to afford child-rearing expenses, thus potentially lowering birth rates. Conversely, stable or lower inflation rates may contribute to economic confidence and affordability, potentially supporting higher birth rates as families feel more secure about their financial future.'
    };
  
    const normalizeData = (data) => {
        const minMax = {};

        // Find min and max for each metric
        data[0].forEach((metric, i) => {
            if (i % 2 === 1) { // Skip 'Year' & Tooltips columns
                const values = data.slice(1).map(row => row[i]);
                minMax[metric] = { min: Math.min(...values), max: Math.max(...values) };
            }
        });

            // Normalize values
        const returnValue = data.map((row, rowIndex) => {
            if (rowIndex === 0){
                return row; // Header row
            }
            return row.map((cell, cellIndex) => {
                if (cellIndex === 0){ // Year column
                    return cell;
                }
                else if(cellIndex % 2 === 1){ // if its the actual value
                    const metric = data[0][cellIndex];
                    const { min, max } = minMax[metric];
                    return (cell - min) / (max - min);
                }
                else { //tooltips
                    return 'Year: '+data[rowIndex][0]+'\n'+data[0][cellIndex-1]+': '+data[rowIndex][cellIndex-1];
                }
            });
        });
        console.log(returnValue)
        return returnValue;
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
        if (cellIndex === 0 || cellIndex === 1 || cellIndex === 2){
          return cell;
        }
        else if( cellIndex % 2 === 1){ // if its the actual value
            const metricName = normalizedData[0][cellIndex];
            return metricName === selectedMetric ? cell : Number.NaN; 
        }
        else{ //if its the tooltip
            const metricName = normalizedData[0][cellIndex - 1];
            return metricName === selectedMetric ? cell : null; 
        }
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
                    checked={selectedMetric === 'Emigration Rate'}
                    onChange={() => toggleMetric('Emigration Rate')}
                    />
                    <span style={{marginLeft: '4px'}}>Emigration Rate</span>
                </label>
                <label className='text-left' style={{ display: 'block', marginBottom: '10px'}}>
                    <input
                    type="radio"
                    checked={selectedMetric === 'Inflation Rate'}
                    onChange={() => toggleMetric('Inflation Rate')}
                    />
                    <span style={{marginLeft: '4px'}}>Inflation Rate</span>
                </label>
            </div>
            <div style={{width: '60%'}}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="450px"
                    data={filteredData}
                    options={options}
                />
            </div>

            <p className={'text-justify p-3 rightToLeftAnimate'} style={{width: '30%'}}>
                {metricDescriptions[selectedMetric]}
            </p>
      </div>
    );
};

export default LineChartFiltered;