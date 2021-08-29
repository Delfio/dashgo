import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { cloneElement } from "react";

type ActiveLinkProps = LinkProps & {
  children: React.ReactElement;
};

export default function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = (() => {
    if (
      (!!rest.href && asPath.includes(rest.href.toString())) ||
      (!!rest.as && asPath.includes(rest.as.toString()))
    ) {
      return true;
    }

    return false;
  })();

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
