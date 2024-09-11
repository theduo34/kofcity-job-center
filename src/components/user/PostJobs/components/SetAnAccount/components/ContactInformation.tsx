import { Form, FormProps } from "antd";
import KjcInput from "../../../../../../builders/KjcInput";
import KjcPhoneNumber from "../../../../../../builders/KjcPhoneNumber/KjcPhoneNumber.tsx";
import { useState } from "react";
//eslint-disable-next-line
// @ts-ignore
import { CountryCode } from "libphonenumber-js/types";
import { parsePhoneNumberWithError } from "libphonenumber-js";

type FieldType = {
    company_telephone: string,
    contact_person_name: string,
    contact_phone_number: string,
    contact_person_email: string,
}

interface ContactInformationProps {
    //eslint-disable-next-line
    formRef: any;
}

const ContactInformation = ({ formRef }: ContactInformationProps) => {
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState<string>('');
    const [companyPhoneNumberCountry, setCompanyPhoneNumberCountry] = useState<CountryCode>('GH');
    const [contactPhoneNumber, setContactPhoneNumber] = useState<string>('');
    const [contactPhoneNumberCountry, setContactPhoneNumberCountry] = useState<CountryCode>('GH');

    const [form] = Form.useForm();
    formRef.current = form;

    const onFinish: FormProps<FieldType>['onFinish'] = async (formData) => {
        const parsedCompanyPhoneNumber = parsePhoneNumberWithError(companyPhoneNumber, companyPhoneNumberCountry);
        const parsedContactPhoneNumber = parsePhoneNumberWithError(contactPhoneNumber, contactPhoneNumberCountry);

        if (parsedCompanyPhoneNumber) {
            formData["company_telephone"] = parsedCompanyPhoneNumber.number;
        }

        if (parsedContactPhoneNumber) {
            formData["contact_phone_number"] = parsedContactPhoneNumber.number;
        }

        console.log("Form submitted:", formData);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (errorInfo) => {
        console.error("Validation failed:", errorInfo);
    };

    return (
        <div className="w-full items-center justify-center flex">
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="items-center w-full"
            >
                {/* Company Telephone Field */}
                <div className="w-full">
                    <label htmlFor="company_telephone" className="text-lg font-semibold">
                        Company's Telephone
                    </label>
                    <p>The primary contact number for the company</p>
                    <KjcPhoneNumber
                        form={form}
                        name="company_telephone"
                        label="Telephone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number'
                            },
                        ]}
                        phoneNumber={companyPhoneNumber}
                        setPhoneNumber={setCompanyPhoneNumber}
                        phoneNumberCountry={companyPhoneNumberCountry}
                        setPhoneNumberCountry={setCompanyPhoneNumberCountry}
                    />
                </div>

                {/* Company Contact Person Name */}
                <div className="w-full">
                    <label htmlFor="contact_person_name" className="text-lg font-semibold">
                        Contact Person Name
                    </label>
                    <p>The name of the primary contact person</p>
                    <KjcInput
                        name="contact_person_name"
                        placeholder="Enter contact person's name"
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input contact person's name" },
                        ]}
                    />
                </div>

                {/* Company Contact Person Email */}
                <div className="w-full">
                    <label htmlFor="contact_person_email" className="text-lg font-semibold">
                        Contact Person Email
                    </label>
                    <p>The name of the primary contact person</p>
                    <KjcInput
                        name="contact_person_email"
                        placeholder="Enter contact person's email"
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input contact person's email" },
                            { type: "email", message: "Please input a valid email address" },
                        ]}
                    />
                </div>

                {/* Contact Person Telephone Field */}
                <div className="w-full">
                    <label htmlFor="contact_person_number" className="text-lg font-semibold">
                        Contact Person Number
                    </label>
                    <p>The primary contact number for the company</p>
                    <KjcPhoneNumber
                        form={form}
                        name="contact_person_number"
                        label="Contact Phone Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input contact person's phone number"
                            },
                        ]}
                        phoneNumber={contactPhoneNumber}
                        setPhoneNumber={setContactPhoneNumber}
                        phoneNumberCountry={contactPhoneNumberCountry}
                        setPhoneNumberCountry={setContactPhoneNumberCountry}
                    />
                </div>
            </Form>
        </div>
    );
};

export default ContactInformation;
