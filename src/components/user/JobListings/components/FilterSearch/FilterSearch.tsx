import { SlidersHorizontal } from 'lucide-react';
import {useState} from "react";
import SearchModal from "./components/SearchModal.tsx";
import FilterListedJobs from "./components/FilterListedJobs.tsx";


const FilterSearch = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleFilterClick = () => {
        setShowModal(true);
    }
    const handleOk = () => {
        setShowModal(false);
    }
    const handleCancel = () => {
        setShowModal(false)
    }
    return(
        <>
            <div className="items-center leading-normal space-y-4 ">
                <div className={"flex items-center justify-between"}>
                    <div className={"py-2 text-lg"}>All results</div>
                    <div
                        className={"py-2 md:py-3 px-4 md:px-4 rounded-lg bg-amber-50 hover:bg-amber-100 cursor-pointer ease-in-out"}>
                        <p
                            className={"flex items-center justify-between"}
                            onClick={ handleFilterClick}
                        >
                            <span className={"items-center px-2"}> <SlidersHorizontal/></span>
                            <span className={"text-md font-bold px-2"}>Filter</span>
                        </p>
                    </div>
                </div>
                <div className={"items-center "}>
                    <FilterListedJobs/>
                </div>
            </div>
            <SearchModal
                open={showModal}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </>
    )

}
export default FilterSearch;