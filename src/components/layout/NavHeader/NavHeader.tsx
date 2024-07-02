import {useNavigate} from "react-router-dom";
import KjcImage from "../../../builders/KjcImage";


/**
 * Renders the top header component.
 *
 * @return {JSX.Element} The rendered top header component.
 */
const NavHeader = () => {
    const navigate = useNavigate();
    const handleOnLogoClick = () => {
        navigate('/')
    }
    return (
        <>
            <nav className="w-full text-center bg-white fixed-top">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <KjcImage
                            src= " "
                            alt="KcjImage"
                            className="w-24"
                            onClick={handleOnLogoClick}
                        />
                    </div>
                    <div className="flex items-center mx-auto text-center">

                    </div>
                    <div className="flex items-center justify-end">

                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavHeader;