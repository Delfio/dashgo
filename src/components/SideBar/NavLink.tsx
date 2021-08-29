import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import NextLink from 'next/link';

type INavLinkProps = LinkProps & {
    icon: IconType;
    title: string;
}

export default function NavLink({icon, title, ...rest}: INavLinkProps) {
  return (
    <>
    <NextLink href={rest.href || "#"} passHref>
      <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </Link>
      </NextLink>
    </>
  );
}
