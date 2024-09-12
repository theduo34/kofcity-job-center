import KjcModal from "../../../../../../../builders/KjcModal";


export interface SearchModalProps {
    title?: string;
    open?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}

const NextStageModal = (props: SearchModalProps) => {

    return (
        <>
            <KjcModal
                onOk={props.onOk}
                onCancel={props.onCancel}
                open={props.open}
                centered
                closable = {false}
                footer={null}
            >
                <div className="items-center justify-center space-y-8 p-4">
                    {/* Top nav section */}
                    <div className="flex items-center justify-center font-semibold text-xl">
                         Account Setup Complete!
                    </div>

                    {/* Content section */}
                    <div className={"items-center space-y-4"}>
                        <h2 className={"items-center font-semibold text-lg text-pretty"}>Congratulations! Your account has been successfully set up.</h2>
                        <p className={"text-lg "}>Ready to post a job? Click 'Proceed' to get started</p>
                    </div>
                    <div className={"flex items-center justify-center w-full py-2 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md cursor-progress delay-100 hover:shadow-lg"}>Proceed</div>
                </div>
            </KjcModal>
        </>
    );
};

export default NextStageModal;
