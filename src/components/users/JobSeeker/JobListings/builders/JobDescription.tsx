// import {Bookmark, CircleArrowOutUpRight} from "lucide-react";
// import {EnvironmentOutlined} from "@ant-design/icons";
// import {Col} from "antd";
//
// // interface JobDescriptionProps {
// //     key: string,
// //     title: string,
// //     location: string,
// //     daysPosted: string,
// //     companyName: string,
// //     description: string[],
// //
// // }
// const JobDescription = () => {
//     return(
//         <>
//             <Col
//                 xs={{ span: 24 }}
//                 sm={{ span: 24 }}
//                 md={{ span: 16, offset: 4 }}
//                 lg={{ span: 8, offset: 8 }}
//                 className=""
//             >
//                 <div
//                     key={""}
//                     className={""}>
//                     <div className={"p-4 items-center sticky top-0 bg-white space-y-4"}>
//                         <div className={"flex items-center justify-between"}>
//                             <div className={"flex items-center space-x-4"}>
//                                 <p className={"flex items-center justify-center text-white h-12 w-12 rounded-lg bg-kjcBtn-900"}>B</p>
//                                 <h2 className={"font-semibold text-lg items-center font-balance"}>
//                                     props.title
//                                 </h2>
//                             </div>
//                             <div>
//                                 <Bookmark/>
//                             </div>
//                         </div>
//                         <p>
//                             <ul className={"flex items-center list-disc justify-around"}>
//                                 <li className={"capitalize"}><EnvironmentOutlined
//                                     style={{fontSize: "16px"}}/> props.location</li>
//                                 <li>props.daysPosted</li>
//                             </ul>
//                         </p>
//                         <div
//                             className={"flex items-center justify-center w-full py-3 bg-kjcBtn-200 space-x-2 rounded-lg hover:bg-kjcBtn-300"}>
//                             <CircleArrowOutUpRight size={16}/>
//                             <span className="items-center font-semibold text-xl">Apply</span>
//                         </div>
//                     </div>
//
//                     <div className={"items-center p-4 space-y-4"}>
//                         <h1 className={"font-normal text-2xl"}>props.companyName</h1>
//                         <p>description</p>
//                     </div>
//
//                 </div>
//             </Col>
//         </>
//     )
// }
// export default JobDescription;