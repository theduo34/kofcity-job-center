import { useState, useEffect } from "react";
import { Checkbox, Form } from "antd";
import {
    PlusCircleOutlined,
    CloseOutlined,
    EnvironmentOutlined,
    SolutionOutlined,
} from "@ant-design/icons";
import { jobTitles, regions } from "../builders/settingsPreference.ts";
import KjcInput from "../../../../../builders/KjcInput";
import KjcButton from "../../../../../builders/KjcButton";

const Settings = () => {
    const [formState, setFormState] = useState({
        titles: [] as string[],
        locations: [] as string[],
        remotePreference: false,
    });
    const [title, setTitle] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        console.log("User's form state updated:", formState);
    }, [formState]);

    const handleAddTitle = () => {
        if (title && formState.titles.length < 3) {
            setFormState((prevState) => ({
                ...prevState,
                titles: [...prevState.titles, title],
            }));
            setTitle("");
        }
    };

    const handleAddLocation = () => {
        if (region && city && formState.locations.length < 3) {
            if (!cities.includes(city)) {
                alert("Invalid city");
            } else {
                setFormState((prevState) => ({
                    ...prevState,
                    locations: [...prevState.locations, `${city}, ${region}`],
                }));
                setRegion("");
                setCity("");
            }
        }
    };

    const handleRegionChange = (value: string) => {
        setRegion(value);
        const selectedRegion = regions.find((r) => r.region === value);
        if (selectedRegion) {
            setCities(selectedRegion.cities!.filter((city) => city !== undefined));
        } else {
            setCities([]);
        }
    };

    //eslint-disable-next-line
    const handleRemotePreferenceChange = (e: any) => {
        setFormState((prevState) => ({
            ...prevState,
            remotePreference: e.target.checked,
        }));
    };

    return (
        <>
            <div>
                <h1 className="text-xl font-semibold px-4 md:px-0">Settings</h1>
            </div>

            <div className="w-full flex flex-col md:flex-row items-start justify-between ">
                <div className="w-full md:w-[28%] p-2 space-y-4">
                    <div className="flex items-start shadow-md px-4 py-8 rounded-lg">
                        <p className="w-16 h-16 flex items-center justify-center bg-gray-400 rounded-lg">AB</p>
                        <div className="w-full ms-4 flex flex-col">
                            <h2 className="flex items-center justify-between font-semibold text-lg">
                                Hi Emmanuel
                            </h2>
                            <p>Remote Opportunities</p>
                            <p>Accra</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[70%] p-4 shadow-md">
                    <Form className={"items-center space-y-8 md:space-y-12"}>
                        {/* Job Titles */}
                        <div className={"items-center "}>
                            <h2 className={"text-lg font-semibold mb-3"}>Preferred Job Titles</h2>
                            <label>Job title*</label>
                            <KjcInput
                                name="title"
                                placeholder="Job title"
                                className={"w-full h-12 mb-2"}
                                onChange={(value) => setTitle(value)}
                                suggestions={jobTitles.map(item => item.title)}
                            />
                            <KjcButton
                                className={"flex items-center justify-center py-2 px-8 bg-kjcBtn-200"}
                                onClick={handleAddTitle}
                                disabled={formState.titles.length >= 3}
                            >
                                <PlusCircleOutlined />
                                <span className={"text-lg font-semibold"}>Add</span>
                            </KjcButton>

                            <div>
                                <h3 className={"items-center capitalize my-2"}>
                                    {formState.titles.length < 3 ? "Add up to 3 job titles" : "3 entries maximum"}
                                </h3>
                                <div className={"flex flex-wrap items-center gap-2 md:gap-4"}>
                                    {formState.titles.map((item) => (
                                        <p
                                            key={jobTitles.find(t => t.title === item)?.key}
                                            className={"flex text-center items-center justify-center bg-neutral-200 px-4 hover:bg-neutral-300 shadow-lg cursor-pointer"}
                                        >
                                            <span className={"me-1"}><SolutionOutlined/></span>{item}
                                            <span
                                                className={"ms-4 cursor-pointer"}
                                                onClick={() => setFormState((prevState) => ({
                                                    ...prevState,
                                                    titles: prevState.titles.filter((title) => title !== item)
                                                }))}
                                            >
                                                <CloseOutlined />
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Job Locations */}
                        <div className={"items-center"}>
                            <h2 className={"text-lg font-semibold mb-3"}>Preferred Job Locations</h2>
                            <div className={"flex flex-col lg:flex-row w-full items-center justify-between mb-2 gap-4"}>
                                <div className={"w-full items-center"}>
                                    <label>Region*</label>
                                    <KjcInput
                                        name="region"
                                        placeholder="Select region"
                                        className={"w-full h-12 mb-2"}
                                        onChange={(value) => handleRegionChange(value)}
                                        suggestions={regions.map(r => r.region)}
                                    />
                                </div>
                                <div className={"w-full items-center"}>
                                    <label>City*</label>
                                    <KjcInput
                                        name="city"
                                        placeholder="City"
                                        className={"w-full h-12 mb-2"}
                                        onChange={(value) => setCity(value)}
                                        suggestions={cities}
                                    />
                                </div>
                            </div>
                            <KjcButton
                                className={"flex items-center justify-center py-2 px-8 bg-kjcBtn-200"}
                                onClick={handleAddLocation}
                                disabled={formState.locations.length >= 3}
                            >
                                <PlusCircleOutlined />
                                <span className={"text-lg font-semibold"}>Add</span>
                            </KjcButton>

                            <div>
                                <h3 className={"items-center capitalize my-2"}>
                                    {formState.locations.length < 3 ? "Add up to 3 job locations" : "3 entries maximum"}
                                </h3>
                                <div className={"flex flex-wrap items-center gap-2 md:gap-4"}>
                                    {formState.locations.map((item) => (
                                        <p
                                            key={item}
                                            className={"flex text-center items-center justify-center bg-neutral-200 px-4 hover:bg-neutral-300 shadow-lg cursor-pointer"}
                                        >
                                            <span className={"me-1"}><EnvironmentOutlined/></span>{item}
                                            <span
                                                className={"ms-4 cursor-pointer"}
                                                onClick={() => setFormState((prevState) => ({
                                                    ...prevState,
                                                    locations: prevState.locations.filter((loc) => loc !== item)
                                                }))}
                                            >
                                                <CloseOutlined />
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Remote Preference */}
                        <div className={"items-center w-full border-2 border-neutral-200 p-4"}>
                            <h2 className={"text-lg font-semibold mb-3"}>Remote Preferences</h2>
                            <p className={"text-lg "}>
                                <Checkbox
                                    className={"me-2"}
                                    name={"remotePreference"}
                                    onChange={handleRemotePreferenceChange}
                                    checked={formState.remotePreference}
                                />I'm interested in Remote Jobs in the Country
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Settings;
