import React from "react";

import { AppContainer, InternIntro, GrommetMascot } from "../components";

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
        <Paragraph size="large">
          You are expecting an exciting internship diving into the design research
          world and the community of grommet.io. So far, we have more than 3,700+
          members on our slack channel, a great team, loads of enhancement
          requests, and an exciting road-map for both grommet and the HPE
          Design-System.
        </Paragraph>
        <Paragraph size="large">
          Greg Furuiye, will be your “HPE Onboarding Buddy” and a primary contact 
          to get you oriented to HPE and address any questions about the team 
          and internship project.
        </Paragraph>
        <Heading level="3">First Phase - HPE Design System Notifications</Heading>
        <Paragraph size="large">
          The 2021 interns of both Design & Development will join hands to dive
          deeper into the world of product teams challenges by building the
          Notification component for the HPE Design System.
        </Paragraph>
        <Paragraph size="large">
          The Design intern, Kenny, will perform research across different HPE
          product teams to learn the intended use cases and reasons for using
          the Notification component. The goal will be to find the most
          generic Notification solution for all products while still providing
          customization options of broader flexibility both in design and
          development. The generic solution will be reflected on the Design System 
          guidelines and code templates.
        </Paragraph>
        <Paragraph size="large">
          Beginning with research and going through the entire design process up 
          until working alongside a developer will allow for a large amount of 
          growth and self-teaching. HPE places an emphasis on collaboration and 
          hopes the internship project will allow for the design and developer 
          interns to learn from one another from the unique experiences
          of their own internships.
        </Paragraph>
        <GrommetMascot/>
      </Box>
    </AppContainer>
  );
}
