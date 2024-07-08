import React from 'react';

const references = [
    {
        title: "Hellenic Statistical Authority (ELSTAT)",
        url: "https://www.statistics.gr/en/home/",
        description: "The Hellenic Statistical Authority (ELSTAT) is the national statistical service of Greece, responsible for collecting, analyzing, and publishing statistical data on the economy, population, and society of Greece. Their data is essential for informed decision-making in both public and private sectors."
    },
    {
        title: "Eurostat",
        url: "https://ec.europa.eu/eurostat/web/main/home",
        description: "Eurostat is the statistical office of the European Union situated in Luxembourg. Its mission is to provide high-quality statistical information to the institutions of the European Union, enabling comparisons between countries and regions. Eurostat's data is crucial for analyzing and monitoring the economic and social policies within the EU."
    },
    {
        title: "World Bank",
        url: "https://www.worldbank.org/en/home",
        description: "The World Bank is an international financial institution that provides loans and grants to the governments of low and middle-income countries for the purpose of pursuing capital projects. The World Bank's data and reports are vital resources for understanding global economic trends, development challenges, and progress in poverty reduction."
    },
    {
        title: "Johnston's Archive",
        url: "https://www.johnstonsarchive.net/policy/abortion/ab-greece.html",
        description: "Johnston's Archive is an extensive online repository of data and statistics on various topics, including public policy, demographics, and historical records. The page on abortion in Greece provides detailed statistical information and analysis, offering valuable insights into trends and policies related to abortion in Greece."
    }
];

const ReferencesPage = () => {
    return (
        <div className="font-sans bg-[#111827] h-screen flex justify-center items-start">
            <div className='w-[50%]'>
                <h1 className='text-blue text-[40px] p-5 text-left font-bold text-white flex justify-center'>
                    REFERENCES
                </h1>
                <ul className="list-none p-0">
                {references.map((ref, index) => (
                        <li key={index} className="mb-4">
                            <a 
                                href={ref.url} 
                                className="text-xl text-blue-500 hover:underline" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {ref.title}
                            </a>
                            <p className="text-white text-justify" >{ref.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

export default ReferencesPage;
