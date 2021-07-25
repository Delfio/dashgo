import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBar() {
  const menusOptions = React.useMemo(
    () => [
      {
        id: 1,
        title: "GERAL",
        menus: [
          {
            id: 1,
            title: "Dashboard",
            icon: RiDashboardLine,
            href: "#",
          },
          {
            id: 2,
            title: "Usuários",
            icon: RiContactsLine,
            href: "#",
          },
        ],
      },
      {
        id: 2,
        title: "AUTOMAÇÃO",
        menus: [
          {
            id: 1,
            title: "Formulários",
            icon: RiInputMethodLine,
            href: "#",
          },
          {
            id: 2,
            title: "Automação",
            icon: RiGitMergeLine,
            href: "#",
          },
        ],
      },
    ],
    []
  );

  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {menusOptions.map((_el) => (
          <NavSection title={_el.title} key={String(_el.id)}>
            {_el.menus.map((_opt) => (
              <NavLink
                key={String(_opt.id)}
                icon={_opt.icon}
                title={_opt.title}
              />
            ))}
          </NavSection>
        ))}
      </Stack>
    </Box>
  );
}
