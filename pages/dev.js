import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph, Image } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }} >
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
        <Box
          background="background-contrast"
          align="center"
          margin={{ vertical: "xlarge" }}
          pad={{ vertical: "medium" }}
        >
        <Box align="center" justify="center">
          <Image
            src="/Quotation Marks.svg"
            width="56"
            height="40"
            a11yTitle="Quotation Marks"
            opacity="medium"
          />
        </Box>
        <Box>
          <Paragraph weight="bold" size="large" textAlign="center">
            <b>
              My name is Amanda Dupell and I am super excited to start working as a UI/UX
              Developer Intern as a part of HPE's Experience Studio and Design System team!
            </b>
          </Paragraph>
        </Box>
      </Box>
      </Box>
    </AppContainer>
  );
}
