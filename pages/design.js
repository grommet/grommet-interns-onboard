import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Designer Intro & Project</Heading>
        <Heading level="2">Meet Kenny Tran</Heading>
        <InternIntro
          src="./kenny.jpeg"
          name="Kenny Tran"
          title="Design & Research Intern"
          location="Sacramento, CA"
          start="June 14"
          //   email="TBD"
          linkedIn="https://www.linkedin.com/in/kennytrand/"
        />
        <Heading level="2">The Design challenges for the 2021 Internship</Heading>
        <Heading level="3">First Phase - HPE Design System Notifications</Heading>
        <Paragraph size="large">
          The 2021 interns of both Design & Development will join hands to dive
          deeper into the world of product teams challenges by building the
          Notification component for the HPE Design System.
        </Paragraph>
      </Box>
    </AppContainer>
  );
}
