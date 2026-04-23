import React from "react"
import { FaRulerCombined, FaLightbulb } from "react-icons/fa6";
import ChartHouse from "./ChartHouse"

export default function Housing() {
    return (
        <div className="pb-5 pt-2">
            <h1 className="section-title text-left pl-5 text-[28px] font-bold mt-6">
                A Marathon Run to Homeownership
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5">
                <div className="info-panel">
                    <h3 className="text-blue-400 font-semibold text-[15px] mb-2 flex items-center gap-2">
                        <FaRulerCombined size={15} /> The Theory
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        Based on <a className="text-blue-400 hover:underline" href="http://demographia.com/db-intlhouse.htm" target="_blank" rel="noreferrer">demographia.com</a>,
                        the average house size in Greece is approximately <span className="text-white font-semibold">80 m²</span>.
                        Tracking the price of an 80 m² home alongside the average annual wage reveals
                        the widening gap between what Greeks earn and what housing costs.
                    </p>
                </div>

                <div className="info-panel">
                    <h3 className="text-amber-400 font-semibold text-[15px] mb-2 flex items-center gap-2">
                        <FaLightbulb size={15} /> The Conclusion
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed text-justify">
                        High housing costs relative to incomes discourage couples from starting or expanding
                        their families. With house prices rising <span className="text-amber-400 font-semibold">424%</span> since 2000 vs.
                        wages rising only <span className="text-amber-400 font-semibold">127%</span>, financial insecurity becomes a
                        direct brake on birth rates.
                    </p>
                </div>
            </div>

            <ChartHouse />
        </div>
    );
}
