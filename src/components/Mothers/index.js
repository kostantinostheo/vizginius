import React from "react"
import { Chart } from "react-google-charts";
import './index.css'
import '../../resources/animations/slideFadeIn.css'
import Box from "@mui/material/Box";


export default function Mothers(){
    
    const motherAge = [
        ["Year", "Average age of the mother at first birth"],
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

    const mothersOver40 = [
        ["Year", "Number of mothers over 40 y.o"],
        ['1990', 1.336],
        ['1991', 1.439],
        ['1992', 1.518],
        ['1993', 1.592],
        ['1994', 1.691],
        ['1995', 1.689],
        ['1996', 1.681],
        ['1997', 1.892],
        ['1998', 1.954],
        ['1999', 1.999],
        ['2000', 2.812],
        ['2001', 2.425],
        ['2002', 2.608],
        ['2003', 2.763],
        ['2004', 3.023],
        ['2005', 3.122],
        ['2006', 3.568],
        ['2007', 3.928],
        ['2008', 4.450],
        ['2009', 5.057],
        ['2010', 5.309],
        ['2011', 4.958],
        ['2012', 5.034],
        ['2013', 5.035],
        ['2014', 4.949],
        ['2015', 5.541],
        ['2016', 6.117],
        ['2017', 6.328],
        ['2018', 6.647],
        ['2019', 7.018],
        ['2020', 7.111],
        ['2021', 8.312],
        ['2022', 7.584],
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
    const optionOver40 = {
        title: "Number of live births of mothers over 40",
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
        <h1 className='text-blue text-[40px] pl-3 text-left font-bold'>
            Motherhood
        </h1>
        <div className="flex flex-row justify-center items-center">
            <p className='text-blue w-[50%] text-[15px] p-5 text-justify mb-1'>
                An increasing mean age of mothers and the decreasing fertility rates and a at first birth are interconnected
                trends that have significant demographic and societal implications.
                From 2000 to 2021, the average age of mothers at birth in Greece rose steadily from 29.6 to 32.0 years.
                Meanwhile, the fertility rate declined slightly from 1.300 in 2000 to 1.279 in 2021.
                <br/><br/>
                Lower fertility rates indicate that
                women are having fewer children on average, which can contribute to a declining population growth rate.
                This
                trend is often influenced by factors such as increased access to education and career opportunities for
                women, economic considerations, and the availability of family planning methods.
                <br/><br/>
                The increasing mean age of mothers at first birth reflects a shift in the timing of childbearing, with
                many women choosing to have children later in life, as we observe that the number women that give birth to
                children and are over 40 years old is significantly increasing.
            </p>

            <Box sx={{width: '80%', margin: 'auto', padding: 'top'}}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={motherAge}
                    options={optionsMother}
                    className={'intro-chart chart-animate'}
                />
            </Box>
        </div>

        <div className="flex mr-10 justify-stretch">
            <Box sx={{width: '50%', padding: 'left'}}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={fertilityRateData}
                    options={optionFertility}
                    className={'intro-chart chart-animate'}
                />
            </Box>
            <Box sx={{width: '50%', padding: 'left'}}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={mothersOver40}
                    options={optionOver40}
                    className={'intro-chart chart-animate'}
                />
            </Box>


        </div>
    </>
    )

}