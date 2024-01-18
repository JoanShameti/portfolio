import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function PeripheralCard(props) {
  const CardMotion = motion(Card);
  return (
    <CardMotion
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      bg={"white"}
      overflow={"hidden"}
      borderRadius={"20px"}
      boxShadow="md"
      w={"400px"}
    >
      <Image
        src={props.image}
        objectFit={"cover"}
        {...props}
        maxW={{ base: "100%", sm: "400px" }}
        maxH={{ base: "100%", sm: "200px" }}
      />
      <CardBody>
        <Heading size={"md"}>{props.title}</Heading>
        <Text>{props.description}</Text>
      </CardBody>
    </CardMotion>
  );
}
