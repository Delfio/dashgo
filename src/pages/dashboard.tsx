import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'

const Charts = Dynamic(() => import('react-apexcharts'), {
  ssr: false
});

// import { Container } from './styles';

const DashBoard: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    // stroke: {
    //   curve: 'smooth' // padrão
    // },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-03-18T00:00:00.000Z',
        '2021-03-19T00:00:00.000Z',
        '2021-03-20T00:00:00.000Z',
        '2021-03-21T00:00:00.000Z',
        '2021-03-22T00:00:00.000Z',
        '2021-03-23T00:00:00.000Z',
        '2021-03-24T00:00:00.000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };
  const series = [
    {
      name: 'Series 1',
      data: [31, 128, 10, 28, 51, 109]
    }
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p="8"
            bg="gray.800"
            radioGroup="8"
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Charts type="area" height={160} options={options} series={series} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            radioGroup="8"
            // pb=""
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Charts type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
