import Intro from "../Intro";
import GeoChartGreece from "../GeoChartGreece"
import AgeingPop from '../AgeingPop'
import Mothers from '../Mothers'
import LifeExand from '../LifeExpand'
import Housing from '../Housing'
import AbortionsInGreece from '../Abortions'
import LineChartFiltered from '../LineChartFiltered'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

function Home() {
    
  // const presentMeasures = [
  //     { measure: "Demography and Family Observatory", description: "Collects and evaluates demographic data for regional needs assessment and measures planning." },
  //     { measure: "Family Home Network", description: "Supports families, promotes active aging, and encourages intergenerational solidarity." },
  //     { measure: "Support for Families with Three Children", description: "Equalizes them with large families." },
  //     { measure: "Financial Incentives for Assisted Reproduction", description: "Supports women in assisted reproduction and addresses issues of leave, teleworking, and infant care structures within businesses." },
  //     { measure: "Support for Youth and Women Employment", description: "Enhances employment for those under 30 and women." },
  //     { measure: "Support for Young Couples", description: "Provides affordable housing for young and vulnerable groups." },
  //   ];
    
    return (
      <div className="App">
        <Intro/>
        <GeoChartGreece/>
        <AgeingPop/>
        <LifeExand/>
        <Mothers/>
        <AbortionsInGreece/>
        <h1 className="text-[45px] text-left p-5 font-bold">Other Reasons That May Affect the Lower Birth Rates</h1>
        <div className=" border ml-5 mr-40 mb-5"/>
        <Housing/>
        <LineChartFiltered/>
        <div className="section">
        <h2 className="text-[30px] text-left pt-5 pl-5 font-semibold">Want to Know More?</h2>
        <p className="text-[18px] text-left pl-5 pb-5 pr-20">
          There's a lot more to the story about Greece's demographic problem. If you're curious and want to dive deeper into the details, click the button below to view the detailed research results report.
        </p>
        <div className="flex">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mb-5 flex justify-center items-center gap-x-3"
            onClick={() => window.open('https://gr.boell.org/el/2023/03/27/dimoskopisi-dimografiko-problima-stin-ellada-staseis-kai-antilipseis', '_blank')} 
          >
            Read Article
            <FaExternalLinkSquareAlt />
          </button>
          
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mb-5 flex justify-center items-center gap-x-3"
            onClick={() => window.open('https://gr.boell.org/sites/default/files/2023-09/the-demographic-problem-in-greece_en_site-version.pdf', '_blank')}
          >
            Read Analysis
            <FaExternalLinkSquareAlt />
          </button>
        </div>
        
      </div>
      
      {/* <table className="border-collapse border border-gray-200 m-5">
        <thead className="p-5">
          <tr>
            <th className="border border-gray-300 p-2 text-left text-blue-400">Measure</th>
            <th className="border border-gray-300 p-2 text-left text-blue-400">Description</th>
          </tr>
        </thead>
        <tbody>
          {presentMeasures.map((measure, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2 text-left">{measure.measure}</td>
              <td className="border border-gray-300 p-2 text-left">{measure.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      
      <ScrollToTop 
        color="white" 
        smooth 
        style={{borderRadius:"10%", display:"flex", justifyItems:"center", alignItems:"center",justifyContent:"center", backgroundColor:"#314158", opacity:"60%"}}
      />
      </div>
    );
  }
  
  export default Home;