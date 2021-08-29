import React from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import useSideBarDrawer from "../../hooks/useSideBarDrawer";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
  
  const {
    onOpen
  } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr={2}
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
}
