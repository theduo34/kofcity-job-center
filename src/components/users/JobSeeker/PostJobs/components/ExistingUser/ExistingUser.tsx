import {withBaseLayout} from "../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import WithContentLayout from "../../../../../layout/hoc/WithContentLayout";
import {useNavigate} from "react-router-dom";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_POST_JOBS} from "../../../UserRoutes.constants.ts";
import {JOB_DETAILS_ROUTE_PATH} from "../../PostJobsRoutes.constants.ts";
import {useState} from "react";
import ClosedJobs from "./components/ClosedJobs.tsx";
import PostedJobs from "./components/PostedJobs.tsx";
import {FileDoneOutlined, PlusSquareOutlined, StopOutlined} from "@ant-design/icons";

interface ExistingUserOptionsProps {
    key?: string,
    label?: string,
    children?: React.ReactNode,
    onClick?: () => void,
    icon?: React.ReactNode,
}
const ExistingUser = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState<string>("")

    const handleSelectedItemChange = (itemKey: string, onClick?:() => void) => {
        setSelectedItem(itemKey);
        if(onClick) {
            navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${JOB_DETAILS_ROUTE_PATH}`)
        }
    }
    const existingUserOptions: ExistingUserOptionsProps [] = [
        {
            key: "posted_jobs",
            label: "Posted",
            children: <PostedJobs/>,
            icon: <FileDoneOutlined/>
        },
        {
            key: "new_post",
            label: "New",
            onClick:  () => navigate(``),
            icon: <PlusSquareOutlined/>
        },
        {
            key: "closed_jobs",
            label: "Closed ",
            children: <ClosedJobs/>,
            icon: <StopOutlined/>
        }

    ]
    return(
        <WithContentLayout>
            <div className={"items-center space-y-8"}>
                <div className="flex items-center gap-1 md:gap-8">
                    {
                        existingUserOptions.map(option => {
                            const isActive = selectedItem === option.key;
                            return(
                                <p
                                    onClick={() => handleSelectedItemChange(option.key as string, option.onClick)}
                                    key={option.key}
                                    className={`flex items-center justify-center font-semibold cursor-pointer border-2 text-sm md:text-md py-2 px-4 md:px-8  border-gray-500 rounded-full ${isActive? "bg-kjcBtn-200" : "hover:border-kjcBtn-950"}`}>
                                    {option.label} <span className={"ms-2"}>{option.icon}</span>
                                </p>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        existingUserOptions.map(option => (
                            <div
                                style={{ display: selectedItem === option.key ? "block" : "none" }}
                            >
                                {option.children}
                            </div>
                        ))
                    }
                </div>
            </div>
        </WithContentLayout>
    )
}
export default withBaseLayout(ExistingUser);