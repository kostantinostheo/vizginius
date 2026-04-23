import React from "react"
import { Chart } from "react-google-charts";
import motherAgeData from '../../resources/datasets/mother-age-greece.json';
import fertilityRateData from '../../resources/datasets/fertility-rate-greece.json';
import mothersOver40Data from '../../resources/datasets/mothers-over-40-greece.json';
import '../../resources/animations/slideFadeIn.css'

const baseChartStyle = {
    titleTextStyle: { color: '#FFFFFF', fontSize: 13 },
    curveType: "function",
    hAxis: { textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' }, gridlines: { color: 'transparent' } },
    vAxis: { textStyle: { color: '#9ca3af' }, titleTextStyle: { color: '#9ca3af' }, gridlines: { color: '#1f2937' } },
    legend: { textStyle: { color: '#d1d5db' } },
    backgroundColor: { fill: 'transparent' },
};

const optionsMother = {
    ...baseChartStyle,
    title: "Average Age of Mother at First Birth (2000 - 2021)",
    series: { 0: { color: '#facc15', pointSize: 4 } },
    legend: { position: 'none' },
};

const optionFertility = {
    ...baseChartStyle,
    title: "Fertility Rate: Children per Mother (2000 - 2021)",
    series: { 0: { color: '#f97316', pointSize: 4 } },
    legend: { position: 'none' },
    vAxis: { ...baseChartStyle.vAxis, viewWindow: { min: 1.2, max: 1.5 } },
};

const optionOver40 = {
    ...baseChartStyle,
    title: "Live Births by Mothers Over 40 (1990 - 2022)",
    series: { 0: { color: '#a78bfa', pointSize: 4 } },
    legend: { position: 'none' },
};

const stats = [
    { value: "32.0", label: "Avg age at first birth", sub: "2021", color: "text-yellow-400" },
    { value: "1.28", label: "Fertility rate", sub: "2021", color: "text-orange-400" },
    { value: "8,312", label: "Births by mothers 40+", sub: "2021 peak", color: "text-violet-400" },
];

export default function Mothers() {
    return (
        <div className="pb-10 pt-2">
            <h1 className="section-title text-[30px] pl-5 mt-6 text-left font-bold">Motherhood</h1>

            <div className="flex flex-col lg:flex-row gap-6 px-5 mt-6">
                <div className="w-full lg:w-2/5 flex flex-col gap-5">
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        From 2000 to 2021, the average age of mothers at first birth in Greece rose steadily from
                        <span className="text-yellow-400 font-semibold"> 29.6</span> to <span className="text-yellow-400 font-semibold">32.0 years</span>,
                        while the fertility rate declined from <span className="text-orange-400 font-semibold">1.300</span> to <span className="text-orange-400 font-semibold">1.279</span>.
                        Women are choosing to have children later, driven by education, careers, and economic pressures.
                        <br /><br />
                        This delayed childbearing also correlates with a sharp rise in births by mothers over 40,
                        reflecting both a cultural shift and advances in reproductive medicine.
                    </p>

                    <div className="grid grid-cols-3 gap-3">
                        {stats.map(s => (
                            <div key={s.label} className="stat-card">
                                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                                <p className="text-[11px] text-gray-400 mt-1 leading-tight">{s.label}</p>
                                <p className="text-[10px] text-gray-600 mt-0.5">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="chart-card w-full lg:w-3/5">
                    <Chart chartType="LineChart" width="100%" height="300px"
                        data={motherAgeData} options={optionsMother} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-6">
                <div className="chart-card">
                    <Chart chartType="LineChart" width="100%" height="280px"
                        data={fertilityRateData} options={optionFertility} />
                    <p className="text-[12px] text-gray-500 text-center mt-1">Fertility rate has declined consistently since 2008</p>
                </div>
                <div className="chart-card">
                    <Chart chartType="LineChart" width="100%" height="280px"
                        data={mothersOver40Data} options={optionOver40} />
                    <p className="text-[12px] text-gray-500 text-center mt-1">Births by mothers 40+ have more than 6× since 1990</p>
                </div>
            </div>
        </div>
    );
}
