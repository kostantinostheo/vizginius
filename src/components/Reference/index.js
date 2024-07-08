import React from 'react';
import { FaReact } from 'react-icons/fa';
import { GrGoogle } from "react-icons/gr";
import { SiD3Dotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

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
    },
    {
        title: "OECD Data",
        url: "https://data.oecd.org/greece.htm",
        description: "OECD Data provides a comprehensive collection of statistical information and analysis from the Organisation for Economic Co-operation and Development (OECD). The Greece section includes key indicators on economy, society, education, health, and the environment, offering valuable insights for policy-making and research."
    }
];

const ReferencesPage = () => {
    return (
        <div className="font-sans bg-[#111827] h-full flex justify-center items-start">
            <div className='w-[50%]'>
            <div className='mt-10'>
                    <h1 className='text-blue text-[40px] pb-10 text-left font-bold text-white flex justify-center'>
                        TOOLS
                    </h1>
                    <div className='flex justify-center items-center space-x-14 pb-14'>
                        <div className='text-white text-center w-fit flex flex-col items-center'>
                            <FaReact className='text-[60px] bg-blue-500 p-4 rounded-full' />
                            <p className='mt-2'>React</p>
                        </div>
                        <div className='text-white text-center w-fit flex flex-col items-center'>
                            <RiTailwindCssFill className='text-[60px] bg-blue-500 p-4 rounded-full' />
                            <p className='mt-2'>Tailwind</p>
                        </div>
                        <div className='text-white text-center w-fit flex flex-col items-center'>
                            <GrGoogle className='text-[60px] bg-blue-500 p-4 rounded-full' />
                            <p className='mt-2'>Google Charts</p>
                        </div>
                        <div className='text-white text-center w-fit flex flex-col items-center'>
                            <SiD3Dotjs className='text-[60px] bg-blue-500 p-4 rounded-full' />
                            <p className='mt-2'>D3.js</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-blue text-[40px] p-5 text-left font-bold text-white flex justify-center'>
                    REFERENCES
                </h1>
                <ul className="list-none p-5">
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
