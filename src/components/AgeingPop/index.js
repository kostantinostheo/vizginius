import React from "react";
import {Chart} from "react-google-charts";
import MedianAge from "./median-age";
import AgeGroups from "./age-groups";
import AgeGroupsComponent from "./age-groups";
import LineChartComponent from "./median-age";


export default function AgeingPop()
{
    return(
        <>
            <h1 className='text-blue text-[40px] pl-5 text-left font-bold'>
                An ageing population...
            </h1>
            <div className="flex flex-row justify-center">
                <p className='text-blue w-[40%] text-[15px] p-5 text-justify '>
                    From 1990 to 2023, the mean age of Greece's population constantly increases. An increasing median
                    age in a population indicates a demographic shift toward an older population,
                    driven by lower birth rates, higher life expectancy, and potentially altered migration patterns.
                    <br/>
                    The bar chart is attempting to visualize this more analytically, by showing younger population
                    decreasing, while older population increasing.

                </p>
                <AgeGroupsComponent/>
            </div>

            <div className="flex flex-col justify-center items-center p-1 gap-4">
                <LineChartComponent/>
            </div>
        </>
    )
}