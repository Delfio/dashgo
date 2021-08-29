import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type SideBarDrawerProps = {
  children: React.ReactNode;
};

type SideBarDrawerContextData = UseDisclosureReturn;

export const SideBarDrawerContexts = React.createContext({} as SideBarDrawerContextData);

export default function SidBarDrawerContexts({ children }: SideBarDrawerProps) {
    const disclosure = useDisclosure();
    const router = useRouter();

    React.useEffect(() => {
      disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    return (
    <SideBarDrawerContexts.Provider value={disclosure}>
      {children}
    </SideBarDrawerContexts.Provider>
  );
}
