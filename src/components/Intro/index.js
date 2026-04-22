import React from "react"
import { Chart } from "react-google-charts";
import './index.css'
import '../../resources/animations/slideFadeIn.css'

export default function Intro() {
    const data = [
        ["Year", "Births", "Deaths"],
        ["1980", 148134, 87282], ["1981", 140953, 86261], ["1982", 137275, 86345],
        ["1983", 132608, 90586], ["1984", 125724, 88397], ["1985", 116481, 92886],
        ["1986", 112810, 91783], ["1987", 106392, 95656], ["1988", 107505, 92407],
        ["1989", 101657, 92720], ["1990", 102229, 94152], ["1991", 102620, 95498],
        ["1992", 104081, 98231], ["1993", 101799, 97419], ["1994", 103763, 97807],
        ["1995", 101495, 100158], ["1996", 100718, 100740], ["1997", 102038, 99738],
        ["1998", 100894, 102668], ["1999", 100643, 103304], ["2000", 103274, 105170],
        ["2001", 102282, 102559], ["2002", 103569, 103915], ["2003", 104420, 105529],
        ["2004", 105655, 104942], ["2005", 107545, 105091], ["2006", 112042, 105476],
        ["2007", 111926, 109895], ["2008", 118302, 107979], ["2009", 117933, 108316],
        ["2010", 114766, 109084], ["2011", 106428, 111099], ["2012", 100371, 116668],
        ["2013", 94134, 111794], ["2014", 92149, 113740], ["2015", 91877, 121592],
        ["2016", 92898, 118788], ["2017", 88553, 124495], ["2018", 86440, 120291],
        ["2019", 83756, 124954], ["2020", 84764, 131025], ["2021", 85346, 143923],
        ["2022", 76095, 140801],
    ];

    const options = {
        title: "Annual Births and Deaths in Greece (1980–2022)",
        titleTextStyle: { color: '#FFFFFF', fontSize: 13 },
        curveType: "function",
        hAxis: {
            ticks: [
                {v: "1980", f: "1980"}, {v: "1990", f: "1990"},
                {v: "2000", f: "2000"}, {v: "2010", f: "2010"}, {v: "2020", f: "2020"}
            ],
            textStyle: { color: '#9ca3af' },
            titleTextStyle: { color: '#9ca3af' },
            gridlines: { color: 'transparent' },
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

    return (
        <section className="section-block px-4 md:px-8 pt-8">
            {/* Hero title */}
            <h1 className="text-[36px] md:text-[48px] font-bold text-left mb-2 leading-tight"
                style={{ background: 'linear-gradient(90deg, #ffffff, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Shrinking Greece:<br className="hidden md:block" /> The Population Collapse
            </h1>

            {/* Quote cards */}
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

            {/* Body + chart */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-gray-300 text-[15px] leading-relaxed text-justify text-animate w-full md:w-2/5">
                    Greece is predicted to become the first nation to experience a <span className="text-blue-300 font-semibold">&quot;population collapse&quot;</span> as sudden and unexpected deaths continue to soar while fertility rates plunge to unprecedented lows. This demographic challenge poses severe socio-economic risks, including an aging population, a shrinking workforce, and strained public resources.
                    <br /><br />
                    This study delves into the underlying causes of Greece&apos;s declining birth rates, examines the consequences of this population collapse, and situates the crisis within the global context of declining fertility.
                </p>
                <div className="chart-card w-full md:w-3/5">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="380px"
                        data={data}
                        options={options}
                        className="chart-animate"
                    />
                </div>
            </div>
        </section>
    );
}
