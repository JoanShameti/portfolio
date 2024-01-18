import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
export default function NavBar() {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      color={"white"}
      style={{ backdropFilter: "blur(10px)" }}
      bg="rgba(32, 32, 35, 0.7)"
      zIndex={2}
    >
      <Flex p={4} justifyContent={"center"} gap={6}>
        <Heading as={Link} to={"/"} size="md">
          Joan Shameti
        </Heading>
        <NavLink to={"/career"}>
          <Text _hover={{ borderBottom: "1px solid #4FD1C5" }}>Career</Text>
        </NavLink>
        <NavLink to={"/uses"}>
          <Text _hover={{ borderBottom: "1px solid #4FD1C5" }}>Uses</Text>
        </NavLink>
        <NavLink>
          <HStack
            gap={1}
            _hover={{ borderBottom: "1px solid #4FD1C5" }}
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:shametijoan@gmail.com";
              e.preventDefault();
            }}
            target="_blank"
          >
            <EmailIcon />
            <Text>Contact</Text>
          </HStack>
        </NavLink>
        <NavLink>
          <HStack gap={1} _hover={{ borderBottom: "1px solid #4FD1C5" }}>
            <FaGithub />
            <Text>Git</Text>
          </HStack>
        </NavLink>
      </Flex>
    </Box>
  );
}
