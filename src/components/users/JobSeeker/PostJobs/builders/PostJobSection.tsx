import {MenuFoldOutlined} from "@ant-design/icons";
import {useState} from "react";
import {Drawer} from "antd";


export interface PostJobSectionProps {
    className?: string,
    children?: React.ReactNode,
}
const PostJobSection: React.FC<PostJobSectionProps> = ({className, children}) => {
    const [open,setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const showOpen = () => {
        setOpen(true);
        setLoading(true);

        setTimeout( () => {
            setLoading(false)
        }, 2000)
    }

    const onClose = () => {
        setOpen(false);
    }
    return(
        <>
            <div className="w-full flex flex-row min-h-screen p-4 md:p-0">

                {/*side bar*/}
                <div className={`bg-kjcBtn-950 text-white hidden lg:flex lg:w-[30%] xl:w-[15%]`}>

                </div>
                <div className={"w-full lg:w-[70] xl:w-[85%] p-0 md:p-6"}>
                    {/*mobile view drawer*/}
                    <p
                        className={"flex lg:hidden"}
                        style={{fontSize: "18px"}}
                        onClick={showOpen}
                    >
                        <MenuFoldOutlined/>
                    </p>
                    <Drawer
                        open={open}
                        onClose={onClose}
                        placement={"left"}
                        closable
                        loading={loading}
                    >

                    </Drawer>

                    {/*div to contain content */}
                    <div className={`w-full flex items-center justify-between py-4 md:p-8 ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostJobSection;