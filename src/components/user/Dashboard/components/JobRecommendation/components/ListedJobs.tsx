import {Pagination} from "antd";

const ListedJobs = () => {
    return(
        <>
            <div className={"flex flex-col lg:flex-row items-center justify-evenly"}>
                <div className={""}>
                    <Pagination defaultCurrent={6} total={300}/>
                </div>
            </div>
        </>
    )
}
export default ListedJobs