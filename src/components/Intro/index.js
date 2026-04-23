import React from "react"
import { Chart } from "react-google-charts";
import { FaSkullCrossbones, FaArrowTrendDown, FaPersonCane } from "react-icons/fa6";
import birthsDeathsData from '../../resources/datasets/births-deaths-greece.json';
import './index.css'
import '../../resources/animations/slideFadeIn.css'

const options = {
    title: "Annual Births and Deaths in Greece (1980 - 2024)",
    titleTextStyle: { color: '#FFFFFF', fontSize: 13 },
    curveType: "function",
    hAxis: {
        ticks: [
            {v: "1980", f: "1980"}, {v: "1990", f: "1990"},
            {v: "2000", f: "2000"}, {v: "2010", f: "2010"}, {v: "2020", f: "2020"}
        ],
        textStyle: { color: '#9ca3af' },
        titleTextStyle: { color: '#9ca3af' },
        gridlines: { color: '#1f2937' },
    },
    vAxis: {
        textStyle: { color: '#9ca3af' },
        titleTextStyle: { color: '#9ca3af' },
        gridlines: { color: '#1f2937' },
    },
    legend: { textStyle: { color: '#d1d5db' } },
    backgroundColor: { fill: 'transparent' },
    colors: ['#60a5fa', '#f87171'],
};

export default function Intro() {
    return (
        <section className="section-block px-4 md:px-8 pt-8">
            <h1
                className="text-[36px] md:text-[48px] font-bold text-left mb-2 leading-tight"
                style={{ background: 'linear-gradient(90deg, #ffffff, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Shrinking Greece:<br className="hidden md:block" /> The Population Collapse
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6">
                <blockquote className="quote-card flex-1">
                    <p className="italic text-gray-300 text-sm leading-relaxed">
                        Greece is predicted to become the first nation to suffer &quot;population collapse&quot; as sudden and unexpected deaths continue soaring across the nation while fertility rates have plunged to levels lower than experts previously thought possible...
                    </p>
                    <cite className="block mt-2 text-cyan-400 text-xs not-italic">
                        <a href="https://x.com/Censored4sure/status/1779568987963081031" target="_blank" rel="noreferrer">
                            Luther Cyrus @Censored4sure
                        </a>
                    </cite>
                </blockquote>

                <blockquote className="quote-card flex-1">
                    <p className="italic text-gray-300 text-sm leading-relaxed">
                        Greece is one of dozens of countries experiencing population collapse due to low birth rates.
                    </p>
                    <cite className="block mt-2 text-cyan-400 text-xs not-italic">
                        <a href="https://x.com/elonmusk/status/1779844281781322004" target="_blank" rel="noreferrer">
                            Elon Musk @elonmusk
                        </a>
                    </cite>
                </blockquote>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-2/5 flex flex-col gap-4 text-animate">
                    <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                        <div className="flex items-start gap-3">
                            <FaSkullCrossbones className="text-red-400 mt-1 shrink-0" size={20} />
                            <div>
                                <p className="text-white font-bold text-[15px] leading-snug">
                                    Greece may become the first nation to experience a{' '}
                                    <span className="text-red-400">"population collapse"</span>
                                </p>
                                <p className="text-gray-400 text-[13px] mt-2 leading-relaxed">
                                    Sudden deaths continue to soar while fertility rates plunge to levels lower than experts previously thought possible.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 bg-white/3 border border-white/7 rounded-lg px-3 py-2">
                            <FaPersonCane className="text-orange-400 shrink-0" size={15} />
                            <p className="text-gray-300 text-[13px]">Rapidly ageing population</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white/3 border border-white/7 rounded-lg px-3 py-2">
                            <FaArrowTrendDown className="text-blue-400 shrink-0" size={15} />
                            <p className="text-gray-300 text-[13px]">Shrinking workforce and tax base</p>
                        </div>
                    </div>

                    <p className="text-gray-500 text-[12px] leading-relaxed border-t border-white/6 pt-3">
                        This study examines the underlying causes of Greece&apos;s declining birth rates, the socio-economic consequences, and the crisis in its global context.
                    </p>
                </div>

                <div className="chart-card w-full md:w-3/5">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="380px"
                        data={birthsDeathsData}
                        options={options}
                        className="chart-animate"
                    />
                </div>
            </div>
        </section>
    );
}
