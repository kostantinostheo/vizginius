import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import '../../resources/animations/slideFadeIn.css'

export default function AbortionsInGreece() {
    const allData = [
        ["Year", "Abortions", { role: 'style' }, { role: 'annotation' }],
        ["1950", 200, null, null],
        ["1951", 500, null, null],
        ["1952", 700, null, null],
        ["1953", 900, null, null],
        ["1954", 1100, null, null],
        ["1955", 1400, null, null],
        ["1956", 1600, null, null],
        ["1957", 1800, null, null],
        ["1958", 2100, null, null],
        ["1959", 2300, null, null],
        ["1960", 2900, null, null],
        ["1961", 3400, null, null],
        ["1962", 4200, null, null],
        ["1963", 7800, null, null],
        ["1964", 5400, null, null],
        ["1965", 6000, null, null],
        ["1966", 6600, null, null],
        ["1967", 7300, null, null],
        ["1968", 7900, null, null],
        ["1969", 8500, null, null],
        ["1970", 9115, null, null],
        ["1971", 8544, null, null],
        ["1972", 8431, null, null],
        ["1973", 7328, null, null],
        ["1974", 6058, null, null],
        ["1975", 6202, null, null],
        ["1976", 7505, null, null],
        ["1977", 6194, null, null],
        ["1978", 5889, null, null],
        ["1979", 8638, null, null],
        ["1980", 9038, null, null],
        ["1981", 8564, null, null],
        ["1982", 7525, null, null],
        ["1983", 6725, null, null],
        ["1984", 7306, null, null],
        ["1985", 7184, null, null],
        ["1986", 7373, 'point { size: 10; shape-type: circle; fill-color: #91DDCF; }', null],
        ["1987", 8758, null, null],
        ["1988", 10301, null, null],
        ["1989", 11222, null, null],
        ["1990", 10145, null, null],
        ["1991", 11109, null, null],
        ["1992", 11977, null, null],
        ["1993", 12289, null, null],
        ["1994", 12608, null, null],
        ["1995", 13532, null, null],
        ["1996", 12542, null, null],
        ["1997", 12853, null, null],
        ["1998", 11838, null, null],
        ["1999", 11824, null, null],
        ["2000", 18015, null, null],
        ["2001", 22223, null, null],
        ["2002", 16173, null, null],
        ["2003", 15782, null, null],
        ["2004", 16135, null, null],
        ["2005", 16495, null, null],
        ["2006", 17192, null, null],
        ["2007", 16264, null, null],
        ["2008", 16352, null, null],
        ["2009", 16399, null, null],
        ["2010", 17488, null, null],
        ["2011", 13656, null, null],
        ["2012", 17632, null, null],
        ["2013", 21974, null, null],
        ["2014", 21071, null, null],
        ["2015", 21561, null, null],
    ];
    const [yearRange, setYearRange] = useState([1950, 2015]);

    const handleSliderChange = (event, newValue) => {
        setYearRange(newValue);
    };

    const filteredData = allData.filter((row, index) => {
        if (index === 0) return true; // Keep header row
        const year = parseInt(row[0]);
        return year >= yearRange[0] && year <= yearRange[1];
    });

    const options = {
        title: "Annual Abortions in Greece from 1950 to 2015",
        titleTextStyle: {
            color: '#FFFFFF',
        },
        curveType: "function",
        hAxis: {
            textStyle: {
                color: '#FFFFFF',
            },
            titleTextStyle: {
                color: '#FFFFFF',
            },
        },
        vAxis: {
            textStyle: {
                color: '#FFFFFF',
            },
            titleTextStyle: {
                color: '#FFFFFF',
            },
            gridlines: {
                color: '#363c45',
            },
        },
        legend: {
            textStyle: {
                color: '#FFFFFF',
            },
            position: 'none', // Hide default legend
        },
        backgroundColor: {
            fill: 'transparent',
        },
        colors: ['#F9D689'],
        annotations: {
            style: 'line',
            textStyle: {
                color: '#000000',
                fontSize: 12,
            },
        },
        series: {
            0: {
                pointSize: 5,
            },
        },
    };

    return (
        <>
            <h1 className=" text-left pl-5 text-[30px] font-bold">Trends in Abortions in Greece (1950-2015): A Historical Analysis</h1>
            <h3 className=" text-left pl-5 text-[14px]"><b>Disclaimer:</b> We fully respect every individual's choice regarding abortion. This data is presented solely for informational purposes.</h3>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={filteredData}
                options={options}
            />
            <div className="pl-5 text-left flex justify-center items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#F9D689] rounded-full"></div>
                <Typography variant="subtitle2" component="p">
                    Abortions.
                </Typography>
                <div className="w-[20px] h-[20px] bg-[#91DDCF] rounded-full"></div>
                <Typography variant="subtitle2" component="p">
                    Abortion legalized in Greece (1986, Law 1609/1986)
                </Typography>
            </div>
            <br/>
            <div className="h-full">
                <h2>
                    Select Year Range
                </h2>
                <Slider
                    value={yearRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={1950}
                    max={2015}
                    marks={[
                        { value: 1950, label: '1950' },
                        { value: 1980, label: '1980' },
                        { value: 2000, label: '2000' },
                        { value: 2015, label: '2015' },
                    ]}
                    style={{ width: '80%', margin: '0 auto 20px auto', color: '#FFFFFF', height:"20%" }}
                />
            </div>
        </>
    );
}
