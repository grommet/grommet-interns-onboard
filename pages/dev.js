import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph, Text } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Developer Intro</Heading>
        <InternIntro
          src="./amanda.jpeg"
          name="Amanda Dupell"
          title="UI/UX Developer Intern"
          location="Boston, MA"
          start="May 17"
          email="amanda.dupell@hpe.com"
          linkedIn="https://www.linkedin.com/in/amanda-dupell-profile/"
        />
        <Paragraph size="large">
          You are expecting an exciting internship diving into the open-source
          world and the community of grommet.io, so far we have more than +3,700
          members on our slack channel, a great team, loads of enhancements
          requests and an exciting road-map for both grommet and the HPE
          Design-System.
        </Paragraph>
        <Paragraph size="large">
          Shimrit (Shimi) Yacobi, will be your “HPE Onboarding Buddy” (located
          in Fort Collins, CO) and a primary contact to get you oriented to HPE
          which includes getting your Mac set up, getting connected to the HPE
          Network, and addressing any questions about the team and internship
          project and such.
        </Paragraph>
        <Box></Box>
      </Box>
    </AppContainer>
  );
}
