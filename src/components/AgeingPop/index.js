import React from "react";
import AgeGroupsComponent from "./age-groups";
import LineChartComponent from "./median-age";

const stats = [
    { value: "46.5", label: "Median age in 2023", sub: "One of the highest in the EU", color: "text-orange-400" },
    { value: "+10.5", label: "Years older since 1990", sub: "Was 36.0 yrs in 1990", color: "text-red-400" },
];

export default function AgeingPop() {
    return (
        <>
            <h1 className="section-title text-[30px] pl-5 text-left font-bold mt-6">
                An Ageing Population...
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 px-5 mt-5">
                <div className="w-full lg:w-2/5 flex flex-col gap-5">
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        Greece&apos;s population is ageing at one of the fastest rates in Europe.
                        From 1990 to 2023, the median age rose from
                        <span className="text-orange-400 font-semibold"> 36.0</span> to
                        <span className="text-orange-400 font-semibold"> 46.5 years</span>, driven by persistently
                        low birth rates and rising life expectancy.
                        <br /><br />
                        The bar chart shows younger age groups (0–39) shrinking over time while
                        the 60+ cohort steadily expands. Press play to animate the transition.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {stats.map(s => (
                            <div key={s.label} className="stat-card">
                                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                                <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                                <p className="text-[10px] text-gray-600 mt-0.5">{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="chart-card w-full lg:w-3/5">
                    <AgeGroupsComponent />
                </div>
            </div>

            <div className="chart-card mx-5 mt-5 mb-2">
                <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-0.5">Trend</p>
                <p className="text-white font-semibold text-[14px] mb-3">Greece Median Age of Population (1990–2023)</p>
                <LineChartComponent />
            </div>
        </>
    );
}
