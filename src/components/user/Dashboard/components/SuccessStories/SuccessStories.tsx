import React, { useState } from 'react';
import WithContentLayout from "../../../../layout/hoc/WithContentLayout";
import { UserOutlined } from "@ant-design/icons";
import {getSuccessStories} from "./SuccessStories.constants.tsx";


const SuccessStories = () => {
    const storiesPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const stories = getSuccessStories();

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

    const totalPages = Math.ceil(stories.length / storiesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="items-center justify-center w-full">
                <div className="px-4 text-balance relative text-center text-xl md:text-2xl py-10 font-mono text-kjc-950 bg-amber-50 bg-opacity-80">
                    Real Stories, Real Success!!! Achieve Your Dreams with Us
                </div>
                <div className="absolute top-1 right-4"></div>

                <div className="items-center  bg-white">
                    <WithContentLayout className="items-center">
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between xl:justify-around space-y-14">
                            {currentStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="relative bg-kjcBtn-950 opacity-80 flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px] shadow-lg"
                                >
                                    <div className="p-8 absolute border-r-2 border-r-kjcBtn-950 -bottom-10 left-10 flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px] bg-white">
                                        <h1 className="absolute text-4xl text-balance top-10 left-8 items-center justify-start font-semibold">"</h1>
                                        <p>
                                            {story.quote}
                                        </p>
                                        <h1 className="absolute text-4xl bottom-10 right-8 items-center justify-start font-semibold">"</h1>
                                        <div className="absolute bottom-4 right-4">
                                            <h1 className="flex items-center">
                                                <UserOutlined /> {story.author}
                                            </h1>
                                            <p>{story.jobTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 flex justify-center">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 mx-1 border-0 rounded-lg ${currentPage === index + 1 ? 'bg-kjcBtn-300 text-white' : 'bg-white hover:bg-gray-200 '}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </WithContentLayout>
                </div>
            </div>
        </>
    );
};
export default SuccessStories;
