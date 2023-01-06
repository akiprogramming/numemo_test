import { useRef } from "react";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stack,
  Box,
} from "@chakra-ui/react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
  NavLink,
} from "react-router-dom";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "lightgrey",
  };

  let activeClassName = "underline";

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        MENU
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">ぬめも</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <Stack spacing="24px">
              <Box className="1">
                {" "}
                <NavLink
                  to="/"
                  onClick={onClose}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </Box>
              <NavLink
                to="/about"
                onClick={onClose}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About NUMEMO
              </NavLink>
              <NavLink
                to="/other"
                onClick={onClose}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Other
              </NavLink>
            </Stack>
            <List spacing={15}>
              <NavLink
                to="/"
                onClick={onClose}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItem>Home</ListItem>
              </NavLink>
              <NavLink
                to="/about"
                onClick={onClose}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItem>About NUMEMO</ListItem>
              </NavLink>
              <NavLink
                to="/Other"
                onClick={onClose}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItem>Other</ListItem>
              </NavLink>
            </List>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
