import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SidBarDrawerContexts from "./SidBarDrawerContexts";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ContainerProvider({ children }) {
  const queryClient = React.useMemo(() => {
    return new QueryClient();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidBarDrawerContexts>{children}</SidBarDrawerContexts>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
