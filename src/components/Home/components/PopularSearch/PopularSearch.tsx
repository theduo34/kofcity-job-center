import {useNavigate} from "react-router-dom";
import { Select } from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {getJobCategories, getJobTypes, industryOption, professionOption} from "./PopularSearch.constants.tsx";

const PopularSearch = () => {
    const navigate = useNavigate();
    const jobs = getJobTypes(navigate)
    const jobCategories = getJobCategories(navigate)
    const professions = professionOption;
    const industry = industryOption;
    const popularSearch = [ ...industry, ...professions];

    return(
        <>
            <div className="items-center py-4">
                <div className="space-y-8 md:space-y-12">
                    <div className="space-y-2">
                        <div className="font-mono  text-center text-pretty text-lg md:text-xl lg:text-2xl capitalize">
                            Discover jobs in Koforidua
                        </div>
                        <div className="items-center justify-center text-red-600 text-base flex mx-auto space-x-2">
                            {
                                jobs.map((job, index) => (
                                    <div
                                        key={job.key}
                                        className="text-xs md:text-md font-semibold items-center leading-normal"
                                        onClick={job.onClick}
                                    >
                                        {job.label}
                                        {
                                            index < jobs.length - 1 &&
                                            <span className="px-2 text-kjc-950">|</span>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full item-center justify-center shadow-lg bg-white py-4 px-0 overflow-x-hidden">
                        <div className="w-full flex text-sm items-center justify-around">
                            {
                                jobCategories.map((category) => (
                                  <Select
                                      value={category.label}
                                      key={category.key}
                                      options={category.options}
                                      onClick={category.onClick}
                                  />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center py-4">
                        <div>
                            <div className={"flex items-center justify-center font-light text-2xl md:text-3xl pb-4"}>popular searches</div>
                            <div className={"flex items-center flex-wrap flex-row gap-3"}>
                                {
                                    popularSearch.map((profession, ) => (
                                        <div
                                            className={"flex shadow-lg px-0 py-1 md:py-2 md:px-6 font-semibold cursor-pointer rounded-full transition delay-100 hover:-translate-y-1 hover:scale-110 duration-300"}>
                                            {profession.label}
                                            <span className={"items-center ms-1 md:ms-3"}><SearchOutlined/></span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default PopularSearch;