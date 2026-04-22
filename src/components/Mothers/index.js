import React from "react"
import { Chart } from "react-google-charts";
import '../../resources/animations/slideFadeIn.css'

const motherAge = [
    ["Year", "Average age at first birth"],
    ["2000", 29.6], ["2001", 29.3], ["2002", 29.4], ["2003", 29.5], ["2004", 29.7],
    ["2005", 29.9], ["2006", 29.9], ["2007", 30.1], ["2008", 30.2], ["2009", 30.3],
    ["2010", 30.4], ["2011", 30.5], ["2012", 30.7], ["2013", 30.9], ["2014", 31.0],
    ["2015", 31.3], ["2016", 31.3], ["2017", 31.5], ["2018", 31.5], ["2019", 31.7],
    ["2020", 31.6], ["2021", 32.0],
];

const fertilityRateData = [
    ["Year", "Fertility Rate"],
    ["2000", 1.300], ["2001", 1.297], ["2002", 1.294], ["2003", 1.291], ["2004", 1.316],
    ["2005", 1.341], ["2006", 1.366], ["2007", 1.391], ["2008", 1.416], ["2009", 1.401],
    ["2010", 1.387], ["2011", 1.372], ["2012", 1.358], ["2013", 1.343], ["2014", 1.335],
    ["2015", 1.327], ["2016", 1.318], ["2017", 1.310], ["2018", 1.302], ["2019", 1.294],
    ["2020", 1.286], ["2021", 1.279],
];

const mothersOver40 = [
    ["Year", "Mothers over 40"],
    ['1990', 1336], ['1991', 1439], ['1992', 1518], ['1993', 1592], ['1994', 1691],
    ['1995', 1689], ['1996', 1681], ['1997', 1892], ['1998', 1954], ['1999', 1999],
    ['2000', 2812], ['2001', 2425], ['2002', 2608], ['2003', 2763], ['2004', 3023],
    ['2005', 3122], ['2006', 3568], ['2007', 3928], ['2008', 4450], ['2009', 5057],
    ['2010', 5309], ['2011', 4958], ['2012', 5034], ['2013', 5035], ['2014', 4949],
    ['2015', 5541], ['2016', 6117], ['2017', 6328], ['2018', 6647], ['2019', 7018],
    ['2020', 7111], ['2021', 8312], ['2022', 7584],
];

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
    title: "Average Age of Mother at First Birth (2000–2021)",
    series: { 0: { color: '#facc15', pointSize: 4 } },
    legend: { position: 'none' },
};

const optionFertility = {
    ...baseChartStyle,
    title: "Fertility Rate — Children per Mother (2000–2021)",
    series: { 0: { color: '#f97316', pointSize: 4 } },
    legend: { position: 'none' },
    vAxis: { ...baseChartStyle.vAxis, viewWindow: { min: 1.2, max: 1.5 } },
};

const optionOver40 = {
    ...baseChartStyle,
    title: "Live Births by Mothers Over 40 (1990–2022)",
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

            {/* Intro row: text + key chart */}
            <div className="flex flex-col lg:flex-row gap-6 px-5 mt-6">
                {/* Left: context + stat cards */}
                <div className="w-full lg:w-2/5 flex flex-col gap-5">
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        From 2000 to 2021, the average age of mothers at first birth in Greece rose steadily from
                        <span className="text-yellow-400 font-semibold"> 29.6</span> to <span className="text-yellow-400 font-semibold">32.0 years</span>,
                        while the fertility rate declined from <span className="text-orange-400 font-semibold">1.300</span> to <span className="text-orange-400 font-semibold">1.279</span>.
                        Women are choosing to have children later — driven by education, careers, and economic pressures.
                        <br /><br />
                        This delayed childbearing also correlates with a sharp rise in births by mothers over 40,
                        reflecting both a cultural shift and advances in reproductive medicine.
                    </p>

                    {/* Stat cards */}
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

                {/* Right: average age chart */}
                <div className="chart-card w-full lg:w-3/5">
                    <Chart chartType="LineChart" width="100%" height="300px"
                        data={motherAge} options={optionsMother} />
                </div>
            </div>

            {/* Bottom two charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-6">
                <div className="chart-card">
                    <Chart chartType="LineChart" width="100%" height="280px"
                        data={fertilityRateData} options={optionFertility} />
                    <p className="text-[12px] text-gray-500 text-center mt-1">Fertility rate has declined consistently since 2008</p>
                </div>
                <div className="chart-card">
                    <Chart chartType="LineChart" width="100%" height="280px"
                        data={mothersOver40} options={optionOver40} />
                    <p className="text-[12px] text-gray-500 text-center mt-1">Births by mothers 40+ have more than 6× since 1990</p>
                </div>
            </div>
        </div>
    );
}
