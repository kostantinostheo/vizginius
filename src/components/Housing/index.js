import React from "react"

import '../../resources/animations/slideFadeIn.css'
import ChartHouse from "./ChartHouse"

export default function Housing()
{
    return(
    <div className="pb-5">
        <h1 className=" text-left pl-5 text-[30px] font-bold"> A Marathon Run to Homeownership </h1>
        
        <h2 className=" text-left pl-5 text-[20px] text-blue-400"> The Theory </h2>
       
        <p className=" pl-5 text-[15px] mr-32 text-justify"> 
            Based on the <a className=" text-blue-400" href="http://demographia.com/db-intlhouse.htm" target="noreferrer" >demographia.com</a>, 
            the average size of a house in Greece is approximately 80 square meters. Using this data, we can track the average price of an 80-square-meter house in Greece over the years. By incorporating the average wage in Greece as well, we can gain insight into the challenges that average individuals face in affording a new house.
            </p>
        <h2 className="pl-5 text-[20px] text-blue-400 pt-3 text-left"> The Conclusion </h2>
        <p className=" text-left pl-5 text-[15px] mr-32"> 
           The high cost of housing relative to average incomes in Greece can potentially impact birth rates by discouraging couples from starting or expanding their families due to financial concerns. Higher housing costs may lead to delayed family planning decisions as individuals prioritize financial stability over starting a family.
        </p>
        <ChartHouse/>
    </div>
    )
    
}