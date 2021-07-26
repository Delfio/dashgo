import { Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <>
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="orange.500">
          .
        </Text>
      </Text>
    </>
  );
}
