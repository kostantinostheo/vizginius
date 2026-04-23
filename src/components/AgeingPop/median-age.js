import React from "react";
import { Chart } from "react-google-charts";
import medianAgeData from '../../resources/datasets/median-age-greece.json';

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
        data={medianAgeData}
        options={options}
    />
);

export default LineChartComponent;
