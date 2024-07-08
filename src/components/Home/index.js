import Intro from "../Intro";
import GeoChartGreece from "../GeoChartGreece"
import AgeingPop from '../AgeingPop'
import Mothers from '../Mothers'
import LifeExand from '../LifeExpand'
import Housing from '../Housing'
import AbortionsInGreece from '../Abortions'
import LineChartFiltered from '../LineChartFiltered'

function Home() {
    return (
      <div className="App">
        <Intro/>
        <GeoChartGreece/>
        <AgeingPop/>
        <LifeExand/>
        <Mothers/>
        <AbortionsInGreece/>
        <Housing/>
        <LineChartFiltered/>
      </div>
    );
  }
  
  export default Home;