import React from "react";
import { Flex, Text, Input, Icon, Stack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="orange.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW="400"
        alignSelf="center"
        color="gray.200"
        pos="relative"
        bg="gray.800"
        rounded="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400",
          }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <Stack
          spacing="9"
          direction="row"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderRightColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </Stack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Delfio Francisco</Text>
            <Text color="gray.300" fontSize="small">delfio_eu@hotmail.com</Text>
          </Box>

          <Avatar size="md" name="Delfio Francisco" />
        </Flex>
      </Flex>
    </Flex>
  );
}
