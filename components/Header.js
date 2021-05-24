import React, { useContext } from "react";
import Link from "next/link";

import {
  Box,
  Button,
  Header as HeaderGrommet,
  Text,
  Menu,
  Nav,
  ResponsiveContext,
} from "grommet";

import { Hpe } from "grommet-icons";

const items = [
  { label: "Intro", href: "/intro" },
  { label: "Designer", href: "/design" },
  {
    label: "Developer",
    href: "/dev",
  },
];

export const Header = () => {
  const size = useContext(ResponsiveContext);
  return (
    <HeaderGrommet
      background="background-front"
      pad={{ vertical: "medium", horizontal: "large" }}
    >
      <Link href="./">
        <Box
          direction="row"
          align="start"
          gap="medium"
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: "small" }}
          responsive={false}
        >
          <Hpe color="brand" aria-label={undefined} />
          <Box gap="xsmall" direction="row-responsive">
            <Text color="text-strong" weight="bold">
              HPE
            </Text>
            <Text color="text-strong">Experience Studio</Text>
          </Box>
        </Box>
      </Link>
      <Box>
        {size !== "small" ? (
          <Nav direction="row" justify="between" fill>
            {items.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  label={item.label}
                  // target={item.target}
                  // rel={item.rel}
                />
              </Link>
            ))}
          </Nav>
        ) : (
          <Menu label="Menu" items={items} />
        )}
      </Box>
    </HeaderGrommet>
  );
};
