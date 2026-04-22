import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Age"],
    ["1990", 36.0], ["1991", 36.1], ["1992", 36.3], ["1993", 36.6], ["1994", 36.9],
    ["1995", 37.1], ["1996", 37.4], ["1997", 37.7], ["1998", 37.9], ["1999", 38.2],
    ["2000", 38.5], ["2001", 38.7], ["2002", 38.3], ["2003", 38.6], ["2004", 38.9],
    ["2005", 39.2], ["2006", 39.5], ["2007", 39.9], ["2008", 40.3], ["2009", 40.7],
    ["2010", 41.1], ["2011", 41.5], ["2012", 42.0], ["2013", 42.5], ["2014", 42.9],
    ["2015", 43.4], ["2016", 43.9], ["2017", 44.2], ["2018", 44.6], ["2019", 44.9],
    ["2020", 45.2], ["2021", 45.5], ["2022", 46.1], ["2023", 46.5],
];

const options = {
    title: "",
    curveType: "function",
    hAxis: {
        textStyle: { color: '#9ca3af' },
        titleTextStyle: { color: '#9ca3af' },
        gridlines: { color: 'transparent' },
    },
    vAxis: {
        textStyle: { color: '#9ca3af' },
        titleTextStyle: { color: '#9ca3af' },
        gridlines: { color: '#1f2937' },
        viewWindow: { min: 34, max: 50 },
    },
    legend: { position: 'none' },
    series: { 0: { color: '#fb923c', pointSize: 3 } },
    backgroundColor: { fill: 'transparent' },
};

const LineChartComponent = () => (
    <Chart
        chartType="LineChart"
        width="100%"
        height="220px"
        data={data}
        options={options}
    />
);

export default LineChartComponent;
