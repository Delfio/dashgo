import { Button } from "@chakra-ui/react";
import React from "react";

type IPaginationItemProps = {
  isCurrent?: boolean;
  page: string;
};

export default function PaginationItem({
  isCurrent,
  page,
}: IPaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="orange"
        disabled
        _disabled={{
          bg: "orange.500",
          cursor: "default",
        }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {page}
    </Button>
  );
}
