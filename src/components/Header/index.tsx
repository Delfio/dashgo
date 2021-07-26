import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";

export default function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxW={1488}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
}
