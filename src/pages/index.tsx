import React from "react";
import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleLogin: SubmitHandler<SignInFormData> = React.useCallback(
    async (values, _) => {
      await new Promise((resolv) => setTimeout(resolv, 2000))
      console.log(values);
    },
    []
  );

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
        onSubmit={handleSubmit(handleLogin)}
      >
        <Stack spacing={4}>
          <Input
            label="Email"
            name="email"
            type="email"
            {...register("email")}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            {...register("password")}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt={6}
          colorScheme="orange"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
