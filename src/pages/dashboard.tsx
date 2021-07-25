import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

// import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
};

export default DashBoard;
