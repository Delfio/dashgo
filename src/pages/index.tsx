import React from "react";
import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p={8}
        rounded={8}
        direction="column"
      >
        <Stack spacing={4}>
          <Input label="Email" name="email" type="email" />
          <Input label="Senha" name="password" type="password" />
        </Stack>

        <Button type="submit" mt={6} colorScheme="orange" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
