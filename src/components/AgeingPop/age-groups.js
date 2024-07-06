import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

// https://ec.europa.eu/eurostat/web/interactive-publications/demography-2024#ageing-population
const dataMap = {
    2003: [21.6, 30.3, 25.1, 19.1, 3.8],
    2004: [21.3, 30.3, 25.4, 19.1, 3.8],
    2005: [20.9, 30.3, 25.7, 19.2, 3.9],
    2006: [20.6, 30.1, 25.9, 19.3, 4.1],
    2007: [20.4, 29.7, 26.1, 19.4, 4.3],
    2008: [20.2, 29.3, 26.4, 19.5, 4.5],
    2009: [20.0, 28.8, 26.7, 19.7, 4.7],
    2010: [19.9, 28.4, 27.0, 19.7, 4.9],
    2011: [19.7, 27.8, 27.3, 19.9, 5.2],
    2012: [19.7, 27.3, 27.6, 20.0, 5.4],
    2013: [19.7, 26.6, 27.9, 20.2, 5.7],
    2014: [19.6, 26.0, 28.1, 20.3, 6.0],
    2015: [19.5, 25.3, 28.4, 20.5, 6.3],
    2016: [19.4, 24.7, 28.6, 20.8, 6.5],
    2017: [19.4, 24.2, 28.8, 20.9, 6.7],
    2018: [19.4, 23.7, 28.9, 21.0, 6.9],
    2019: [19.4, 23.3, 29.0, 21.2, 7.1],
    2020: [19.4, 22.9, 29.1, 21.4, 7.2],
    2021: [19.2, 22.5, 29.2, 21.7, 7.3],
    2022: [18.8, 21.9, 30.0, 22.2, 7.2],
    2023: [18.5, 21.7, 30.2, 22.6, 7.1],
};

const generateData = (year) => {
    const yearData = dataMap[year];
    const data = [
        [
            "Age Group",
            "Percentage",
            { role: "style" },
            {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
            },
        ],
        ["0-19", yearData[0], "color: #ffb300", null],
        ["20-39", yearData[1], "color: #ffb300", null],
        ["40-59", yearData[2], "color: #ffb300", null],
        ["60-79", yearData[3], "color: #ffb300", null],
        ["80+", yearData[4], "color: #ffb300", null],
    ];
    return data;
};

const options = {
    width: '100%',
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none", textStyle: { color: 'white' } },
    hAxis: { title: "Percentage", textStyle: { color: 'white' }, titleTextStyle: { color: 'white' }, maxValue: 35 },
    vAxis: { title: "Age Group", textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
    backgroundColor: 'transparent',
    chartArea: { backgroundColor: 'transparent' },
    color: 'white'
};

const AgeGroupsComponent = () => {
    const [year, setYear] = useState(2003);
    const [data, setData] = useState(generateData(2003));
    const [playing, setPlaying] = useState(false);

    const handleSliderChange = (event, newValue) => {
        setYear(newValue);
        setData(generateData(newValue));
    };

    useEffect(() => {
        let timer;
        if (playing) {
            timer = setInterval(() => {
                setYear(prevYear => {
                    const newYear = prevYear >= 2023 ? 2003 : prevYear + 1;
                    setData(generateData(newYear));
                    return newYear;
                });
            }, 500);
        }
        return () => clearInterval(timer);
    }, [playing]);

    const togglePlaying = () => {
        setPlaying(!playing);
    };

    return (
        <Box sx={{ width: '70%', margin: 'auto' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Population Age Distribution in {year}</h1>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                <Slider
                    value={year}
                    onChange={handleSliderChange}
                    aria-labelledby="year-slider"
                    step={1}
                    marks
                    min={2003}
                    max={2023}
                    valueLabelDisplay="auto"
                    sx={{ color: 'white', flexGrow: 1 }}
                />
                <IconButton onClick={togglePlaying} sx={{ color: 'white' }}>
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
            </Box>
        </Box>
    );
};

export default AgeGroupsComponent;
