import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import dataMap from '../../resources/datasets/age-groups-greece.json';

const generateData = (year) => {
    const yearData = dataMap[year];
    return [
        [
            "Age Group",
            "Percentage",
            { role: "style" },
            { sourceColumn: 0, role: "annotation", type: "string", calc: "stringify" },
        ],
        ["0-19",  yearData[0], "color: #FFA500", null],
        ["20-39", yearData[1], "color: #FFA500", null],
        ["40-59", yearData[2], "color: #FFA500", null],
        ["60-79", yearData[3], "color: #FFA500", null],
        ["80+",   yearData[4], "color: #FFA500", null],
    ];
};

const options = {
    title: "Population Age Distribution",
    titleTextStyle: { color: '#FFFFFF' },
    curveType: "function",
    bar: { groupWidth: "80%" },
    hAxis: {
        title: "Percentage",
        textStyle: { color: 'white' },
        titleTextStyle: { color: 'white' },
        maxValue: 35,
        gridlines: { color: '#363c45' },
    },
    vAxis: {
        title: "Age Group",
        textStyle: { color: '#FFFFFF' },
        titleTextStyle: { color: '#FFFFFF' },
        gridlines: { color: '#363c45' },
    },
    legend: {
        position: 'right',
        textStyle: { color: '#ffffff' },
    },
    series: { 0: { color: '#FFA500' } },
    backgroundColor: { fill: 'transparent' },
};

const AgeGroupsComponent = () => {
    const [year, setYear] = useState(1990);
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
                    const newYear = prevYear >= 2023 ? 1990 : prevYear + 1;
                    setData(generateData(newYear));
                    return newYear;
                });
            }, 500);
        }
        return () => clearInterval(timer);
    }, [playing]);

    const togglePlaying = () => setPlaying(!playing);

    return (
        <Box sx={{ width: '70%', margin: 'auto' }}>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px', gap: '10px' }}>
                <IconButton onClick={togglePlaying} sx={{ color: '#FFA500' }}>
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <Slider
                    value={year}
                    onChange={handleSliderChange}
                    aria-labelledby="year-slider"
                    step={1}
                    marks
                    min={1990}
                    max={2023}
                    valueLabelDisplay="on"
                    sx={{ color: 'white', flexGrow: 1 }}
                />
            </Box>
        </Box>
    );
};

export default AgeGroupsComponent;
