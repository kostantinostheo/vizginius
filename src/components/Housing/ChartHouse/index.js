import React from 'react';
import { Chart } from 'react-google-charts';

export default function ChartHouse(){

    const data = [
        ["Year", "Price (€/80sqm)", "Average Wage (€/year)"],
        ["2000", 600, 17329],
        ["2001", 630, 17912],
        ["2002", 660, 17540],
        ["2003", 700, 20401],
        ["2004", 750, 20775],
        ["2005", 800, 20706],
        ["2006", 850, 20952],
        ["2007", 900, 20956],
        ["2008", 950, 20632],
        ["2009", 1000, 21606],
        ["2010", 1050, 20619],
        ["2011", 1100, 19311],
        ["2012", 1150, 18187],
        ["2013", 1100, 16999],
        ["2014", 1050, 16929],
        ["2015", 1000, 17095],
        ["2016", 1020, 17095],
        ["2017", 1050, 16703],
        ["2018", 1100, 16810],
        ["2019", 1150, 16034],
        ["2020", 1200, 16178],
        ["2021", 1300, 16235],
        ["2022", 2048, 21777],
        ["2023", 2333, 21955],
    ];
    
    // Extracting years, prices, and wages from 'data'
    const years = data.slice(1).map(row => row[0]);
    const prices = data.slice(1).map(row => row[1]);
    const wages = data.slice(1).map(row => row[2]);
    

    const adjustedPrices = prices.map(price => price * 80);
    const filteredWages = years.map((year, index) => wages[index]);

    // Formatting data for Google Charts
    const chartData = [
        ['Year', 'Price (€/80sqm)', 'Average Wage (€/year)'],
        ...years.map((year, index) => [year, adjustedPrices[index], filteredWages[index]])
    ];

    return (
        <Chart 
            width={'100%'}
            height={'400px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart...</div>}
            data={chartData}
            options={{
                title: 'Price (€/80sqm) vs Average Wage (€/year)',
                titleTextStyle: {
                    color: '#FFFFFF', // Title text color
                },
                chartArea: { width: '60%' },
                colors: ['#2196f3', '#f44336'],
                hAxis: {
                    title: 'Year',
                    textStyle: {
                        color: '#FFFFFF', // X-axis text color
                      },
                      titleTextStyle: {
                        color: '#FFFFFF', // X-axis title text color
                      },
                },
                vAxis: {
                    title: 'Values',
                    minValue: 0,
                    textStyle: {
                        color: '#FFFFFF', // X-axis text color
                      },
                      titleTextStyle: {
                        color: '#FFFFFF', // X-axis title text color
                      },
                      gridlines: {
                        color: '#363c45', // Make horizontal grid lines transparent
                    },
                },
                seriesType: 'bars',
                series: {
                    1: { type: 'line', pointSize: 5, pointShape: 'circle' }
                },
                legend: {
                    textStyle: {
                      color: '#FFFFFF', // Legend text color
                    },
                  },
                
                  // Optionally set the background color of the chart
                  backgroundColor: {
                    fill: 'transparent' // Transparent or any color you prefer
                  }
            }}
            legendToggle
        />
    );
};

