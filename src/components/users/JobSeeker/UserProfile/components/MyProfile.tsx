import {Pencil} from "lucide-react";
import {useEffect, useState} from "react";
import UsernameInputModal from "../builders/UsernameInputModal.tsx";
import ContactInputModal from "../builders/ContactInputModal.tsx";
import LocationInputModal from "../builders/LocationInputModal.tsx";
import ProfessionalSummaryTextAreaModal from "../builders/ProfessionalSummaryTextAreaModal.tsx";
import {useAuth} from "../../../../shared/authContext/AuthContext.tsx";

const MyProfile = () => {
    const [showUsernameInputModal, setShowUsernameInputModal] = useState(false);
    const [showContactInputModal, setShowContactInputModal] = useState(false);
    const [showLocationInputModal, setShowLocationInputModal] = useState(false);
    const [showProfessionSummaryTextAreaModal, setShowProfessionSummaryTextAreaModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    const {currentUser} = useAuth();

    const [contactInfo, setContactInfo] = useState({
        full_name: "Not set yet",
        phone_number: "Not set yet",
        email: `${currentUser?.email}`,
    });

    const [locationInfo, setLocationInfo] = useState({
        country_name: "Not set yet",
        city: "Not set yet",
    })

    const [professionSummary , setProfessionalSummary] = useState({
        professional_summary: "Not set yet",
    })

    useEffect(() => {
        const savedContactInfo = localStorage.getItem("contactInfo");
        const savedLocationInfo = localStorage.getItem("locationInfo");
        const professionSummaryInfo = localStorage.getItem("professionalSummary");

        if (savedContactInfo) {
            setContactInfo(JSON.parse(savedContactInfo));
        }
        if(savedLocationInfo) {
            setLocationInfo(JSON.parse(savedLocationInfo));
        }
        if(professionSummaryInfo) {
            setProfessionalSummary(JSON.parse(professionSummaryInfo));
        }

    }, []);

    const handleShowContactInput = () => {
        setShowContactInputModal(true);
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    const handleShowLocationInput = () => {
        setShowLocationInputModal(true);
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    const handleProfessionalSummaryTextArea = () =>{
        setShowProfessionSummaryTextAreaModal(true);
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        },2000)
    }

    return (
        <>
            <div>
                <h1 className="text-xl font-semibold px-4 lg:px-0">My Profile</h1>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start justify-between">

                {/* First div col */}
                <div className="w-full md:w-[28%] p-2 space-y-4">
                    <div className="flex items-start shadow-lg px-4 py-8 rounded-lg bg-white">
                        <p className="w-16 h-16 flex items-center justify-center bg-gray-400 rounded-lg">
                            {currentUser?.email?.charAt(0).toUpperCase()}
                        </p>
                        <div className="w-full ms-4 flex flex-col">
                            <h2 className="flex items-center justify-between font-semibold text-lg">
                                Hi {currentUser?.email}
                            </h2>
                            <p>Remote Opportunities</p>
                            <p>Accra</p>
                        </div>
                    </div>
                    <div className="shadow-lg bg-kjcBtn-100 px-4 py-8 rounded-lg space-y-4">
                        <div>
                            <h2 className="font-semibold text-lg">Experience</h2>
                            <p>Stand out from the crowd. Your listed experience here will assist us in providing you
                                with
                                alerts and recommendations based on your past experience.</p>
                        </div>
                        <div>
                            <h4 className="f text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                        </div>
                    </div>
                </div>

                {/* Second div col */}
                <div className="w-full md:w-[70%] p-4 md:p-8 shadow-lg bg-white">
                    <div className="flex flex-col space-y-8">
                        <div
                            className="w-full flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0">
                            <div className="w-full md:w-[49%] h-[180px] border-2 border-neutral-200 px-4 py-8">
                                <div className="flex flex-col ">
                                    <h2 className="flex items-center justify-between font-semibold text-lg pb-4">
                                        Contact Information
                                        <span className={"cursor-pointer"}
                                              onClick={handleShowContactInput}
                                        >
                                            <Pencil/></span>
                                    </h2>
                                    <p className={"items-center uppercase"}>{contactInfo.full_name}</p>
                                    <p className={"items-center uppercase"}>{contactInfo.email}</p>
                                    <p className={"items-center uppercase"}>{contactInfo.phone_number}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-[49%] h-[180px] border-2 border-neutral-200 px-4 py-8">
                                <div className="flex flex-col ">
                                    <h2 className="flex items-center justify-between font-semibold text-lg pb-4">
                                        Location
                                        <span className={"cursor-pointer"}
                                              onClick={handleShowLocationInput}
                                        >
                                            <Pencil/>
                                        </span>
                                    </h2>
                                    <p className={"items-center uppercase"}>{locationInfo.city}, +233</p>
                                    <p className={"items-center uppercase"}>{locationInfo.country_name}</p>

                                </div>
                            </div>
                        </div>
                        <div className="relative w-full mb-8">
                            <h2 className="relative font-semibold text-lg pb-2">Professional Summary</h2>
                            <div className="border-2 border-neutral-200 px-4 py-8">
                                {/*Highly skilled and accomplished Network Engineer with 3years*/}
                                {/*of experience in designing, implementing, and managing complex*/}
                                {/*network infrastructures. Proven track record of ensuring high availability,*/}
                                {/*scalability, and security of network systems. Expertise in routing, switching,*/}
                                {/*network protocols, and cloud-based solutions. Strong problem-solving skills,*/}
                                {/*with ability to analyze and resolve complex network issues.*/}
                                {/*Proficient in network architecture, configuration, and optimization. Excellent*/}
                                {/*communication and collaboration skills, with experience working with cross-functional*/}
                                {/*teams to deliver high-quality network solutions.*/}
                                {professionSummary.professional_summary}
                            </div>
                            <p className="absolute top-12 right-4"
                               onClick={handleProfessionalSummaryTextArea}
                            ><Pencil/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*modals*/}
            {
                showUsernameInputModal && (
                    <UsernameInputModal
                        open={showUsernameInputModal}
                        onOk={() => setShowUsernameInputModal(false)}
                        onCancel={() => setShowUsernameInputModal(false)}
                        loading={loading}
                    />
                )
            }
            {
                showContactInputModal && (
                    <ContactInputModal
                        open={showContactInputModal}
                        onOk={(updatedContactInfo: {
                            full_name: string,
                            phone_number: string,
                            email: string
                        }) => {
                            localStorage.setItem("contactInfo", JSON.stringify(updatedContactInfo));
                            setContactInfo(updatedContactInfo)
                            setShowContactInputModal(false)
                        }}
                        onCancel={() => setShowContactInputModal(false)}
                        loading={loading}

                    />
                )
            }
            {
                showLocationInputModal && (
                    <LocationInputModal
                    open={showLocationInputModal}
                    onOk = {(updatedLocationInfo: {
                        country_name: string,
                        city: string,
                    }) => {
                        localStorage.setItem("locationInfo", JSON.stringify(updatedLocationInfo));
                        setLocationInfo(updatedLocationInfo)
                        setShowLocationInputModal(false)
                    }}
                    onCancel = { () => setShowLocationInputModal(false) }
                    loading= {loading}
                    />
                )
            }
            {
                showProfessionSummaryTextAreaModal && (
                    <ProfessionalSummaryTextAreaModal
                        open={showProfessionSummaryTextAreaModal}
                        onOk = { (updatedProfessionSummary: {
                            professional_summary: string
                        }) => {
                           localStorage.setItem("professionalSummaryInfo", JSON.stringify(updatedProfessionSummary))
                            setProfessionalSummary(updatedProfessionSummary)
                            setShowProfessionSummaryTextAreaModal(false)
                        }}
                        onCancel = { () => setShowProfessionSummaryTextAreaModal(false)}
                        loading={loading}
                    />
                )
            }
        </>
    )
}
export default MyProfile;
