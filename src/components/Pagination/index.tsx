import { Stack, HStack, Box } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";

export default function Pagination() {
  const paginationOpts = React.useMemo(
    () => [
      {
        page: "1",
        isCurrent: true,
      },
      {
        page: "2",
        isCurrent: false,
      },
      {
        page: "3",
        isCurrent: false,
      },
      {
        page: "4",
        isCurrent: false,
      },
      {
        page: "5",
        isCurrent: false,
      },
      {
        page: "6",
        isCurrent: false,
      },
    ],
    []
  );

  return (
    <Stack
      direction="row"
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {paginationOpts.map((_button) => (
          <PaginationItem
            key={_button.page}
            isCurrent={_button.isCurrent}
            page={_button.page}
          />
        ))}
      </HStack>
    </Stack>
  );
}
