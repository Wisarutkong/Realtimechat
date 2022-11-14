import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Button,
    ButtonGroup,
    // FormLabel,
    // Heading,
    // FormControl,
    // FormErrorMessage,
    // Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
// import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import TextField from "../TextField";
import * as Yup from "yup";
import "../../styles/register.css"
import { useContext, useState } from "react";
import { AccountContext } from "../AccountContext";



const SignUp = () => {
    const { setUser } = useContext(AccountContext)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // const formik = useFormik({});
    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            // validationSchema={Yup.object({
            //     username: Yup.string()
            //         .required("Username required!")
            //         .min(6, "Username too short!")
            //         .max(28, "Username too long!"),
            //     password: Yup.string()
            //         .required("Password required!")
            //         .min(6, "Password too short!")
            //         .max(28, "Password too long!")
            // })}
            onSubmit={(values, actions) => {
                const vals = { ...values };
                actions.resetForm();
                fetch("http://localhost:4000/auth/signup", {
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
                            navigate("/");
                        }
                    });
            }}
        >
            {(formik) => (
                <div className="register">
                    <VStack
                        as={Form}
                        // w={{ base: "90%", md: "500px" }}
                        // m="auto"
                        // justify="center"
                        // h="100vh"
                        // spacing="1rem"
                        onSubmit={formik.handleSubmit}
                    >
                        {/* <Heading>Sign Up</Heading> */}
                        {/* <Text as="p" color="red.50o0">
                        {error}
                        </Text> */}
                        <div className='create-forms'>
                            <div className='create-title'>
                                <h1>Create an account</h1>
                            </div>
                            <Text as="i" color="red.500" >
                                {error}
                            </Text>
                            <div className='create-register'>
                                <div className='create-username'>
                                    <p>USERNAME</p>
                                    <TextField
                                        w={{ base: "90%", md: "380px" }}
                                        height="30px"
                                        justify="center"
                                        className="textboxregister"
                                        name="username"
                                        placeholder=""
                                        autoComplete="off"
                                    />
                                </div>

                                {/* <TextField
                        name="email"
                        placeholder=""
                        autoComplete="off"
                        label="Email"
                    /> */}
                                <div className='create-password'>
                                    <p>PASSWORD</p>
                                    <TextField
                                        w={{ base: "90%", md: "380px" }}
                                        height="30px"
                                        className="textboxregister"
                                        name="password"
                                        placeholder=""
                                        autoComplete="off"
                                        type="password"
                                    />
                                </div>

                                {/* <TextField
                        name="confirmpassword"
                        placeholder=""
                        autoComplete="off"
                        label="Confirm Password"
                        type="password"
                    /> */}
                                <div className='btn-continue'>
                                    <ButtonGroup >
                                        <Button
                                            className="btn-submitregister"
                                            colorScheme="blue"
                                            fontSize="20px"
                                            fontWeight={400}
                                            type="submit">
                                            CONTINUE
                                        </Button>
                                        <Button
                                            className="btn-submitregister"
                                            colorScheme="blue"
                                            onClick={() => navigate("/")}
                                            fontSize="20px"
                                            fontWeight={400}
                                            leftIcon={<ArrowBackIcon />}>
                                            <h1>Back</h1>
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </VStack>
                </div>
            )}
        </Formik >
    );
};

export default SignUp;
