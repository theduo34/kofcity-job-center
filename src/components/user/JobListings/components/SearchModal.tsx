import KjcModal from "../../../../builders/KjcModal";
import {Checkbox, Form, FormProps, Radio} from "antd";
import {
    getSearchInputSelects
} from "../../Dashboard/components/JobRecommendation/JobRecommendation.constants.tsx";

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

    const filterInputSelects = getSearchInputSelects();
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
                style={{ width: '100%', minHeight: '100%' }}
                className={"bg-white"}
            >
                <div className="relative h-screen items-center w-full min-h-screen bg-white">
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
                        className={"min-h-screen bg-white w-full"}
                    >
                        <div className="pt-16 pb-16 px-4 md:px-8 w-full bg-white">
                            <Form.Item<FieldType>
                                name={"remote_only"}
                                className={"items-center justify-start"}
                            >
                                <Checkbox className={"text-xl font-semibold items-center leading-tight px-2"}>Remote Jobs only</Checkbox>
                            </Form.Item>
                            <div className="flex flex-col md:flex-row items-start w-full justify-start md:justify-around">
                                {
                                    filterInputSelects.map((filterInput) => (
                                        <div className="items-center text-lg font-normal leading-normal">
                                            <h3 className="pt-4 font-semibold ps-2">{filterInput.name}</h3>
                                            <Radio.Group>
                                                {filterInput.options?.map((option) => (
                                                    <p className="text-2xl my-4">
                                                        <Radio value={option.value}>
                                                            {option.label}
                                                        </Radio>
                                                    </p>
                                                ))}
                                            </Radio.Group>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Footer buttons */}
                        <div className="fixed bottom-0 left-0 right-0 flex justify-end items-center space-x-8 p-4 bg-white border-t-2 border-gray-200 z-10">
                            <p className="font-semibold underline hover:text-kjcBtn-300 cursor-pointer" onClick={props.onCancel}>
                                Cancel
                            </p>
                            <p className="py-3 px-6 bg-kjcBtn-200 cursor-pointer rounded-lg hover:bg-kjcBtn-300 font-semibold" onClick={props.onOk}>
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
