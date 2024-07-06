import React from "react";
import { Chart } from "react-google-charts";
import Box from "@mui/material/Box";

const dataObjects = [
    { year: 2003, value: 38.6 },
    { year: 2004, value: 38.9 },
    { year: 2005, value: 39.2 },
    { year: 2006, value: 39.5 },
    { year: 2007, value: 39.9 },
    { year: 2008, value: 40.3 },
    { year: 2009, value: 40.7 },
    { year: 2010, value: 41.1 },
    { year: 2011, value: 41.5 },
    { year: 2012, value: 42.0 },
    { year: 2013, value: 42.5 },
    { year: 2014, value: 42.9 },
    { year: 2015, value: 43.4 },
    { year: 2016, value: 43.9 },
    { year: 2017, value: 44.2 },
    { year: 2018, value: 44.6 },
    { year: 2019, value: 44.9 },
    { year: 2020, value: 45.2 },
    { year: 2021, value: 45.5 },
    { year: 2022, value: 46.1 },
    { year: 2023, value: 46.5 },
];

const data = [
    ["Year", "Value"],
    ...dataObjects.map(item => [item.year.toString(), item.value])
];

const options = {
    width: '100%',
    height: 400,
    curveType: "function",
    hAxis: { title: "Year", textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
    // Vertical axis
    vAxis: {
        title: "Value",
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
    backgroundColor: 'transparent',
    chartArea: { backgroundColor: 'transparent' },
    colors: ['#ffb300'],
    legend: { position: 'none' },
};

const LineChartComponent = () => {
    return (
        <Box sx={{ width: '70%', margin: 'auto' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Value Over Time (2003 - 2023)</h1>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </Box>
    );
};

export default LineChartComponent;
