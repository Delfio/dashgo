import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiDeleteBin2Line, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/SideBar";
import handleFormatDate from "../../utils/formatDate";
import { useQuery } from "react-query";
import IUser from "../../types/IUser";

export default function UserList() {
  const formater = handleFormatDate();

  const { data, isLoading, error } = useQuery("@dashgo-users-list", () => {
    return fetch("http://localhost:3000/api/users")
      .then((_resp) => _resp.json())
      .then((_data) => {
        const { users } = _data;

        return Array.from(users).map((_user: IUser) => ({
          ..._user,
          created_at: formater(_user.created_at),
        }));
      });
  });

  console.log(data);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const usuarios = [
    {
      id: 1,
      name: "Delfio Francisco 1",
      email: "delfio_eu@hotmail.com",
      data: "01/03/2001",
    },
    {
      id: 2,
      name: "Francisco Delfio 1",
      email: "delfio_eu2@hotmail.com",
      data: "03/03/2001",
    },
    {
      id: 3,
      name: "Delfio Delfio 2",
      email: "delfio_eu3@hotmail.com",
      data: "04/03/2001",
    },
  ];
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" radioGroup="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Adicionar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados ! do usuário</Text>
            </Flex>
          ) : (
            <React.Fragment>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="orange" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((_el) => (
                    <Tr key={String(_el.id)}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="orange" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{_el.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {_el.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{_el.created_at}</Td>}
                      <Td>
                        <Stack direction="row">
                          <IconButton
                            aria-label="Editar usuário"
                            colorScheme="blue"
                            icon={<Icon as={RiPencilLine} />}
                          />
                          <IconButton
                            aria-label="Inativar usuário"
                            colorScheme="red"
                            icon={<Icon as={RiDeleteBin2Line} />}
                          />
                        </Stack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </React.Fragment>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
