import KjcButton from "../../../../builders/KjcButton";
import {getNavHeaderAuthBtn} from "../NavHeader.constants.tsx";
import {useNavigate} from "react-router-dom";

/**
 * Renders the nav header btn component.
 *
 * @return {JSX.Element} The rendered nav header btn component.
 */
const NavHeaderAuthBtn = () => {
    const navigate = useNavigate();
    const headerAuthBtn = getNavHeaderAuthBtn(navigate);

    return(
        <>
            <div className="items-center justify-start space-x-1 md:space-x-4">
                {
                    headerAuthBtn.map((btn) => (
                            <KjcButton
                                onClick={btn.onClick}
                                className={`${btn.className} items-center justify-center text-xs md:text-md md:py-5 md:px-7 font-semibold leading-none`}
                            >
                                {btn.label}
                            </KjcButton>
                        )
                    )
                }
            </div>
        </>
    )
}
export default NavHeaderAuthBtn;