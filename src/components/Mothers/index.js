import React from "react"
import { Chart } from "react-google-charts";
import './index.css'
import '../../resources/animations/slideFadeIn.css'


export default function Mothers(){
    
    const motherAge = [
        ["Year", "Average age of the mother at birth"],
        ["2000", 29.6],
        ["2001", 29.3],
        ["2002", 29.4],
        ["2003", 29.5],
        ["2004", 29.7],
        ["2005", 29.9],
        ["2006", 29.9],
        ["2007", 30.1],
        ["2008", 30.2],
        ["2009", 30.3],
        ["2010", 30.4],
        ["2011", 30.5],
        ["2012", 30.7],
        ["2013", 30.9],
        ["2014", 31.0],
        ["2015", 31.3],
        ["2016", 31.3],
        ["2017", 31.5],
        ["2018", 31.5],
        ["2019", 31.7],
        ["2020", 31.6],
        ["2021", 32.0],
    ];    
    const fertilityRateData = [
        ["Year", "Fertility Rate (Children per mother)"],
        ["2000", 1.300],
        ["2001", 1.297],
        ["2002", 1.294],
        ["2003", 1.291],
        ["2004", 1.316],
        ["2005", 1.341],
        ["2006", 1.366],
        ["2007", 1.391],
        ["2008", 1.416],
        ["2009", 1.401],
        ["2010", 1.387],
        ["2011", 1.372],
        ["2012", 1.358],
        ["2013", 1.343],
        ["2014", 1.335],
        ["2015", 1.327],
        ["2016", 1.318],
        ["2017", 1.310],
        ["2018", 1.302],
        ["2019", 1.294],
        ["2020", 1.286],
        ["2021", 1.279]
    ];

    const optionsMother = {
        title: "Average age of the mother at birth",
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        curveType: "function",
        hAxis: {
            textStyle: {
              color: '#FFFFFF', // X-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // X-axis title text color
            },
            gridlines: {
                color: '#435578', // Make horizontal grid lines transparent
            },
        },

        vAxis: {
            textStyle: {
              color: '#FFFFFF', // Y-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // Y-axis title text color
            },
            gridlines: {
                color: '#435578', // Make horizontal grid lines transparent
            },
            
        },

        legend: {
            textStyle: {
                color: '#FFFFFF', // Legend text color
            },
        },
          series: {
            0: { color: '#fcba03' , type: "line", pointSize: 5 } 
        },   
        backgroundColor: {
        fill: 'transparent' // Transparent or any color you prefer
        }
    };
    const optionFertility = {
        title: "Greece - Historical Fertility Rate Data (Children per mother)",
        titleTextStyle: {
            color: '#FFFFFF', // Title text color
        },
        curveType: "function",
        hAxis: {
            textStyle: {
              color: '#FFFFFF', // X-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // X-axis title text color
            },
            gridlines: {
                color: '#435578', // Make horizontal grid lines transparent
            },
        },

        vAxis: {
            textStyle: {
              color: '#FFFFFF', // Y-axis text color
            },
            titleTextStyle: {
              color: '#FFFFFF', // Y-axis title text color
            },
            gridlines: {
                color: '#435578', // Make horizontal grid lines transparent
            },
            
        },
          // Chart legend
          legend: {
            textStyle: {
              color: '#FFFFFF', // Legend text color
            },
          },
          series: {
            0: { color: '#fc5603' , type: "line", pointSize: 5 }
            },  
          // Optionally set the background color of the chart
          backgroundColor: {
            fill: 'transparent' // Transparent or any color you prefer
          }
    };

    return(
    <>
        <h1 className='text-blue text-[40px] pl-5 text-left font-bold'>
            Shrinking Greece: The Population Collapse 
        </h1>
        <p className='text-blue text-[15px] p-5 text-justify '>
            From 2000 to 2021, the average age of mothers at birth in Greece rose steadily from 29.6 to 32.0 years. This increase aligns with societal trends such as higher education and career prioritization among women. Meanwhile, the fertility rate declined slightly from 1.300 in 2000 to 1.279 in 2021, reflecting economic and cultural factors that influence family planning and childbearing decisions.
        </p>
        <div className="flex justify-center items-center p-1">
             <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={motherAge}
                options={optionsMother}
                className={'intro-chart chart-animate'}
            />
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={fertilityRateData}
                options={optionFertility}
                className={'intro-chart chart-animate'}
            />
        </div>
    </>  
    )
    
}