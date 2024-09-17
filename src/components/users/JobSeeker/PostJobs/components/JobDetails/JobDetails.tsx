import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import PostJobSection from "../../builders/PostJobSection.tsx";
import ApplicationPreference from "./components/ApplicationPreference.tsx";
import ApplicationInfo, { FieldType } from "./components/ApplicationInfo.tsx";
import { withBaseLayout } from "../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import { useNavigate } from "react-router-dom";
import { REVIEW_PAGE_ROUTE_PATH } from "../../PostJobsRoutes.constants.ts";
import { Form } from "antd";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_POST_JOBS} from "../../../UserRoutes.constants.ts";

const jobDetailsStepper = (step: number, onSubmit: (data: FieldType) => void, formData: FieldType, form: any) => {
    switch (step) {
        case 0:
            return <ApplicationInfo onSubmit={onSubmit} formData={formData} form={form} />;
        case 1:
            return <ApplicationPreference />;
        default:
            return null;
    }
};

const JobDetails = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FieldType>({} as FieldType);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const totalSteps = 2;

    const handleSubmit = (data: FieldType) => {
        setFormData(data);
        console.log("Form data collected:", data);
    };

    // handle form submission and move to the next step
    const handleNext = async () => {
        try {
            const values = await form.validateFields();

            handleSubmit(values);

            if (step === totalSteps - 1) {
                navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${REVIEW_PAGE_ROUTE_PATH}`, { state: { formData } });
            } else {
                setStep((prevStep) => prevStep + 1);
            }
        } catch (error) {
            console.log("Form validation failed:", error);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <PostJobSection>
            <div className="flex flex-col pt-4 mb-12 ps-0 md:ps-12 items-center justify-center gap-4 w-full md:w-[80%] lg:w-[90%] xl:w-[70%] 2xl:w-[55%]">
                <div className={"w-full"}>
                    {jobDetailsStepper(step, handleSubmit, formData, form)}
                </div>

                {/* Navigation buttons */}
                <div className="w-full flex items-center justify-between cursor-pointer mb-16">
                    {/* Back button */}
                    <p
                        className={`items-center justify-center py-2 md:py-2 px-8 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg ${step > 0 ? "visible" : "invisible"}`}
                        onClick={handleBack}
                    >
                        Back
                    </p>

                    {/* Next/Done button */}
                    <p
                        className="flex items-center justify-center py-2 md:py-2 px-8 font-semibold shadow-md rounded-lg bg-kjcBtn-200 hover:bg-kjcBtn-300 hover:shadow-lg"
                        onClick={handleNext}
                    >
                        {step < totalSteps - 1 ? "Next" : "Done"}
                        <span className="ml-2">
                            <ArrowRightOutlined />
                        </span>
                    </p>
                </div>
            </div>
        </PostJobSection>
    );
};

export default withBaseLayout(JobDetails);
