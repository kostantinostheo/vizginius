import React from "react";
import AgeGroupsComponent from "./age-groups";
import LineChartComponent from "./median-age";


export default function AgeingPop()
{
    return(
        <>
            <h1 className='text-blue text-[30px] pl-5 text-left font-bold'>
                An Ageing Population...
            </h1>
            <div className="flex flex-row justify-center items-center">
                <p className='text-blue w-[40%] text-[15px] p-5 text-justify mb-12'>
                    Ever since grade school, we learned about Greece's shrinking population and the demographic
                    shifts it entails. Our teachers explained that an increasing median age signifies a population
                    growing older, which is primarily driven by lower birth rates.
                    <br/><br/>
                    From 1990 to 2023, it is observed that the mean age of Greece's population constantly increases.
                    <br/><br/>
                    The bar chart is attempting to visualize this more analytically, by showing younger population
                    decreasing, while older population increasing as years go by.

                </p>
                <AgeGroupsComponent/>
            </div>

            <div className="flex flex-col justify-center items-center p-1 gap-4">
                <LineChartComponent/>
            </div>
        </>
    )
}