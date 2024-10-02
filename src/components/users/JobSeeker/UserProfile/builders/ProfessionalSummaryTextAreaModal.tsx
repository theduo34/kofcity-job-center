import {Form, FormProps, message, Spin} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useEffect, useState} from "react";
import KjcModal from "../../../../../builders/KjcModal";

export interface ContactInputModalProps {
    open?: boolean;
    onOk?: (updatedProfessionalSummaryInfo: FieldType) => void;
    onCancel?: () => void;
    loading?: boolean;
    initialValues?: FieldType
}

type FieldType = {
    professional_summary: string;
};

const  ProfessionalSummaryTextAreaModal = (props: ContactInputModalProps) => {
    const [form] = Form.useForm();
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        form.setFieldsValue(props.initialValues);
    }, [props.initialValues, form]);

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        setIsSaving(true);
        try {
            console.log("Form Data Submitted:", formData);
            //.....
            setTimeout(() => {
                setIsSaving(false);
                if (props.onOk) {
                    props.onOk(formData);
                }
                message.success("Professional summary updated!");
            }, 2000);
        } catch (err) {
            console.log("Error:", err);
            setIsSaving(false);
        }
    };

    const handleSave = () => {
        form.submit();
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] =  () => {
        //.....
    }


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
                        { isSaving && ( "Updating...")}
                    </div>
                ) : (
                    <div className="flex flex-col h-full min-h-screen">
                        <div className="flex items-center fixed top-0 left-0 right-0 py-4 text-xl bg-kjcBtn-200 md:text-2xl font-semibold px-4 md:px-8 border-b-2 border-gray-200 z-10">
                            Edit professional summary
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
                                        <div className="flex flex-col justify-end space-x-4 mt-4">
                                            <div>
                                                <Form.Item
                                                    name={"professional_summary"}
                                                >
                                                    <TextArea
                                                        showCount
                                                        maxLength={1000}
                                                        placeholder=""
                                                        style={{ height: 200, resize: 'none' }}
                                                    />
                                                </Form.Item>
                                            </div>
                                           <div className={"flex items-center justify-between"}>
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

export default ProfessionalSummaryTextAreaModal;
