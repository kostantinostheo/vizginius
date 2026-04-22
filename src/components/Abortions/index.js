import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Slider from "@mui/material/Slider";

const allData = [
    ["Year", "Abortions", { role: 'style' }, { role: 'annotation' }],
    ["1950", 200, null, null], ["1951", 500, null, null], ["1952", 700, null, null],
    ["1953", 900, null, null], ["1954", 1100, null, null], ["1955", 1400, null, null],
    ["1956", 1600, null, null], ["1957", 1800, null, null], ["1958", 2100, null, null],
    ["1959", 2300, null, null], ["1960", 2900, null, null], ["1961", 3400, null, null],
    ["1962", 4200, null, null], ["1963", 7800, null, null], ["1964", 5400, null, null],
    ["1965", 6000, null, null], ["1966", 6600, null, null], ["1967", 7300, null, null],
    ["1968", 7900, null, null], ["1969", 8500, null, null], ["1970", 9115, null, null],
    ["1971", 8544, null, null], ["1972", 8431, null, null], ["1973", 7328, null, null],
    ["1974", 6058, null, null], ["1975", 6202, null, null], ["1976", 7505, null, null],
    ["1977", 6194, null, null], ["1978", 5889, null, null], ["1979", 8638, null, null],
    ["1980", 9038, null, null], ["1981", 8564, null, null], ["1982", 7525, null, null],
    ["1983", 6725, null, null], ["1984", 7306, null, null], ["1985", 7184, null, null],
    ["1986", 7373, 'point { size: 10; shape-type: circle; fill-color: #91DDCF; }', null],
    ["1987", 8758, null, null], ["1988", 10301, null, null], ["1989", 11222, null, null],
    ["1990", 10145, null, null], ["1991", 11109, null, null], ["1992", 11977, null, null],
    ["1993", 12289, null, null], ["1994", 12608, null, null], ["1995", 13532, null, null],
    ["1996", 12542, null, null], ["1997", 12853, null, null], ["1998", 11838, null, null],
    ["1999", 11824, null, null], ["2000", 18015, null, null], ["2001", 22223, null, null],
    ["2002", 16173, null, null], ["2003", 15782, null, null], ["2004", 16135, null, null],
    ["2005", 16495, null, null], ["2006", 17192, null, null], ["2007", 16264, null, null],
    ["2008", 16352, null, null], ["2009", 16399, null, null], ["2010", 17488, null, null],
    ["2011", 13656, null, null], ["2012", 17632, null, null], ["2013", 21974, null, null],
    ["2014", 21071, null, null], ["2015", 21561, null, null],
];

const chartOptions = {
    title: "Annual Abortions in Greece (1950–2015)",
    titleTextStyle: { color: '#FFFFFF', fontSize: 13 },
    curveType: "function",
    hAxis: { textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' }, gridlines: { color: 'transparent' } },
    vAxis: { textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' }, gridlines: { color: '#1f2937' } },
    legend: { position: 'none' },
    backgroundColor: { fill: 'transparent' },
    colors: ['#fde68a'],
    series: { 0: { pointSize: 4 } },
};

const sliderMarks = [
    { value: 1950, label: '1950' },
    { value: 1970, label: '1970' },
    { value: 1986, label: '1986 ⚖' },
    { value: 2000, label: '2000' },
    { value: 2015, label: '2015' },
];

const insights = [
    { color: "bg-yellow-400", label: "Abortions trend (1950–2015)" },
    { color: "bg-teal-400", label: "Legalization point (Law 1609/1986)" },
];

export default function AbortionsInGreece() {
    const [yearRange, setYearRange] = useState([1950, 2015]);

    const filteredData = allData.filter((row, i) => {
        if (i === 0) return true;
        const y = parseInt(row[0]);
        return y >= yearRange[0] && y <= yearRange[1];
    });

    return (
        <div className="pb-6 pt-2">
            <h1 className="section-title text-left pl-5 text-[30px] font-bold mt-6">
                Trends in Abortions in Greece (1950–2015)
            </h1>

            {/* Disclaimer */}
            <div className="disclaimer-notice mx-5 mt-3 mb-5">
                <span className="font-semibold">⚠ Disclaimer:</span> We fully respect every individual's choice regarding abortion. This data is presented solely for informational and academic purposes.
            </div>

            {/* Two-column: context + chart */}
            <div className="flex flex-col lg:flex-row gap-6 px-5">
                {/* Left: context */}
                <div className="w-full lg:w-2/5 flex flex-col gap-5">
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        Abortion data in Greece reflects major legal and social turning points. Before
                        <span className="text-yellow-300 font-semibold"> Law 1609/1986</span>, abortions were recorded at lower levels, rising steadily through the post-war decades.
                        <br /><br />
                        After legalisation in 1986, recorded numbers climbed sharply — peaking at over
                        <span className="text-yellow-300 font-semibold"> 22,000 in 2001</span> — likely reflecting both a true increase and improved official reporting.
                        <br /><br />
                        This trend, alongside declining birth rates and rising maternal age, contributes to Greece&apos;s ongoing demographic challenge.
                    </p>

                    {/* Key stats */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="stat-card">
                            <p className="text-2xl font-bold text-yellow-400">22,223</p>
                            <p className="text-[11px] text-gray-400 mt-1">Peak recorded abortions</p>
                            <p className="text-[10px] text-gray-600">2001</p>
                        </div>
                        <div className="stat-card">
                            <p className="text-2xl font-bold text-teal-400">1986</p>
                            <p className="text-[11px] text-gray-400 mt-1">Year of legalisation</p>
                            <p className="text-[10px] text-gray-600">Law 1609/1986</p>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-col gap-2 mt-2">
                        {insights.map(i => (
                            <div key={i.label} className="flex items-center gap-2 text-[13px] text-gray-300">
                                <span className={`w-3 h-3 rounded-full ${i.color} shrink-0`} />
                                {i.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: chart */}
                <div className="chart-card w-full lg:w-3/5">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="340px"
                        data={filteredData}
                        options={chartOptions}
                    />
                </div>
            </div>

            {/* Year range slider — FIXED: no height, proper pb for mark labels */}
            <div className="px-8 mt-6 pb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
                    Filter Year Range
                </p>
                <Slider
                    value={yearRange}
                    onChange={(_, newValue) => setYearRange(newValue)}
                    valueLabelDisplay="auto"
                    min={1950}
                    max={2015}
                    marks={sliderMarks}
                    sx={{
                        color: '#3b82f6',
                        '& .MuiSlider-markLabel': { color: '#6b7280', fontSize: '11px' },
                        '& .MuiSlider-valueLabel': { backgroundColor: '#1d4ed8' },
                        '& .MuiSlider-mark': { backgroundColor: '#374151' },
                    }}
                    style={{ width: '92%', display: 'block', margin: '0 auto' }}
                />
            </div>
        </div>
    );
}
