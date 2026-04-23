import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { FaTriangleExclamation } from "react-icons/fa6";
import Slider from "@mui/material/Slider";
import allData from '../../resources/datasets/abortions-greece.json';

const chartOptions = {
    title: "Annual Abortions in Greece (1950 - 2015)",
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
    { value: 1986, label: '1986' },
    { value: 2000, label: '2000' },
    { value: 2015, label: '2015' },
];

const insights = [
    { color: "bg-yellow-400", label: "Abortions trend (1950 - 2015)" },
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
                Trends in Abortions in Greece (1950 - 2015)
            </h1>

            <div className="disclaimer-notice mx-5 mt-3 mb-5">
                <span className="font-semibold inline-flex items-center gap-1.5">
                    <FaTriangleExclamation size={13} /> Disclaimer:
                </span> We fully respect every individual&apos;s choice regarding abortion. This data is presented solely for informational and academic purposes.
            </div>

            <div className="flex flex-col lg:flex-row gap-6 px-5">
                <div className="w-full lg:w-2/5 flex flex-col gap-5">
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        Abortion data in Greece reflects major legal and social turning points. Before
                        <span className="text-yellow-300 font-semibold"> Law 1609/1986</span>, abortions were recorded at lower levels, rising steadily through the post-war decades.
                        <br /><br />
                        After legalisation in 1986, recorded numbers climbed sharply, peaking at over
                        <span className="text-yellow-300 font-semibold"> 22,000 in 2001</span> (likely reflecting both a true increase and improved official reporting).
                        <br /><br />
                        This trend, alongside declining birth rates and rising maternal age, contributes to Greece&apos;s ongoing demographic challenge.
                    </p>

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

                    <div className="flex flex-col gap-2 mt-2">
                        {insights.map(i => (
                            <div key={i.label} className="flex items-center gap-2 text-[13px] text-gray-300">
                                <span className={`w-3 h-3 rounded-full ${i.color} shrink-0`} />
                                {i.label}
                            </div>
                        ))}
                    </div>
                </div>

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
