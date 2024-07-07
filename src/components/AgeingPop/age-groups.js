import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

// https://ec.europa.eu/eurostat/web/interactive-publications/demography-2024#ageing-population
const dataMap = {
    1990: [27.0, 28.2, 25.1, 16.7, 3.0],
    1991: [26.7, 28.4, 24.9, 16.9, 3.1],
    1992: [26.1, 28.7, 24.8, 17.3, 3.1],
    1993: [25.5, 29.0, 24.7, 17.4, 3.3],
    1994: [24.9, 29.4, 24.6, 17.8, 3.3],
    1995: [24.3, 29.7, 24.5, 18.2, 3.4],
    1996: [23.7, 29.9, 24.4, 18.5, 3.5],
    1997: [23.1, 30.1, 24.4, 18.9, 3.5],
    1998: [22.6, 30.3, 24.5, 19.2, 3.5],
    1999: [22.0, 30.5, 24.5, 19.5, 3.5],
    2000: [21.4, 30.7, 24.7, 19.7, 3.5],
    2001: [20.8, 30.9, 24.6, 20.1, 3.6],
    2002: [22.1, 30.3, 24.7, 19.1, 3.7],
    2003: [21.6, 30.3, 25.1, 19.1, 3.8],
    2004: [21.2, 30.3, 25.4, 19.2, 3.8],
    2005: [20.9, 30.3, 25.7, 19.2, 3.9],
    2006: [20.6, 30.1, 25.9, 19.3, 4.1],
    2007: [20.4, 29.7, 26.1, 19.4, 4.3],
    2008: [20.2, 29.3, 26.4, 19.6, 4.5],
    2009: [20.1, 28.8, 26.7, 19.7, 4.7],
    2010: [19.9, 28.4, 27.0, 19.8, 4.9],
    2011: [19.8, 27.8, 27.3, 19.9, 5.2],
    2012: [19.7, 27.3, 27.6, 20.0, 5.4],
    2013: [19.6, 26.6, 27.9, 20.1, 5.7],
    2014: [19.6, 26.0, 28.1, 20.3, 6.0],
    2015: [19.5, 25.3, 28.4, 20.5, 6.3],
    2016: [19.4, 24.7, 28.6, 20.7, 6.5],
    2017: [19.4, 24.2, 28.8, 20.9, 6.7],
    2018: [19.4, 23.7, 28.9, 21.0, 6.9],
    2019: [19.4, 23.3, 29.0, 21.2, 7.1],
    2020: [19.4, 22.9, 29.1, 21.4, 7.2],
    2021: [19.3, 22.5, 29.2, 21.7, 7.3],
    2022: [18.7, 21.9, 30.0, 22.1, 7.2],
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
        ["0-19", yearData[0], "color: #FFA500", null],
        ["20-39", yearData[1], "color: #FFA500", null],
        ["40-59", yearData[2], "color: #FFA500", null],
        ["60-79", yearData[3], "color: #FFA500", null],
        ["80+", yearData[4], "color: #FFA500", null],
    ];
    return data;
};

const options = {
    title: "Population Age Distribution",
    titleTextStyle: {
        color: '#FFFFFF', // Title text color
    },
    curveType: "function",
    bar: { groupWidth: "80%" },
    hAxis: {
        title: "Percentage",
        textStyle: { color: 'white' },
        titleTextStyle: { color: 'white' },
        maxValue: 35,
        gridlines: {
            color: '#363c45', // Semi-transparent vertical grid lines
        },
    },
    // Vertical axis
    vAxis: {
        title: "Age Group",
        textStyle: {
            color: '#FFFFFF', // Y-axis text color
        },
        titleTextStyle: {
            color: '#FFFFFF', // Y-axis title text color
        },
        gridlines: {
            color: '#363c45', // Horizontal grid lines color
        },

    },
    // Chart legend
    legend: {
        position: 'right',
        textStyle: {
            color: '#ffffff', // Legend text color
        },
    },
    series: {
        0: { color: '#FFA500' }, // Set series color to orange
    },

    // Optionally set the background color of the chart
    backgroundColor: {
        fill: 'transparent' // Transparent or any color you prefer
    }
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

    const togglePlaying = () => {
        setPlaying(!playing);
    };

    return (
        <Box sx={{ width: '70%', margin: 'auto' }}>
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
                    min={1990}
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
