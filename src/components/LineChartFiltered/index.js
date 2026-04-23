import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import exampleData from '../../resources/datasets/births-metrics-greece.json';
import './index.css'

const options = {
    title: 'Greece Birth Rate and Other Metrics Over Time',
    chartArea: { height: "60%", width: "65%" },
    titleTextStyle: { color: '#FFFFFF' },
    curveType: "function",
    hAxis: {
        ticks: [
            {v: "1980", f: "1980"}, {v: "1990", f: "1990"},
            {v: "2000", f: "2000"}, {v: "2010", f: "2010"}, {v: "2020", f: "2020"}
        ],
        textStyle: { color: '#FFFFFF' },
        titleTextStyle: { color: '#FFFFFF' },
        gridlines: { color: '#111827' },
        format: '####'
    },
    vAxis: {
        ticks: [
            {v: "0", f: "0"}, {v: "0.2", f: "0.2"}, {v: "0.4", f: "0.4"},
            {v: "0.6", f: "0.6"}, {v: "0.8", f: "0.8"}, {v: "1", f: "1"},
        ],
        textStyle: { color: '#FFFFFF' },
        titleTextStyle: { color: '#FFFFFF' },
        gridlines: { color: '#363c45' },
        minValue: '-0.1',
        maxValue: '1.1'
    },
    legend: { textStyle: { color: '#FFFFFF' } },
    backgroundColor: { fill: 'transparent' },
    series: {
        0: { color: '#e2431e' },
        1: { color: '#f1ca3a' },
        2: { color: '#6f9654' },
        3: { color: '#1c91c0' },
    },
};

const metricDescriptions = {
    'GDP Per Capita': 'During periods of economic growth, rising GDP per capita can lead to an increase in birth rates. Economic improvement often brings better living conditions, improved healthcare, and increased optimism about the future, encouraging families to have more children. This phenomenon can be seen in some emerging economies where economic prosperity instills confidence and resources necessary to support larger families. As GDP declines families are not confident about having children and as a result birth rates decline.',
    'Unemployment Rate %': 'The unemployment rate and birth rates often exhibit an inverse relationship. Higher unemployment rates can lead to economic insecurity and reduced household income, discouraging families from having children. Conversely, lower unemployment rates typically correlate with greater economic stability, increased disposable income, and a more favorable environment for family planning and child-rearing. This pattern underscores how economic conditions directly impact fertility decisions within societies.',
    'Emigration': 'Emigration rates can influence birth rates in complex ways. High emigration rates may lead to demographic shifts, reducing the population of childbearing age and potentially lowering birth rates due to a smaller reproductive pool. Conversely, low emigration rates can contribute to a stable population structure conducive to higher birth rates as families feel more secure about their future within the country. No data was found before 1998.',
    'Inflation Rate %': 'The inflation rate can impact birth rates through economic uncertainty and financial stability. High inflation rates often lead to increased living costs, making it more challenging for families to afford child-rearing expenses, thus potentially lowering birth rates. Conversely, stable or lower inflation rates may contribute to economic confidence and affordability, potentially supporting higher birth rates as families feel more secure about their financial future.'
};

const metricLabels = {
    'GDP Per Capita': 'GDP Per Capita',
    'Unemployment Rate %': 'Unemployment Rate',
    'Emigration': 'Emigration',
    'Inflation Rate %': 'Inflation Rate',
};

const normalizeData = (data) => {
    const minMax = {};
    data[0].forEach((metric, i) => {
        if (i % 2 === 1) {
            const values = data.slice(1).map(row => row[i]);
            minMax[metric] = { min: Math.min(...values), max: Math.max(...values) };
        }
    });
    return data.map((row, rowIndex) => {
        if (rowIndex === 0) return row;
        return row.map((cell, cellIndex) => {
            if (cellIndex === 0) return cell;
            else if (cellIndex % 2 === 1) {
                const metric = data[0][cellIndex];
                const { min, max } = minMax[metric];
                return (cell - min) / (max - min);
            } else {
                return 'Year: ' + data[rowIndex][0] + '\n' + data[0][cellIndex - 1] + ': ' + data[rowIndex][cellIndex - 1];
            }
        });
    });
};

const normalizedData = normalizeData(exampleData);

export function LineChartFiltered() {
    const [selectedMetric, setSelectedMetric] = useState('GDP Per Capita');

    const filteredData = normalizedData.map((row, index) => {
        if (index === 0) return row;
        return row.map((cell, cellIndex) => {
            if (cellIndex === 0 || cellIndex === 1 || cellIndex === 2) return cell;
            else if (cellIndex % 2 === 1) {
                const metricName = normalizedData[0][cellIndex];
                return metricName === selectedMetric ? cell : Number.NaN;
            } else {
                const metricName = normalizedData[0][cellIndex - 1];
                return metricName === selectedMetric ? cell : null;
            }
        });
    });

    return (
        <>
            <h1 className="section-title text-left pl-5 text-[28px] font-bold mt-8">
                Comparison with Other Metrics Over Time
            </h1>
            <p className="text-gray-400 text-[13px] pl-5 pr-5 mt-2 mb-5">
                All series are normalised to 0 - 1 to overlay charts with different scales.
                Hover any data point to see actual values.
            </p>

            <div className="flex flex-col lg:flex-row gap-5 px-5 pb-6">
                <div className="flex flex-col gap-2 w-full lg:w-40 shrink-0">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Compare with</p>
                    {Object.entries(metricLabels).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedMetric(key)}
                            className={`metric-tab${selectedMetric === key ? ' active' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="chart-card flex-1 min-w-0">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="420px"
                        data={filteredData}
                        options={options}
                    />
                </div>

                <div className="info-panel w-full lg:w-64 shrink-0 text-[13px] text-gray-300 leading-relaxed">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">{metricLabels[selectedMetric]}</p>
                    {metricDescriptions[selectedMetric]}
                </div>
            </div>
        </>
    );
}

export default LineChartFiltered;
