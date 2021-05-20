import React from "react";

import { AppContainer, Quote, Team } from "../components";

import { Box, Heading, Paragraph } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Internship 2021</Heading>
        <Heading level={2} margin="none">
          HPE Experience Studio
        </Heading>
        <Paragraph fill>
          We are really excited to welcome our 2021 interns to the HPE
          Experience studio!
        </Paragraph>
        <Team />
      </Box>
      <Quote />
    </AppContainer>
  );
}
