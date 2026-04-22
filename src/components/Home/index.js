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
  return (
    <div className="App">
      <Intro />

      <section className="section-block-alt">
        <GeoChartGreece />
      </section>

      <section className="section-block">
        <AgeingPop />
      </section>

      <section className="section-block-alt">
        <LifeExand />
      </section>

      <section className="section-block">
        <Mothers />
      </section>

      <section className="section-block-alt">
        <AbortionsInGreece />
      </section>

      <section className="section-block">
        <h1 className="section-title text-[28px] md:text-[34px] ml-5 mt-6 mb-2 font-bold">
          Other Reasons That May Affect the Lower Birth Rates
        </h1>
        <Housing />
        <LineChartFiltered />
      </section>

      {/* CTA */}
      <div className="cta-block">
        <h2 className="text-[26px] font-bold mb-3">Want to Know More?</h2>
        <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-2xl">
          There&apos;s a lot more to the story about Greece&apos;s demographic problem. If you&apos;re curious and want to dive deeper into the details, click below to view the detailed research results.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 shadow-lg"
            onClick={() => window.open('https://gr.boell.org/el/2023/03/27/dimoskopisi-dimografiko-problima-stin-ellada-staseis-kai-antilipseis', '_blank')}
          >
            Read Article <FaExternalLinkSquareAlt />
          </button>
          <button
            className="flex items-center gap-2 bg-transparent hover:bg-blue-600/20 border border-blue-500 text-blue-300 hover:text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200"
            onClick={() => window.open('https://gr.boell.org/sites/default/files/2023-09/the-demographic-problem-in-greece_en_site-version.pdf', '_blank')}
          >
            Read Analysis <FaExternalLinkSquareAlt />
          </button>
        </div>
      </div>

      <ScrollToTop
        color="white"
        smooth
        style={{ borderRadius: "10%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1d4ed8", opacity: "0.85" }}
      />
    </div>
  );
}

export default Home;
