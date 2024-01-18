import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function RootLayout() {
  return (
    <Box h="100vh" overflow={"auto"} bg={"blackBrand.100"}>
      <NavBar />
      <Outlet />
    </Box>
  );
}
