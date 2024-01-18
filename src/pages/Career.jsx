import React from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react";
import joan from "../assets/joan.jpeg";
import Transition from "../Transition";
import ProjectCard from "../components/ProjectCard";
import espcharts from "../assets/espcharts.png";
import burger from "../assets/burger.png";
import careercrush from "../assets/ccweb.png";
import Footer from "../layout/Footer";
const steps = [
  {
    title: "2020",
    description: "Started Bachelor in Computer Science - A.Xh University",
  },
  { title: "2021", description: "Customer Advisor - Neptun" },
  { title: "2022", description: "Customer Advisor - Neptun" },
  { title: "2023 Q1", description: "Exchange Program - Sofia, Bulgaria" },
  {
    title: "2023 Q2",
    description: "Finished Bachelor in Computer Science - A.Xh University",
  },
  { title: "2023 Q3", description: "Software Engineering Internship - Taleas" },
  {
    title: "2023 Q3",
    description: "Started Masters in Computer Science - FSHN Tirana",
  },
  { title: "2023 Q4", description: "Junior Software Engineer - Tegeria" },
  { title: "???", description: "???" },
];
export default function Career() {
  const { activeStep } = useSteps({
    index: 8,
    count: steps.length,
  });
  return (
    <Transition>
      <Box
        bg="blackBrand.100"
        w="100%"
        p={4}
        as="main"
        h="100%"
        color="white"
        overflow={"auto"}
        mb={10}
      >
        <Flex
          p={5}
          mt={10}
          justifyContent="center"
          alignItems={"center"}
          gap={10}
          flexDir={"column"}
        >
          <Image src={joan} boxSize="350px" />
          <VStack alignItems={"flex-start"} mb={20}>
            <Heading size="lg" borderBottom={"5px solid #313134"}>
              Timeline
            </Heading>
            <Stepper
              index={activeStep}
              orientation="vertical"
              height={"300px"}
              gap={0}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={"?"}
                    />
                  </StepIndicator>
                  <Box flexShrink={0}>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription color="blackBrand.300">
                      {step.description}
                    </StepDescription>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </VStack>
          <Box mt={"10px"}>
            <HStack gap={10}>
              <ProjectCard
                image={espcharts}
                objectPosition={"top"}
                title={"ESPCHarts"}
                description={"Esports Tournament Manager"}
              />
              <ProjectCard
                image={burger}
                title={"Not On My Burger"}
                description={"Arcade Style Game made in Godot"}
              />
              <ProjectCard
                image={careercrush}
                title={"CareerCrush"}
                description={"Job Matching Application"}
              />
            </HStack>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </Transition>
  );
}
