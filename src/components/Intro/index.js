import React from "react"
import { Chart } from "react-google-charts";
import './index.css'
import '../../resources/animations/slideFadeIn.css'
export default function Intro()
{
    const data = [
        ["Year", "Births", "Deaths"],
        ["1980", 148134, 87282],
        ["1981", 140953, 86261],
        ["1982", 137275, 86345],
        ["1983", 132608, 90586],
        ["1984", 125724, 88397],
        ["1985", 116481, 92886],
        ["1986", 112810, 91783],
        ["1987", 106392, 95656],
        ["1988", 107505, 92407],
        ["1989", 101657, 92720],
        ["1990", 102229, 94152],
        ["1991", 102620, 95498],
        ["1992", 104081, 98231],
        ["1993", 101799, 97419],
        ["1994", 103763, 97807],
        ["1995", 101495, 100158],
        ["1996", 100718, 100740],
        ["1997", 102038, 99738],
        ["1998", 100894, 102668],
        ["1999", 100643, 103304],
        ["2000", 103274, 105170],
        ["2001", 102282, 102559],
        ["2002", 103569, 103915],
        ["2003", 104420, 105529],
        ["2004", 105655, 104942],
        ["2005", 107545, 105091],
        ["2006", 112042, 105476],
        ["2007", 111926, 109895],
        ["2008", 118302, 107979],
        ["2009", 117933, 108316],
        ["2010", 114766, 109084],
        ["2011", 106428, 111099],
        ["2012", 100371, 116668],
        ["2013", 94134, 111794],
        ["2014", 92149, 113740],   
        ["2015", 91877, 121592],
        ["2016", 92898, 118788],
        ["2017", 88553, 124495],
        ["2018", 86440, 120291],
        ["2019", 83756, 124954],
        ["2020", 84764, 131025],
        ["2021", 85346, 143923],
        ["2022", 76095, 140801],
    ];
    const options = {
        title: "Annual Births and Deaths in Greece from 1980 to 2022",
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        curveType: "function",
        hAxis: {
            ticks: [
                {v: "1980", f: "1980"},
                {v: "1990", f: "1990"},
                {v: "2000", f: "2000"},
                {v: "2010", f: "2010"},
                {v: "2020", f: "2020"}
            ],
            textStyle: {
              color: '#FFFFFF', // X-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // X-axis title text color
            },
            
          },
          
          // Vertical axis
          vAxis: {
            textStyle: {
              color: '#FFFFFF', // Y-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // Y-axis title text color
            },
            gridlines: {
                color: '#363c45', // Make horizontal grid lines transparent
            },
            
          },
          
          // Chart legend
          legend: {
            textStyle: {
              color: '#FFFFFF', // Legend text color
            },
          },
        
          // Optionally set the background color of the chart
          backgroundColor: {
            fill: 'transparent' // Transparent or any color you prefer
          }
    };
    
    return(
    <>
        <h1 className='text-blue text-[40px] p-5 text-left font-bold'>
            Shrinking Greece: The Population Collapse 
        </h1>
        <div className="flex gap-5 p-5">

            <p className='italic text-justify w-[50%]'>
                Greece is predicted to become the first nation to suffer “population collapse” as sudden and unexpected deaths continue soaring across the nation while fertility rates have plunged to levels lower than experts previously thought possible...
                <br/>
                <a href="https://x.com/Censored4sure/status/1779568987963081031" target="_blank" rel="noreferrer" className='text-cyan-300 cursor-pointer' >
                    Luther ‘Ćyrus’ @Censored4sure
                </a>
            </p>         
            <div className='border-r border-white' />   
            <p className='italic text-justify'>
                Greece is one of dozens of countries experiencing population collapse due to low birth rates
                <br/>
                <a href="https://x.com/elonmusk/status/1779844281781322004" target="_blank" rel="noreferrer"  className='text-cyan-300 cursor-pointer' >
                    Elon Musk @elonmusk
                </a>
            </p>

        </div>
       
        {/* <p className='text-justify pl-5 pt-1 '>
            <b className='text-cyan-300' >Disclaimer:</b> It is important to note that all conclusions drawn in this assignment may not necessarily indicate direct causation.
        </p> */}
        <div className="flex justify-center items-center p-3">
            <p className={'text-justify p-3 text-animate' }>
                Greece is predicted to become the first nation to experience a <b>“population collapse”</b> as sudden and unexpected deaths continue to soar while fertility rates plunge to unprecedented lows. This demographic challenge poses severe socio-economic risks, including an aging population, a shrinking workforce, and strained public resources. This assignment delves into the underlying causes of Greece's declining birth rates, examines the consequences of this population collapse. 
                While situating Greece's crisis within the global context of declining fertility, we seek to provide a comprehensive analysis of these trends.
            </p>
            <Chart
                chartType="LineChart"
                width="800px"
                height="400px"
                data={data}
                options={options}
                className={'intro-chart chart-animate'}
            />
        </div>
    </>  
    )
    
}