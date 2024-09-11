import {Form, FormProps, message, Spin} from "antd";
import KjcModal from "../../../../builders/KjcModal";
import KjcInput from "../../../../builders/KjcInput";
import KjcPhoneNumber from "../../../../builders/KjcPhoneNumber/KjcPhoneNumber.tsx";
import {useState} from "react";
//eslint-disable-next-line
// @ts-ignore
import {CountryCode} from 'libphonenumber-js/types';
import {parsePhoneNumberWithError} from "libphonenumber-js";
import {Pencil} from "lucide-react";

export interface ContactInputModalProps {
    open?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    loading?: boolean;
}

type FieldType = {
    full_name?: string;
    email?: string;
    phone_number?: string;
};

const  ContactInputModal = (props: ContactInputModalProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [phoneNumberCountry, setPhoneNumberCountry] = useState<CountryCode>('GH');
    const [isSaving, setIsSaving] = useState(false);

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = async (formData) => {
        const parsedCompanyPhoneNumber = parsePhoneNumberWithError(phoneNumber, phoneNumberCountry);

        setIsSaving(true);
        try {
            if (parsedCompanyPhoneNumber) {
                formData["phone_number"] = parsedCompanyPhoneNumber.number;
            }
            console.log("Form Data Submitted:", formData)
            //......
            setTimeout(() => {
                setIsSaving(false);
                if (props.onOk) {
                    props.onOk();
                }
                message.success("Contact Info Updated!");
            }, 2000);
        } catch (err) {
            console.log("Error:", err);
            setIsSaving(false);
        }
    };


    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (errorInfo) => {
        console.error("Validation failed:", errorInfo);
    };

const handleSave = () => {
    form.submit();
};

    return (
        <>
            <KjcModal
                onOk={form.submit}
                onCancel={props.onCancel}
                open={props.open}
                centered
                closable
                footer={null}
                width="100%"
                style={{ padding: 0, margin: 0, top: 0, bottom: 0 }}
                bodyStyle={{ padding: 0, margin: 0, height: '100vh', overflow: 'hidden' }}
                className="bg-white overflow-hidden min-h-screen"
                >
                {(props.loading || isSaving) ? (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-white fixed top-0 left-0 z-50">
                        <Spin size="large" />
                        { isSaving && ( "Updating..")}
                    </div>
                ) : (
                    <div className="flex flex-col h-full min-h-screen">
                        <div className="flex items-center fixed top-0 left-0 right-0 py-4 text-xl bg-kjcBtn-200 md:text-2xl font-semibold px-4 md:px-8 border-b-2 border-gray-200 z-10">
                            <Pencil size={"16"} className={"me-1"}/> Edit contact info
                        </div>
                        <div className="flex flex-grow items-center justify-center w-full min-h-screen">
                            <div className="w-full max-w-lg bg-white shadow-lg p-8 rounded-lg">
                                <Form
                                    form={form}
                                    name="basic"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    className="w-full"
                                >
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block mb-1 font-semibold" htmlFor="full_name">Full
                                                Name</label>
                                            <KjcInput
                                                name="full_name"
                                                placeholder={"Emmanuel, Somuah"}
                                                className="w-full py-2 rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                                            <KjcInput
                                                name="email"
                                                placeholder={"EMMSOM506@GMAIL.COM"}
                                                className="w-full py-2 rounded-md"
                                                rules={[
                                                    {type: "email", message: "Input valid email"}
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-semibold" htmlFor="phon_number">Phone Number</label>
                                            <KjcPhoneNumber
                                                form={form}
                                                name="phone_number"
                                                label="phone_number"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your phone number'
                                                    },
                                                ]}
                                                phoneNumber={phoneNumber}
                                                setPhoneNumber={setPhoneNumber}
                                                phoneNumberCountry={phoneNumberCountry}
                                                setPhoneNumberCountry={setPhoneNumberCountry}
                                            />
                                        </div>
                                        <div className="flex justify-end space-x-4 mt-4">
                                            <Form.Item>
                                                <button
                                                    type="button"
                                                    className="font-semibold hover:text-kjcBtn-300 py-2 px-4 border-2 border-neutral-500 rounded-lg"
                                                    onClick={props.onCancel}
                                                >
                                                    Cancel
                                                </button>
                                            </Form.Item>
                                            <Form.Item>
                                                <button
                                                    onClick={handleSave}
                                                    type={"submit"}
                                                    className="py-2 px-4 bg-kjcBtn-200 cursor-pointer rounded-lg hover:bg-kjcBtn-300 font-semibold"
                                                >
                                                    Save Changes
                                                </button>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )}
            </KjcModal>
        </>
    );
};

export default ContactInputModal;
