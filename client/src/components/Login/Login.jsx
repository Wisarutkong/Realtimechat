import {
    Button,
    ButtonGroup,
    VStack,
    Text,
    GridItem,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
// import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import TextField from "../TextField";
import * as Yup from "yup";
import '../../styles/login.css'
import logingoogle from '../../img/google 1.svg'
import loginfacebook from '../../img/facebook 1.svg'
import logingmail from '../../img/gmail (1) 1.svg'
import loginapple from '../../img/apple-logo 1.svg'
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";

const Login1 = () => {
    const { setUser } = useContext(AccountContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // const formik = useFormik({});
    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required("Username required!")
                    .min(6, "Username too short!")
                    .max(28, "Username too long!"),
                password: Yup.string()
                    .required("Password required!")
                    .min(6, "Password too short!")
                    .max(28, "Password too long!")
                
            })}
            onSubmit={(values, actions) => {
                const vals = { ...values };
                actions.resetForm();
                fetch("http://localhost:4000/auth/login", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(vals),
                })
                    .catch(err => {
                        return;
                    })
                    .then(res => {
                        if (!res || !res.ok || res.status >= 400) {
                            return;
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (!data) return;
                        setUser({ ...data });
                        if (data.status) {
                            setError(data.status);
                        } else if (data.loggedIn) {
                            navigate("/home");
                        }
                    });
            }}
        >
            {(formik) => (
                <div className="login-all">
                    <VStack
                        as={Form}
                        // w={{ base: "90%", md: "280px" }}
                        // m="auto"
                        // justify-content="flex-start"
                        // h="100vh"
                        // spacing="1rem"
                        className="containerlogin"
                        onSubmit={formik.handleSubmit}
                    >
                        {/* <div className="containerlogin"> */}
                            {/* <Heading className="login-title">Login</Heading> */}
                            <div className="login-title">
                                <h1>Login</h1>
                            </div>
                            <div className="login-deatail">
                                <p>Welcome to login we're hope you enjoy!</p>
                            </div>
                            <div className="login-username">
                                <h2>USERNAME</h2>
                                <TextField
                                    w={{ base: "90%", md: "280px" }}
                                    height="30px"
                                    className="textbox"
                                    name="username"
                                    placeholder=""
                                    autoComplete="off"
                                />
                            </div>

                            <div className="login-password">
                                <h2>PASSWORD</h2>
                                <TextField
                                    w={{ base: "90%", md: "280px" }}
                                    height="30px"
                                    className="textbox"
                                    name="password"
                                    placeholder=""
                                    autoComplete="off"
                                    type="password"
                                />
                            </div>
                            <Text as="i" color="red.500" >
                                {error}
                            </Text>

                            <ButtonGroup className="btn-login">
                                <Button className="btn-submit" colorScheme="blue" type="submit">
                                    <p>Log in</p>
                                </Button>
                                {/* <Button onClick={() => navigate("/register")}>
                                    Create Account
                                </Button> */}
                            </ButtonGroup>
                            <div className='login-register'>
                                <Link to="/register">Register?</Link>
                            </div>
                            
                            {/* <div className="or-title">
                                <h3>OR</h3>
                            </div>
                            <div className="login-with">
                                <div className="login-google">
                                    <a href="#" className="joinchat"><img src={logingoogle} alt="" />Login with google</a>
                                </div>
                                <div className="login-gmail">
                                    <a href="#" className="joinchat"><img src={logingmail} alt="" />Login with gmail</a>
                                </div>
                                <div className="login-facebook">
                                    <a href="#" className="joinchat"><img src={loginfacebook} alt="" />Login with facebook</a>
                                </div>
                                <div className="login-apple">
                                    <a href="#" className="joinchat"><img src={loginapple} alt="" />Login with apple</a>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </VStack>
                </div>
            )}
        </Formik >
    );
};

export default Login1;
