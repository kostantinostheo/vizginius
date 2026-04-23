import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Switch from "react-switch";
import { FaChartLine, FaChartColumn, FaEye, FaEyeSlash, FaArrowTrendUp } from "react-icons/fa6";
import Slider from "@mui/material/Slider";
import rawData from '../../../resources/datasets/housing-greece.json';

export default function ChartHouse() {
    const [sqMeterValue, setSqMeterValue] = useState(80);
    const [isLineChart, setIsLineChart] = useState(false);
    const [showPrice, setShowPrice] = useState(true);
    const [showWage, setShowWage] = useState(true);
    const [showRent, setShowRent] = useState(true);

    const chartData = [
        [
            'Year',
            `House Price (${sqMeterValue} m²/€)`,
            'Avg Wage (€/year)',
            `Rent (${sqMeterValue} m²/year)`,
        ],
        ...rawData.map(r => [
            r[0],
            showPrice ? r[1] * sqMeterValue : 0,
            showWage  ? r[2]               : 0,
            showRent  ? r[3] * sqMeterValue * 12 : 0,
        ]),
    ];

    const priceChangeRatio = ((rawData[rawData.length - 1][1] / rawData[0][1]) * 100).toFixed(1);
    const wageChangeRatio  = ((rawData[rawData.length - 1][2] / rawData[0][2]) * 100).toFixed(1);
    const rentChangeRatio  = ((rawData[rawData.length - 1][3] / rawData[0][3]) * 100).toFixed(1);

    const options = {
        title: `House Price vs Wage vs Rent (${sqMeterValue} m²)`,
        titleTextStyle: { color: '#FFFFFF', fontSize: 13 },
        chartArea: { width: '65%' },
        colors: ['#3b82f6', '#f97316', '#22c55e'],
        hAxis: { title: 'Year', textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' } },
        vAxis: {
            title: 'Value (€)',
            minValue: 0,
            textStyle: { color: '#9ca3af' },
            titleTextStyle: { color: '#9ca3af' },
            gridlines: { color: '#1f2937' },
        },
        seriesType: isLineChart ? 'line' : 'bars',
        series: {
            0: { pointSize: 4 },
            1: { pointSize: 4 },
            2: { pointSize: 4 },
        },
        legend: { textStyle: { color: '#d1d5db' } },
        backgroundColor: { fill: 'transparent' },
    };

    const ratioCards = [
        { label: 'House Price Change', value: `${priceChangeRatio}%`, color: 'text-blue-400',   sub: '2000 - 2024' },
        { label: 'Rent Change',        value: `${rentChangeRatio}%`,  color: 'text-green-400',  sub: '2000 - 2024' },
        { label: 'Wage Change',        value: `${wageChangeRatio}%`,  color: 'text-orange-400', sub: '2000 - 2024' },
    ];

    const ToggleControl = ({ label, checked, onColor, offColor, onChange, checkedIcon, uncheckedIcon }) => (
        <div className="flex items-center gap-2 text-[13px] text-gray-300">
            <Switch
                onChange={onChange}
                checked={checked}
                onColor={onColor}
                offColor={offColor}
                checkedIcon={<div className="h-full flex items-center justify-center">{checkedIcon}</div>}
                uncheckedIcon={<div className="h-full flex items-center justify-center">{uncheckedIcon}</div>}
                height={22}
                width={44}
            />
            <span>{label}</span>
        </div>
    );

    return (
        <div className="mt-6 px-5">
            <div className="chart-card mb-5">
                <Chart
                    width="100%"
                    height="380px"
                    chartType="ComboChart"
                    data={chartData}
                    options={options}
                    legendToggle
                />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="info-panel flex-1 min-w-[200px]">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">House Size</p>
                    <p className="text-2xl font-bold text-white mb-3">{sqMeterValue} m²</p>
                    <Slider
                        value={sqMeterValue}
                        onChange={(_, v) => setSqMeterValue(v)}
                        min={20}
                        max={200}
                        valueLabelDisplay="auto"
                        sx={{
                            color: '#3b82f6',
                            '& .MuiSlider-valueLabel': { backgroundColor: '#1d4ed8' },
                        }}
                    />
                    <div className="flex justify-between text-[11px] text-gray-600 mt-1">
                        <span>20 m²</span><span>200 m²</span>
                    </div>
                </div>

                <div className="info-panel flex-1">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Display Options</p>
                    <div className="flex flex-wrap gap-4">
                        <ToggleControl
                            label={isLineChart ? 'Line Chart' : 'Bar Chart'}
                            checked={isLineChart}
                            onColor="#1d4ed8" offColor="#374151"
                            onChange={() => setIsLineChart(!isLineChart)}
                            checkedIcon={<FaChartLine size={12} />}
                            uncheckedIcon={<FaChartColumn size={12} />}
                        />
                        <ToggleControl
                            label="Price"
                            checked={showPrice}
                            onColor="#1d4ed8" offColor="#374151"
                            onChange={() => setShowPrice(!showPrice)}
                            checkedIcon={<FaEye size={12} />}
                            uncheckedIcon={<FaEyeSlash size={12} />}
                        />
                        <ToggleControl
                            label="Rent"
                            checked={showRent}
                            onColor="#1d4ed8" offColor="#374151"
                            onChange={() => setShowRent(!showRent)}
                            checkedIcon={<FaEye size={12} />}
                            uncheckedIcon={<FaEyeSlash size={12} />}
                        />
                        <ToggleControl
                            label="Wage"
                            checked={showWage}
                            onColor="#1d4ed8" offColor="#374151"
                            onChange={() => setShowWage(!showWage)}
                            checkedIcon={<FaEye size={12} />}
                            uncheckedIcon={<FaEyeSlash size={12} />}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                {ratioCards.map(c => (
                    <div key={c.label} className="stat-card">
                        <p className={`text-2xl font-bold ${c.color} flex items-center justify-center gap-1.5`}>
                            {c.value} <FaArrowTrendUp size={18} />
                        </p>
                        <p className="text-[12px] text-gray-300 mt-1">{c.label}</p>
                        <p className="text-[10px] text-gray-600 mt-0.5">{c.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
