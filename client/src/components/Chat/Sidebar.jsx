import { Button } from "@chakra-ui/button";
import { ChatIcon } from "@chakra-ui/icons";
import {
    Circle,
    Divider,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";
import { Tab, TabList } from "@chakra-ui/tabs";
import { useContext } from "react";
import AddFriendModal from "./AddFriendModal";
import { FriendContext } from "./Home";

const Sidebar = () => {
    const { friendList } = useContext(FriendContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <VStack py="1.4rem">
                <HStack justify="space-evenly" w="100%">
                    <Heading size="md">Add Friend</Heading>
                    <Button onClick={onOpen}>
                        <ChatIcon />
                    </Button>
                </HStack>
                <Divider />
                <VStack as={TabList}>
                    {friendList.map((friend, idx) => (
                        <HStack as={Tab} key={`friend:${idx}`}>
                            <Circle
                                bg={"" + friend.connected === "true" ? "green.700" : "red.500"}
                                w="15px"
                                h="15px"
                            />
                            <Text>{friend.username}</Text>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
            <AddFriendModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Sidebar;
