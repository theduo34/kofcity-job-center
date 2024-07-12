import {useNavigate} from "react-router-dom";
import { Select } from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {getJobCategories, getJobTypes, professionOption} from "./PopularSearch.constants.tsx";

const PopularSearch = () => {
    const navigate = useNavigate();
    const jobs = getJobTypes(navigate)
    const jobCategories = getJobCategories(navigate)
    const professions = professionOption;

    return(
        <>
            <div className="items-center py-4">
                <div className="text-center space-y-4 md:space-y-8">
                    <div className="space-y-2">
                        <div className="font-bold text-2xl md:text-4xl">
                            Discover jobs in Koforidua
                        </div>
                        <div className="items-center justify-center text-red-600 text-base flex mx-auto space-x-2">
                            {
                                jobs.map((job, index) => (
                                    <div
                                        key={job.key}
                                        className="items-center leading-normal"
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
                    <div className="w-full item-center justify-center shadow-lg bg-white py-4">
                        <div className="flex flex-row items-center justify-around">
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
                            <div className={"items-center font-light text-4xl pb-4"}>popular searches</div>
                            <div className={"flex items-center flex-wrap flex-row gap-1 space-x-1 md:space-x-3 space-y-2"}>
                                {
                                    professions.map((profession, ) => (
                                        <div
                                            key={profession.value}
                                            className={"flex shadow-lg py-2 px-6 font-mono text-kjc-950 leading-normal cursor-pointer rounded-full"}>
                                            {profession.label}
                                            <span className={"items-center px-3"}><SearchOutlined/></span>
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