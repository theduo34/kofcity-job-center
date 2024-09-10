import KjcModal from "../../../builders/KjcModal";
import {Checkbox, Form, Radio} from "antd";
import {getSearchInputSelects} from "../Dashboard/components/JobRecommendation/JobRecommendation.constants.tsx";
import {FilterCriteriaProps} from "./JobListings.tsx";

export interface SearchModalProps {
    title?: string;
    open?: boolean;
    //eslint-disable-next-line
    onOk?: (values: any) => void;
    onCancel?: () => void;
}

const SearchModal = (props: SearchModalProps) => {
    const [form] = Form.useForm();
    const filterInputSelects = getSearchInputSelects();

    const onFinish = (values: FilterCriteriaProps) => {
        try {
            if (props.onOk) {
                props.onOk(values);
            } else {
                console.warn('onOk prop is not defined.');
            }
        } catch (err) {
            console.error('Error occurred while applying filter:', err);
        }
        console.log(values)
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
                width={"100%"}
                style={{ width: '100%', minHeight: '100%' }}
                className="bg-white"
            >
                <div className="relative h-screen items-center w-full min-h-screen bg-white">
                    <div className="fixed top-0 left-0 right-0 py-4 text-xl md:text-2xl font-semibold items-center px-4 md:px-8 border-b-2 border-gray-200 bg-white z-10">
                        Filters
                    </div>

                    <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        className="min-h-screen bg-white w-full"
                    >
                        <div className="pt-16 pb-16 px-4 md:px-8 w-full bg-white">
                            <Form.Item name="remote_only" valuePropName="checked">
                                <Checkbox className="text-xl font-semibold items-center leading-tight px-2">
                                    Remote Jobs only
                                </Checkbox>
                            </Form.Item>

                            <div className="flex flex-col md:flex-row items-start w-full justify-start md:justify-around">
                                {filterInputSelects.map((filterInput) => (
                                    <div className="items-center text-lg font-normal leading-normal" key={filterInput.name}>
                                        <h3 className="pt-4 font-semibold ps-2">{filterInput.name}</h3>
                                        <Form.Item name={filterInput.name}>
                                            <Radio.Group>
                                                {filterInput.options?.map((option) => (
                                                    <p className="text-2xl my-4" key={option.value}>
                                                        <Radio value={option.value}>
                                                            {option.label}
                                                        </Radio>
                                                    </p>
                                                ))}
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 flex justify-end items-center space-x-8 p-4 bg-white border-t-2 border-gray-200 z-10">
                            <p className="font-semibold underline hover:text-kjcBtn-300 cursor-pointer" onClick={props.onCancel}>
                                Cancel
                            </p>
                            <p className="py-3 px-6 bg-kjcBtn-200 cursor-pointer rounded-lg hover:bg-kjcBtn-300 font-semibold" onClick={form.submit}>
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
