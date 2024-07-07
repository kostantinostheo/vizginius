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
                Shrinking Greece: The Population Collapse
            </h1>
            <p className='text-blue text-[15px] p-5 text-justify '>
                From 2000 to 2021, the average age of mothers at birth in Greece rose steadily from 29.6 to 32.0 years. This increase aligns with societal trends such as higher education and career prioritization among women. Meanwhile, the fertility rate declined slightly from 1.300 in 2000 to 1.279 in 2021, reflecting economic and cultural factors that influence family planning and childbearing decisions.
            </p>
            <div className="flex flex-col justify-center items-center p-1 gap-4">
                <AgeGroupsComponent/>
                <LineChartComponent/>
            </div>
        </>
    )
}