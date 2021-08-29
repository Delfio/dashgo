import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type INavSectionProps = {
    children: React.ReactNode;
    title: string;
    selected: boolean;
}

export default function NavSection({children, title, selected}: INavSectionProps) {
    return (
        <Box>
          <Text fontWeight="bold" color={selected ? "blue.500": "gray.400"} fontSize="small">
            {title}
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>
        </Box>
    )
}
