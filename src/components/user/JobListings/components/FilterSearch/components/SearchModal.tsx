import KjcModal from "../../../../../../builders/KjcModal";
import {Checkbox, Form, FormProps} from "antd";

export interface SearchModalProps {
    title?: string;
    open?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

type FieldType = {
    remote_only: string,
    job_type: string,
    industry: string,
    location: string,
    role_level: string,
}

const SearchModal = (props: SearchModalProps) => {
    const [form] = Form.useForm();
    const onFinish: FormProps<FieldType>["onFinish"] = (value) => {
        console.log(value)
    }

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (value) => {
        console.log(value)
    }
    return (
        <>
            <KjcModal
                onOk={props.onOk}
                onCancel={props.onCancel}
                open={props.open}
                centered
                closable
                footer={null}
                width={"100%"}
                style={{ width: '100%', height: '100%' }}
            >
                <div className="relative h-screen items-center w-full">
                    {/* Top nav section */}
                    <div className="fixed top-0 left-0 right-0 py-4 text-xl md:text-2xl font-semibold items-center px-4 md:px-8 border-b-2 border-gray-200 bg-white z-10">
                        Filters
                    </div>

                    {/* Content section */}
                    <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <div className="pt-16 pb-16 px-4 md:px-8">
                            <Form.Item<FieldType>
                                name={"remote_only"}
                                className={"items-center justify-start"}
                            >
                                <Checkbox className={"text-xl font-normal items-center leading-tight px-2"}>Remote Jobs only</Checkbox>
                            </Form.Item>
                            <div
                                className="flex flex-col md:flex-row items-start w-full justify-start md:justify-around">
                                <div>Industry</div>
                                <div>Job Type</div>
                                <div>Location</div>
                                <div>Role Level</div>
                            </div>
                        </div>

                        {/* Footer buttons */}
                        <div
                            className="fixed bottom-0 left-0 right-0 flex justify-end items-center space-x-8 p-4 bg-white border-t-2 border-gray-200 z-10">
                            <p
                                className="font-semibold underline hover:text-kjcBtn-300 cursor-pointer"
                                onClick={props.onCancel}
                            >
                                Cancel
                            </p>
                            <p
                                className="py-3 px-6 bg-kjcBtn-200 cursor-pointer rounded-lg hover:bg-kjcBtn-300 font-semibold"
                                onClick={props.onOk}
                            >
                                View Result
                            </p>
                        </div>
                    </Form>
                </div>
            </KjcModal>
        </>
    );
};

export default SearchModal;
