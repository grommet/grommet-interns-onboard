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
        <Paragraph fill size="large">
          We are really excited to welcome our 2021 interns to the HPE
          Experience studio!
        </Paragraph>
        <Paragraph size="large">
          So far we had a great success with the interns program across HPE, and
          we are glad to have you joined this exciting journey at the HPE CTO
          Experience Studio.
        </Paragraph>
        <Box align="center" margin={{ vertical: "medium" }}>
          <Heading level={3} margin="none">
            Welcome our Interns of 2021
          </Heading>
          <Team />
        </Box>
      </Box>
      <Quote />
      <Box align="center">
        <Paragraph size="large">
          The Experience Studio is the central design team of Hewlett Packard
          Enterprise CTO. We are focused on creating accessible and inclusive
          experiences for the customer. We work across the organization to
          provide design, research, and development services for our products,
          and we are glad you'll be joining our journey.
        </Paragraph>
        <Paragraph size="large">
          The HPE Experience Studio team is getting an internship project in
          place that we think you’ll be excited to work on. Browse the Intro,
          Design or Development pages to find more details.{" "}
        </Paragraph>
      </Box>
    </AppContainer>
  );
}
