//import { useEffect, useState } from 'react';
import { getCompanies } from "./CompanySpotlight.constants.tsx";
import {useNavigate} from "react-router-dom";
import {DASHBOARD_COMPANY_SPOTLIGHT_ROUTES_PATH} from "../../DashboardRoutes.constants.ts";
import KjcImage from "../../../../../../builders/KjcImage";

const CompanySpotlight = () => {
    const companies = getCompanies();
    //const [displayText, setDisplayText] = useState('');
    //const [isDeleting, setIsDeleting] = useState(false);
    const text = 'Unlock Opportunities with Leading Companies';
   // const speed: number = 150;
    const navigate = useNavigate();

    // useEffect(() => {
    //     let timer;
    //     if (!isDeleting && displayText === text) {
    //         timer = setTimeout(() => setIsDeleting(true), 2000);
    //     } else if (isDeleting && displayText === '') {
    //         timer = setTimeout(() => setIsDeleting(false), 1000);
    //     } else if (isDeleting) {
    //         timer = setTimeout(() => setDisplayText(text.substring(0, displayText.length - 1)), speed);
    //     } else {
    //         timer = setTimeout(() => setDisplayText(text.substring(0, displayText.length + 1)), speed);
    //     }
    //     return () => clearTimeout(timer);
    // }, [displayText, isDeleting, text]);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div>
                <h1 className="items-center leading-tight  text-md md:text-2xl pb-8 typewriter-container">
                    {/*{displayText}*/} {text}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className="p-4 h-[150px] md:h-[250px] bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 flex flex-col justify-between"
                            onClick={ () => navigate(DASHBOARD_COMPANY_SPOTLIGHT_ROUTES_PATH)}
                        >
                            <div>
                                <KjcImage
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-16 h-16 mx-auto p-4"
                                />
                                <h2 className="text-lg font-semibold text-center">
                                    {company.name}
                                </h2>
                            </div>
                            <p className="text-blue-500 text-center float-end">Learn more</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanySpotlight;
