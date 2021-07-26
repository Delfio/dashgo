import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
  const isWideVersion = useBreakpointValue({
    base: 'none',
    lg: 'block'
  });
    return (
        <Flex align="center" >
          <Box mr="4" textAlign="right" display={isWideVersion}>
            <Text>Delfio Francisco</Text>
            <Text color="gray.300" fontSize="small">delfio_eu@hotmail.com</Text>
          </Box>

          <Avatar size="md" name="Delfio Francisco" />
        </Flex>
    )
}
