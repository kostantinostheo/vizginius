import React from "react";
import { Chart } from "react-google-charts";
import rawData from '../../resources/datasets/life-expectancy-greece.json';

const normalize = (value, min, max) => 1 + (value - min) / (max - min);
const getCol = (data, i) => data.slice(1).map(r => r[i]);

const le = getCol(rawData, 1);
const hs = getCol(rawData, 2);

const normalizedData = rawData.map((row, i) => {
    if (i === 0) return row;
    return [
        row[0],
        { v: normalize(row[1], Math.min(...le), Math.max(...le)), f: `${row[1]} yrs` },
        { v: normalize(row[2], Math.min(...hs), Math.max(...hs)), f: `${row[2]} people` },
    ];
});

const options = {
    bar: { groupWidth: "80%" },
    legend: { position: "top", textStyle: { color: '#d1d5db', fontSize: 12 } },
    hAxis: { textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' }, gridlines: { color: 'transparent' } },
    vAxis: {
        textStyle: { color: '#9ca3af' },
        titleTextStyle: { color: '#9ca3af' },
        gridlines: { color: '#1f2937' },
        viewWindow: { min: 0.9, max: 2.1 },
    },
    backgroundColor: 'transparent',
    chartArea: { backgroundColor: 'transparent', width: '75%', height: '72%' },
    colors: ['#f97316'],
    series: {
        1: { type: 'line', color: '#facc15', pointSize: 6, pointShape: 'circle', lineWidth: 2 },
    },
};

const lifeStats = [
    { value: "81.1 yrs", label: "Life expectancy peak", sub: "2010 - 2019 avg", color: "text-orange-400" },
    { value: "2.6", label: "Avg household size", sub: "2020 - 2022 (was 4.0 in 1960s)", color: "text-yellow-400" },
];

const LifeExpand = () => (
    <>
        <h1 className="section-title text-left pl-5 text-[30px] font-bold mt-6">
            The Changing Dynamics of Family Life
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 px-5 mt-5 mb-4">
            <div className="chart-card w-full lg:w-3/5">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wider">Normalised comparison</p>
                        <p className="text-white font-semibold text-[14px]">Life Expectancy vs Household Size</p>
                    </div>
                    <span className="text-[11px] bg-white/5 border border-white/10 text-gray-400 px-2 py-1 rounded-md">
                        Hover bars for actual values
                    </span>
                </div>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="320px"
                    data={normalizedData}
                    options={options}
                />
                <p className="text-[11px] text-gray-600 mt-1 text-center">
                    Values normalised to [1 - 2] so both series can be displayed on one axis
                </p>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                    {lifeStats.map(s => (
                        <div key={s.label} className="stat-card">
                            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                            <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                            <p className="text-[10px] text-gray-600 mt-0.5">{s.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="info-panel text-[13px] text-gray-300 leading-relaxed">
                    average household size fell from <span className="text-yellow-400 font-semibold">4.0 to 2.6 people</span>.
                    Longer lives reduce the perceived need for large families, while better healthcare
                    means fewer children are needed to ensure family continuity.
                </div>

                <blockquote className="quote-card">
                    <p className="italic text-gray-300 text-[13px] leading-relaxed">
                        &quot;My grandmother, born in the 1930s, often told me stories about her six siblings.
                        With <span className="text-orange-300 font-semibold">lower life expectancy</span>, having more children
                        was a way to <span className="text-orange-300 font-semibold">ensure that some would survive to adulthood</span>.
                        Today, people live longer, and families tend to have fewer children.&quot;
                    </p>
                </blockquote>
            </div>
        </div>
    </>
);

export default LifeExpand;
