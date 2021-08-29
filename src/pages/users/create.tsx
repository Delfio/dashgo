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

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" radioGroup="8" bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Adicionar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome completo" type="text" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="passwordConfirmation"
                label="Confirmação da senha"
                type="password"
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
