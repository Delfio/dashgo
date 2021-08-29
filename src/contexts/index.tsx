import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidBarDrawerContexts from "./SidBarDrawerContexts";
import { theme } from "../styles/theme";

export default function ContainerProvider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <SidBarDrawerContexts>{children}</SidBarDrawerContexts>
    </ChakraProvider>
  );
}
