import {Input, Select} from 'antd';
import KjcSelectInput from "../../../../../../builders/KjcSelectInput";

export interface onSearchInputSelectProps {
    name?: string,
    key?: string,
    options?: { value: string, label: string }[],
    onSearchChange?: (value: string) => void,
}

const JobSearchInputs = () => {

    const onSearchInputSelects: onSearchInputSelectProps[] = [
        {
            name: "Job Type",
            key: "jobType",
            onSearchChange: () => {},
            options: [
                { value: "remote", label: "Remote" },
                { value: "onSite", label: "On-site" },
                { value: "hybrid", label: "Hybrid" }
            ],
        },
        {
            name: "Location",
            key: "location",
            onSearchChange: () => {},
            options: [
                { value: "location1", label: "Location one" },
                { value: "location2", label: "Location two" },
                { value: "location3", label: "Location three" }
            ],
        },
        {
            name: "Salary",
            key: "salary",
            onSearchChange: () => {},
            options: [
                { value: "$10/hr - $20/hr", label: "$10/hr - $20/hr" },
                { value: "$21/hr - $30/hr", label: "$21/hr - $30/hr" },
                { value: "$31/hr - $40/hr", label: "$31/hr - $40/hr" },
                { value: "$41/hr - $50/hr", label: "$41/hr - $50/hr" },
                { value: "$50/hr plus+", label: "$50/hr plus+" }
            ],
        },
        {
            name: "Role",
            key: "role",
            onSearchChange: () => {},
            options: [
                { value: "entryLevel", label: "Entry level" },
                { value: "midLevel", label: "Mid level" },
                { value: "seniorLevel", label: "Senior level" },
                { value: "executiveLevel", label: "Executive level" },
                { value: "c-level", label: "C-level/Top Executive" },
                { value: "otherRoles", label: "Other roles" }
            ],
        },
    ];

    return (
        <>
            <div className="w-full flex items-center min-h-24 md:h-36">
                <div className={"hidden lg:flex items-center justify-center space-x-8 w-full lg:w-5/6 min-h-24 md:h-36 first: rounded-s-full last:rounded-e-full"}>
                    {
                        onSearchInputSelects.map((inputSelect) => (
                            <KjcSelectInput
                                key={inputSelect.key}
                                name={inputSelect.key}
                                className={"w-72 h-16 text-2xl rounded-none font-semibold focus:outline-amber-300 active:border-gray-500 hover:border-gray-100 hover:z-10 hover:rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"}
                                placeholder={inputSelect.name}
                                options={inputSelect.options}
                                onChange={inputSelect.onSearchChange}
                            />
                        ))
                    }
                </div>

                <div className={"w-full lg:hidden"}>
                    <Input
                        className={"w-full text-xl rounded-full h-16 active:border-gray-500 hover:border-gray-100  hover:z-10 hover:rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"}
                        allowClear
                        placeholder="Search for jobs here"
                    />
                </div>
            </div>
        </>
    );
}

export default JobSearchInputs;
