import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddBoxLine, RiCloseCircleLine } from "react-icons/ri";
import Input from "../../components/Form/Input";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default function CreateUser() {
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Formato do e-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digítos"),
    passwordConfirmation: yup
      .string()
      .oneOf([null, yup.ref("password")], "Senhas não batem"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = React.useCallback(
    async (values, _) => {
      await new Promise((resolv) => setTimeout(resolv, 2000));
      console.log(values);
    },
    []
  );

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          radioGroup="8"
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Adicionar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.name}
                name="name"
                label="Nome completo"
                type="text"
                {...register("name")}
              />
              <Input
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.password}
                name="password"
                label="Senha"
                type="password"
                {...register("password")}
              />
              <Input
                error={errors.passwordConfirmation}
                name="passwordConfirmation"
                label="Confirmação da senha"
                type="password"
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  rightIcon={<Icon as={RiCloseCircleLine} fontSize="20" />}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="orange"
                type="submit"
                isLoading={formState.isSubmitting}
                rightIcon={<Icon as={RiAddBoxLine} fontSize="20" />}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
