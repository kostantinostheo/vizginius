import Intro from "../Intro";
import GeoChartGreece from "../GeoChartGreece"
import Mothers from "../Mothers";


function Home() {
    return (
      <div className="App">
        <Intro/>
        <GeoChartGreece/>
        <Mothers/>
      </div>
    );
  }
  
  export default Home;