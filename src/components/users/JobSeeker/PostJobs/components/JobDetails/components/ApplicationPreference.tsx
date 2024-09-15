import  { useState } from "react";
import KjcInput from "../../../../../../../builders/KjcInput";
import { Form, Checkbox } from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";

type FieldType = {
    company_website?: string;
    email_address?: string;
    phone_number?: string;
    in_person_address?: string;
};

const ApplicationPreference = () => {
    const [checkedValues, setCheckedValues] = useState({
        website: false,
        email: false,
        phone: false,
        inPerson: false
    });
    const [form] = Form.useForm();

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        const key = e.target.name as keyof typeof checkedValues;
        setCheckedValues(prev => ({
            ...prev,
            [key]: e.target.checked
        }));
    };


    const onFinish = (values: FieldType) => {
        console.log("Form values:", values);
    };

    const onFinishFailed = () => {
        //
    };

    //const isButtonEnabled = Object.values(checkedValues).some(value => value);

    return (
        <>
            <div className={"w-full items-center space-y-8"}>
                <h2 className="w-full items-center font-semibold text-lg md:text-2xl capitalize pt-2 md:pt-4">
                    How would you like job seekers to apply for this job?
                </h2>
                <Form
                    form={form}
                    name="application_preference_form"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className={"w-full"}
                >
                    <div className="w-full">
                        <Checkbox
                            name="website"
                            checked={checkedValues.website}
                            onChange={handleCheckboxChange}
                            className={"text-md md:text-lg font-semibold"}
                        >
                            Apply at company Website
                        </Checkbox>
                        <KjcInput
                            className={"py-3"}
                            name="company_website"
                            label="Applicants will be sent to this webiste you specify to apply for the position"
                            placeholder="Enter company website - [Optional]"
                            disabled={!checkedValues.website}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <Checkbox
                            name="email"
                            checked={checkedValues.email}
                            onChange={handleCheckboxChange}
                            className={"text-md md:text-lg font-semibold"}
                        >
                            Apply via Email
                        </Checkbox>
                        <KjcInput
                            className={"py-3"}
                            name="email_address"
                            label="Applicants for the position will be sent to the email address you specify"
                            placeholder="Enter email address - [Optional]"
                            disabled={!checkedValues.email}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <Checkbox
                            name="phone"
                            checked={checkedValues.phone}
                            onChange={handleCheckboxChange}
                            className={"text-md md:text-lg font-semibold"}
                        >
                            Direct Phone Applications
                        </Checkbox>
                        <KjcInput
                            className={"py-3"}
                            name="phone_number"
                            label="Provide a phone number for candidates to call and express their interest or schedule an interviewr"
                            placeholder="Enter phone number - [Optional]"
                            disabled={!checkedValues.phone}
                        />
                    </div>

                    <div className="w-full mt-4">
                        <Checkbox
                            name="inPerson"
                            checked={checkedValues.inPerson}
                            onChange={handleCheckboxChange}
                            className={"text-md md:text-lg font-semibold"}
                        >
                            In-person Application
                        </Checkbox>
                        <KjcInput
                            className={"py-3"}
                            name="in_person_address"
                            label="Provide dedicated office where candidates  can submit their resumes or cover letters"
                            placeholder="Enter in-person address - [Optional]"
                            disabled={!checkedValues.inPerson}
                        />
                    </div>
                    {/*<div className="flex justify-end pt-4">*/}
                    {/*    <KjcButton*/}
                    {/*        htmlType="submit"*/}
                    {/*        disabled={!isButtonEnabled}*/}
                    {/*        className="py-6 px-8 bg-kjcBtn-200 font-semibold rounded-lg shadow-lg"*/}
                    {/*    >*/}
                    {/*        Save and Continue <ArrowRight/>*/}
                    {/*    </KjcButton>*/}
                    {/*</div>*/}
                </Form>
            </div>
        </>
    );
};

export default ApplicationPreference;
