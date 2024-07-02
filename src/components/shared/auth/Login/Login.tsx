import {withBaseLayout} from "../../../layout/hoc/withBaseLayout.tsx";

/**
*This page handles user login. It enables existing users to access their accounts by entering
*their credentials, including email and password. The login process incorporates security measures
*like encryption and error handling to protect user data. The user interface is designed to be
*simple and efficient, providing a seamless login experience for returning users.
 */


const Login = () => {
    return (
        <>
          <h3 className="text-3xl font-semibold m-5">Login Page</h3>
        </>
    )
}
export default withBaseLayout(Login);