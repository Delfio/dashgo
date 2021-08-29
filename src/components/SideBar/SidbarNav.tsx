import React from "react";
import { Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { useRouter } from "next/router";

export default function SidbarNav() {
  const [menuSelected, setMenuSelected] = React.useState('GERAL');

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
            href: "/dashboard",
          },
          {
            id: 2,
            title: "Usuários",
            icon: RiContactsLine,
            href: "/users",
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
  const { push } = useRouter();

  const handleSelectedMenu = React.useCallback((e) => {
    setMenuSelected(e.title);
    if(e.href !== "#") push(e.href);
  }, [push]);

  return (
    <Stack spacing="12" align="flex-start">
      {menusOptions.map((_el) => (
        <NavSection
          selected={_el.title === menuSelected}
          title={_el.title}
          key={String(_el.id)}
        >
          {_el.menus.map((_opt) => (
            <NavLink
              key={String(_opt.id)}
              icon={_opt.icon}
              title={_opt.title}
              onClick={() => handleSelectedMenu(_opt)}
            />
          ))}
        </NavSection>
      ))}
    </Stack>
  );
}
