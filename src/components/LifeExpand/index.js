import React from "react";
import { Chart } from "react-google-charts";

const rawData = [
  ["Decade", "Life Expectancy", "Average Household Size"],
  ["1960-1969", 70.9, 4.0],
  ["1970-1979", 73.5, 3.8],
  ["1980-1989", 75.9, 3.6],
  ["1990-1999", 77.4, 3.3],
  ["2000-2009", 78.8, 3.0],
  ["2010-2019", 81.1, 2.8],
  ["2020-2022", 80.7, 2.6],
];

const normalize = (value, min, max) => 1 + (value - min) * (1 / (max - min));

const getColumn = (data, index) => data.slice(1).map(row => row[index]);

const lifeExpectancy = getColumn(rawData, 1);
const householdSize = getColumn(rawData, 2);

const minLifeExpectancy = Math.min(...lifeExpectancy);
const maxLifeExpectancy = Math.max(...lifeExpectancy);
const minHouseholdSize = Math.min(...householdSize);
const maxHouseholdSize = Math.max(...householdSize);

const normalizedData = rawData.map((row, rowIndex) => {
  if (rowIndex === 0) return row; // Keep header row unchanged
  return [
    row[0],
    { v: normalize(row[1], minLifeExpectancy, maxLifeExpectancy), f: row[1].toString() },
    { v: normalize(row[2], minHouseholdSize, maxHouseholdSize), f: row[2].toString() }
  ];
});

const options = {
  width: '100%',
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "right", textStyle: { color: 'white' } },
  hAxis: { title: "Decade", textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
  vAxis: { title: "Normalized Values (Years, Family Sizes)", textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
  backgroundColor: 'transparent',
  chartArea: { backgroundColor: 'transparent' },
  colors: ['#E68369'],
  series: {
    1: { type: 'line', color: '#F9E2AF', pointSize: 5, pointShape: 'circle' }
  },
};

const LifeExpand = () => {
  return (
    <>
    <h1 className="text-left pl-5 text-[30px] font-bold">The Changing Dynamics of Family Life</h1>
    <div className="flex justify-center items-center p-3">
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={normalizedData}
            options={options}
        />
        <div className="p-3 w-1/2 ">
            <p className={'text-justify italic text-[14px]' }>
                "My grandmother, born in the 1930s, often told me stories about her six siblings. It puzzled me why families back then were so large, but it made sense when I learned about historical life expectancy. With <b className="text-[orange]">lower life expectancy</b>, having more children was a way to <b className="text-[orange]">ensure that some would survive to adulthood</b>. Today, thanks to advances in healthcare and better living conditions, people live longer, and families tend to have fewer children. This change shows how societal norms evolve with progress, reflecting human resilience and adaptability. Thinking of my grandmother's life, I appreciate both our past and the improvements that have shaped our present."  
            </p>
        </div>

    </div>
    </>
  );
};

export default LifeExpand;
