import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type INavSectionProps = {
    children: React.ReactNode;
    title: string
}

export default function NavSection({children, title}: INavSectionProps) {
    return (
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {title}
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>
        </Box>
    )
}
