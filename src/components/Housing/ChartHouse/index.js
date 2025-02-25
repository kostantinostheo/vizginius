import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Switch from "react-switch";
import { FaChartLine, FaChartColumn, FaEye, FaEyeSlash } from "react-icons/fa6";
import Slider from "@mui/material/Slider";

export default function ChartHouse() {
    const initialSqMeterValue = 80; // Default square meter value

    const [sqMeterValue, setSqMeterValue] = useState(initialSqMeterValue);
    const [isLineChart, setIsLineChart] = useState(true); // State to toggle chart type
    const [showPrice, setShowPrice] = useState(true); // State to toggle price series
    const [showWage, setShowWage] = useState(true); // State to toggle wage series
    const [showRent, setShowRent] = useState(true); // State to toggle rent series

    const data = [
        ["Year", `Average House Price (€/${sqMeterValue}sqm)`, "Average Wage (€/year)", `Average Rent (€/${sqMeterValue}sqm/year)`],
        ["2000", 600, 17329, 4.50 * sqMeterValue * 12],
        ["2001", 630, 17912, 4.60 * sqMeterValue * 12],
        ["2002", 660, 17540, 4.70 * sqMeterValue * 12],
        ["2003", 700, 20401, 4.80 * sqMeterValue * 12],
        ["2004", 750, 20775, 4.90 * sqMeterValue * 12],
        ["2005", 800, 20706, 5.00 * sqMeterValue * 12],
        ["2006", 850, 20952, 5.10 * sqMeterValue * 12],
        ["2007", 900, 20956, 5.20 * sqMeterValue * 12],
        ["2008", 950, 20632, 5.30 * sqMeterValue * 12],
        ["2009", 1000, 21606, 5.50 * sqMeterValue * 12],
        ["2010", 1050, 20619, 5.70 * sqMeterValue * 12],
        ["2011", 1100, 19311, 5.90 * sqMeterValue * 12],
        ["2012", 1150, 18187, 6.00 * sqMeterValue * 12],
        ["2013", 1100, 16999, 6.10 * sqMeterValue * 12],
        ["2014", 1050, 16929, 6.20 * sqMeterValue * 12],
        ["2015", 1000, 17095, 6.30 * sqMeterValue * 12],
        ["2016", 1020, 17095, 6.40 * sqMeterValue * 12],
        ["2017", 1050, 16703, 6.50 * sqMeterValue * 12],
        ["2018", 1100, 16810, 6.60 * sqMeterValue * 12],
        ["2019", 1150, 16034, 6.70 * sqMeterValue * 12],
        ["2020", 1200, 16178, 6.80 * sqMeterValue * 12],
        ["2021", 1300, 16235, 7.00 * sqMeterValue * 12],
        ["2022", 2048, 21777, 9.14 * sqMeterValue * 12],
        ["2023", 2333, 21955, 9.95 * sqMeterValue * 12],
        ["2024", 2546, 21955, 10.15 * sqMeterValue * 12]
    ];

    const options = {
        title: `Average House Price (€/${sqMeterValue}sqm) vs Average Wage (€/year)`,
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        chartArea: { width: '60%' },
        colors: ['#2196f3', '#f44336', '#4caf50'],
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
                color: '#FFFFFF', // Y-axis text color
            },
            titleTextStyle: {
                color: '#FFFFFF', // Y-axis title text color
            },
            gridlines: {
                color: '#363c45', // Make horizontal grid lines transparent
            },
        },
        seriesType: 'bars',
        series: {
            0: { type: !isLineChart ? 'line' : 'bars', pointSize: 5, pointShape: 'circle', visibleInLegend: showPrice },
            1: { type: !isLineChart ? 'line' : 'bars', pointSize: 5, pointShape: 'circle', visibleInLegend: showWage },
            2: { type: !isLineChart ? 'line' : 'bars', pointSize: 5, pointShape: 'circle', visibleInLegend: showRent },
        },
        legend: {
            textStyle: {
                color: '#FFFFFF', // Legend text color
            },
        },
        backgroundColor: {
            fill: 'transparent' // Transparent or any color you prefer
        }
    };

    const handleSqMeterChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setSqMeterValue(value);
    };
    const handleChartTypeToggle = () => {
        setIsLineChart(!isLineChart);
    };
    const handleTogglePrice = () => {
        setShowPrice(!showPrice);
    };
    const handleToggleWage = () => {
        setShowWage(!showWage);
    };
    const handleToggleRent = () => {
        setShowRent(!showRent);
    };

    const chartData = [
        ['Year', `Average House Price (${sqMeterValue} sqm/€)`, 'Average Wage (€/year)', `Average Rent (€/${sqMeterValue}sqm/year)`],
        ...data.slice(1).map(row => [row[0], showPrice ? row[1] * sqMeterValue : 0, showWage ? row[2] : 0, showRent ? row[3] : 0])
    ];

    const priceChangeRatio = ((chartData[chartData.length - 1][1] / chartData[1][1]) * 100).toFixed(1);
    const wageChangeRatio = ((chartData[chartData.length - 1][2] / chartData[1][2]) * 100).toFixed(1);
    const rentChangeRatio = ((chartData[chartData.length - 1][3] / chartData[1][3]) * 100).toFixed(1);

    return (
        <div className='mb-10 mt-10'>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart...</div>}
                data={chartData}
                options={options}
                legendToggle
            />
            <div className='mb-6 flex justify-center items-center gap-x-6'>
                <div className='flex items-center justify-center w-[20%]'>
                    <label htmlFor="sqMeterSlider" className='text-white mr-3'>Square Meters: {sqMeterValue}</label>
                    <Slider
                        id="sqMeterSlider"
                        name="sqMeterSlider"
                        value={sqMeterValue}
                        onChange={handleSqMeterChange}
                        min={1}
                        max={100}
                        valueLabelDisplay="auto"
                        sx={{ color: 'white', flexGrow: 1 }}
                        style={{ width: '60%', color: '#FFFFFF', height:"20%" }}
                    />
                </div>
                

                <div>
                <div className='flex gap-x-5'>
                    <div className='flex justify-center items-center gap-x-1'>
                        <label>Toggle to {!isLineChart ? 'Bar Chart' : 'Line Chart'} </label>
                        <Switch  
                            onChange={handleChartTypeToggle} 
                            checked={isLineChart} 
                            uncheckedIcon={
                                <div className='h-full flex items-center'>
                                    <FaChartColumn className='w-full'/>
                                </div>
                            }
                            checkedIcon={
                            <div className='h-full flex items-center'>
                                <FaChartLine className='w-full'/>
                            </div>}
                            onColor='#3281a8'
                            offColor='#3281a8'
                        />
                    </div>  
                    <div className='flex justify-center items-center gap-x-1'>
                        <label>Toggle Price</label>
                        <Switch  onChange={handleTogglePrice} checked={showPrice} 
                        uncheckedIcon={
                            <div className='h-full flex items-center'>
                                <FaEyeSlash className='w-full'/>
                            </div>
                        }
                        checkedIcon={
                        <div className='h-full flex items-center'>
                            <FaEye className='w-full'/>
                        </div>}
                        onColor='#3281a8'
                        offColor='#38496b'/>
                    </div>                <div className='flex justify-center items-center gap-x-1'>
                        <label>Toggle Rent</label>
                        <Switch  onChange={handleToggleRent} checked={showRent} 
                        uncheckedIcon={
                            <div className='h-full flex items-center'>
                                <FaEyeSlash className='w-full'/>
                            </div>
                        }
                        checkedIcon={
                        <div className='h-full flex items-center'>
                            <FaEye className='w-full'/>
                        </div>}
                        onColor='#3281a8'
                        offColor='#38496b'/>
                    </div>                <div className='flex justify-center items-center gap-x-1'>
                        <label>Toggle Wage</label>
                        <Switch  onChange={handleToggleWage} checked={showWage}
                        uncheckedIcon={
                            <div className='h-full flex items-center'>
                                <FaEyeSlash className='w-full'/>
                            </div>
                        }
                        checkedIcon={
                        <div className='h-full flex items-center'>
                            <FaEye className='w-full'/>
                        </div>}
                        onColor='#3281a8'
                        offColor='#38496b'/>
                    </div>
                </div>    

            </div>
            </div>
            <div className='mr-52 ml-52 bg-[#11151f]'>
                <table style={{ width: '100%', color: '#FFFFFF', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #FFFFFF', padding: '8px' }}>Ratio of House Prices Change <br /> (2000-2024)</th>
                            <th style={{ border: '1px solid #FFFFFF', padding: '8px' }}>Ratio of Rent Change <br /> (2000-2024)</th>
                            <th style={{ border: '1px solid #FFFFFF', padding: '8px' }}>Ratio of Wage Change <br /> (2000-2024)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #FFFFFF', padding: '8px', textAlign: 'center' }} className='text-[20px] font-bold'>{priceChangeRatio}% ↗️</td>
                            <td style={{ border: '1px solid #FFFFFF', padding: '8px', textAlign: 'center' }} className='text-[20px] font-bold'>{rentChangeRatio}% ↗️</td>
                            <td style={{ border: '1px solid #FFFFFF', padding: '8px', textAlign: 'center' }} className='text-[20px] font-bold'>{wageChangeRatio}% ↗️</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};
