import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {Col, Row} from "antd";
import {SlidersHorizontal} from "lucide-react";
import SearchModal from "./SearchModal.tsx";
import {useState} from "react";
import MediumFilterListedJob from "./builders/MediumFilterListedJob.tsx";
import LargeFilterListedJob from "./builders/LargeFilterListedJob.tsx";
import ExtraLargeFilterListedJob from "./builders/ExtraLargeFilterListedJob.tsx";

export type bookmarkedStateProps = {
    bookmarkedJob: { [key: string]: boolean};
    toggleBookmark: (key: string) => void;
}

export interface FilterCriteriaProps {
    role_level?: string,
    industry?: string,
    location?: string,
    job_type?: string,
    remote_only?: boolean,
}

const JobListings = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>({});
    const [filterCriteria, setFilterCriteria] = useState<FilterCriteriaProps>({});

    const handleFilterClick = () => {
        setShowModal(true);
    }

    const handleFilterApply = (values: FilterCriteriaProps) => {
        setFilterCriteria(values);
        setShowModal(false);
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    return(
        <>
            <div>
                <div className="items-center py-4 md:py-8 px-0 md:px-8 lg:px-12 text-lg md:text-xl lg:text-3xl shadow-md font-semibold text-black bg-kjcBtn-300">
                    <h1 className="px-4 md:px-12 mx-0 md:ms-4 lg:ms-6 xl:ms-8">
                        Search results for
                        <span className="text-white mx-3">Most popular jobs in Koforidua</span>
                    </h1>
                </div>

                {/* Filter search */}
                <Row>
                    <Col
                        xs={{span: 24}}
                        sm={{span: 24}}
                        md={{span: 20, offset: 2}}
                        lg={{span: 14, offset: 5}}
                        xl={{span: 18, offset: 3}}
                        className="lg:py-12 py-8 px-4 md:px-8 lg:px-0"
                    >
                        <div className="items-center leading-normal space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="py-2 text-lg">All results</div>
                                <div
                                    className="py-2 md:py-3 px-4 md:px-4 rounded-lg bg-amber-50 hover:bg-amber-100 cursor-pointer ease-in-out"
                                    onClick={handleFilterClick}
                                >
                                    <p className="flex items-center justify-between">
                                        <span className="items-center px-2">
                                            <SlidersHorizontal/>
                                        </span>
                                        <span className="text-md font-bold px-2">Filter</span>
                                    </p>
                                </div>
                            </div>

                            {/* Job listings based on device width */}
                            <div className="items-center">
                                <div>
                                    <div className="block xl:hidden">
                                        <MediumFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark}/>
                                    </div>
                                    <div className="hidden xl:block 2xl:hidden">
                                        <LargeFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark}/>
                                    </div>
                                    <div className="hidden 2xl:block">
                                        <ExtraLargeFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark} filterCriteria={filterCriteria}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SearchModal
                            open={showModal}
                            onOk={formValues => handleFilterApply(formValues)}
                            onCancel={handleCancel}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default withBaseLayout(JobListings);
