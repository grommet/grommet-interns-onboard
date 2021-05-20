import React from "react";

import { Box, Heading, Image, Text } from "grommet";

export const Team = () => (
  <Box
    direction="row"
    gap="large"
    round="large"
    pad={{ horizontal: "large", vertical: "medium" }}
  >
    <Box gap="medium">
      <Box
        round={{ size: "full", corner: "left" }}
        overflow="hidden"
        width="medium"
        height="medium"
        elevation="large"
      >
        <Image src="./amanda.jpeg" a11yTitle="Amanda" opacity="strong" />
      </Box>
      <Box align="end">
        <Heading level={3} margin="none" size="small">
          Amanda Dupell
        </Heading>
        <Text>Developer Intern</Text>
        <Text>Boston, MA</Text>
      </Box>
    </Box>
    <Box gap="medium">
      <Box
        round={{ size: "full", corner: "right" }}
        overflow="hidden"
        width="medium"
        height="medium"
        elevation="large"
      >
        <Image src="./kenny.jpeg" a11yTitle="Amanda" opacity="strong" />
      </Box>
      <Box>
        <Heading level={3} margin="none" size="small">
          Kenny Tran
        </Heading>
        <Text>Design Intern</Text>
        <Text>Sacramento, CA</Text>
      </Box>
    </Box>
  </Box>
);
