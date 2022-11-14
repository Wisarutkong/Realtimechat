import { Button, ModalOverlay, Heading } from "@chakra-ui/react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
}
    from "@chakra-ui/modal";
import { Form, Formik } from "formik";
import TextField from "../TextField";
import socket from "../../socket"
import { useContext, useState } from "react";
import { useCallback } from "react";
import * as Yup from "yup";
import { FriendContext } from "./Home";

const AddFriendModal = ({ isOpen, onClose }) => {
    const [error, setError] = useState("");
    const closeModal = useCallback(
        () => {
            setError("");
            onClose();
        },
        [onClose],
    );
    const {setFriendList} = useContext(FriendContext);
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color='white'>Add a friend!</ModalHeader>
                <ModalCloseButton color='white' />
                <Formik
                    initialValues={{ friendName: "" }}
                    validationSchema={Yup.object({
                        friendName: Yup.string()
                            .required("Username required!")
                            .min(6, "Invalid username!")
                            .max(28, "Invalid username!")
                    })}
                    onSubmit={values => {
                        socket.emit(
                            "add_friend",
                            values.friendName,
                            ({ errorMsg, done, newFriend }) => {
                                if (done) {
                                    setFriendList(c =>[newFriend, ...c]);
                                    closeModal();
                                    return;
                                }
                                setError(errorMsg);
                            });
                    }}
                >
                    <Form>
                        <ModalBody>
                            <Heading
                                as="p"
                                color="red.500"
                                textAlign="center"
                                size="md"
                            >
                                {error}
                            </Heading>
                            <TextField
                                label="Friend's name"
                                placeholder="Enter friend's username.."
                                autoComplete="off"
                                name="friendName"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' type="submit">
                                Submit
                            </Button>
                        </ModalFooter>
                    </Form>
                </Formik>
            </ModalContent>
        </Modal>
    );
};

export default AddFriendModal