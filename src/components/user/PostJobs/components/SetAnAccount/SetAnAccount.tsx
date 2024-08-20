import { useEffect, useState, useRef, MutableRefObject } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Steps, FormInstance } from "antd";
import PostJobSection from "../../builders/PostJobSection.tsx";
import { withBaseLayout } from "../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import BasicInformation from "./components/BasicInformation.tsx";
import ContactInformation from "./components/ContactInformation.tsx";
import CompanyDetails from "./components/CompanyDetails.tsx";
import AdditionalInformation from "./components/AdditionalInformation.tsx";

const { Step } = Steps;

const getStepTitle = (step: number) => {
    switch (step) {
        case 0:
            return "Basic Information";
        case 1:
            return "Contact Information";
        case 2:
            return "Company Details";
        case 3:
            return "Additional Information";
        default:
            return "";
    }
};

const setAnAccountStepper = (step: number, formRefs: MutableRefObject<FormInstance | null>[]) => {
    switch (step) {
        case 0:
            return <BasicInformation formRef={formRefs[0]} />;
        case 1:
            return <ContactInformation formRef={formRefs[1]} />;
        case 2:
            return <CompanyDetails />;
        case 3:
            return <AdditionalInformation />;
        default:
            return null;
    }
};

const SetAnAccount = () => {
    const [step, setStep] = useState<number>(0);
    const [showBackBtn, setShowBackBtn] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [formData, setFormData] = useState<Record<string, any>>({});

    //form references
    const formRefs: MutableRefObject<FormInstance | null>[] = [
        useRef<FormInstance | null>(null),
        useRef<FormInstance | null>(null),
        useRef<FormInstance | null>(null),
        useRef<FormInstance | null>(null)
    ];

    useEffect(() => {
        setShowBackBtn(step !== 0);
    }, [step]);

    //Proceed to next step after required input field is meant
    const handleNext = async () => {
        const currentFormRef = formRefs[step].current;
        if (currentFormRef) {
            try {
                const values = await currentFormRef.validateFields();
                console.log(`Step ${step + 1} data:`, values);

                setFormData((prevData) => ({
                    ...prevData,
                    [`step${step + 1}`]: values
                }));

                if (step < 3) {
                    setStep(step + 1);
                } else {
                    console.log("All data provided across steps:", formData);
                }
            } catch (errorInfo) {
                console.error("Failed to validate:", errorInfo);
            }
        }
    };

    //handle back navigation of steps
    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        } else {
            setShowBackBtn(false);
        }
    };

    //check for device to render step direction, small-vertical, otherwise-horizontal
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 436);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <PostJobSection className="">
            <div className="w-full md:w-[75%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] space-y-4">
                <h1 className="items-center justify-center font-semibold text-lg md:text-2xl capitalize">
                    Set-up an Account
                </h1>
                <h3 className="text-lg items-center font-semibold leading-normal ">
                    The ultimate guide to find your company
                </h3>
                <p>
                    Get your company in front of millions of job seekers. Join Kofcity Job Center, where you can easily
                    create a company profile that will help you attract the best candidates for your open positions
                </p>
                {isSmallScreen ? (
                    <div className="">
                        <Steps current={step} direction="horizontal">
                            <Step title="Basic Information" />
                            <Step title="Contact Information" />
                            <Step title="Company Details" />
                            <Step title="Additional Information" />
                        </Steps>

                        <div className="mt-8">{setAnAccountStepper(step, formRefs)}</div>
                    </div>
                ) : (
                    <div className="">
                        <h1 className="md:block pb-4 items-center justify-center font-mono text-lg md:text-2xl capitalize">
                            {getStepTitle(step)}
                        </h1>
                        <Steps current={step} direction="horizontal">
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                        </Steps>

                        <div className="mt-8">{setAnAccountStepper(step, formRefs)}</div>
                    </div>
                )}

                <div className="flex items-center justify-between cursor-pointer mb-8">
                    <p className={`items-center justify-center py-2 md:py-2 px-8 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg ${
                            showBackBtn ? "visible" : "invisible"
                        }`}
                        onClick={handleBack}
                    >
                        Back
                    </p>
                    <p
                        className="flex items-center justify-center py-2 md:py-2 px-8 font-semibold shadow-md rounded-lg bg-kjcBtn-200 hover:bg-kjcBtn-300 hover:shadow-lg"
                        onClick={handleNext}
                    >
                        {step < 3 ? "Next" : "Done"} <span className="ml-2">
                            <ArrowRightOutlined />
                        </span>
                    </p>
                </div>
            </div>
        </PostJobSection>
    );
};

export default withBaseLayout(SetAnAccount);
