import { SlidersHorizontal } from 'lucide-react';
import {useState} from "react";
import SearchModal from "./components/SearchModal.tsx";


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
            <div className="items-center leading-normal">
                <div className={"flex items-center justify-between"}>
                    <div className={"text-lg md:text-xl "}>All results</div>
                    <div
                        className={"py-2 md:py-3 px-4 md:px-4 rounded-lg bg-kjcBtn-200 hover:bg-kjcBtn-300 cursor-pointer ease-in-out\""}>
                        <p
                            className={"flex items-center justify-between"}
                            onClick={ handleFilterClick}
                        >
                            <span className={"items-center px-2"}> <SlidersHorizontal/></span>
                            <span className={"text-md font-bold px-2"}>Filter</span>
                        </p>
                    </div>
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