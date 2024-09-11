import { useState } from "react";
import {Form, FormProps, message, Spin} from "antd";
import KjcModal from "../../../../builders/KjcModal";
import KjcInput from "../../../../builders/KjcInput";

export interface UsernameInputModalProps {
    open?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    loading?: boolean;
}
type FieldType = {
    username?: string;
    job_title?: string;
};

const UsernameInputModal = (props: UsernameInputModalProps) => {
    const [form] = Form.useForm();
    const [isSaving, setIsSaving] = useState(false);

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        setIsSaving(true);
        try {
            console.log("Form Data Submitted:", formData);
            //.....
            setTimeout(() => {
                setIsSaving(false);
                if (props.onOk) {
                    props.onOk();
                }
                message.success("User Profile Updated!");
            }, 2000);
        } catch (err) {
            console.log("Error:", err);
            setIsSaving(false);
        }
    };

    const handleSave = () => {
        form.submit();
    };

    return (
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
                    { isSaving && ( "Updating...")}
                </div>
            ) : (
                <div className="flex flex-col h-full min-h-screen">
                    <div className="flex fixed top-0 left-0 right-0 py-4 text-xl bg-kjcBtn-200 md:text-2xl font-semibold px-4 md:px-8 border-b-2 border-gray-200 z-10">
                        Edit Profile
                    </div>
                    <div className="flex flex-grow items-center justify-center w-full min-h-screen">
                        <div className="w-full max-w-lg bg-white shadow-lg p-8 rounded-lg">
                            <Form
                                form={form}
                                name="basic"
                                onFinish={onFinish}
                                className="w-full"
                            >
                                <div className="space-y-4">
                                    <div>
                                        <label className="block mb-1 font-semibold" htmlFor="username">Username</label>
                                        <KjcInput
                                            name="username"
                                            placeholder={"Hi Emmanuel"}
                                            className="w-full py-2 rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-semibold" htmlFor="job_title">Job Title</label>
                                        <KjcInput
                                            name="job_title"
                                            placeholder={"Remote Opportunities"}
                                            className="w-full py-2 rounded-md"
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
                                                type="button"
                                                onClick={handleSave}
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
    );
};

export default UsernameInputModal;
