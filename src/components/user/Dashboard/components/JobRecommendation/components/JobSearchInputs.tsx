import {Input} from 'antd';
import KjcSelectInput from "../../../../../../builders/KjcSelectInput";
import {getSearchInputSelects} from "../JobRecommendation.constants.tsx";



const JobSearchInputs = () => {

    const searchInputSelects = getSearchInputSelects();



    return (
        <>
            <div className="w-full flex items-center min-h-24 md:h-36">
                <div className={"hidden lg:flex items-center justify-center space-x-8 w-full lg:w-5/6 min-h-24 md:h-36 first: rounded-s-full last:rounded-e-full"}>
                    {
                        searchInputSelects.map((inputSelect) => (
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
