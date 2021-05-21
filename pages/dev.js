import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph, Image, Text } from "grommet";

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
        <Box
          background="background-contrast"
          align="center"
          pad={{ vertical: "medium" }}
        >
          <>
            <Box align="center" justify="center">
              <Image
                src="/Quotation Marks.svg"
                width="56"
                height="40"
                a11yTitle="Quotation Marks"
                opacity="medium"
              />
            </Box>
            <Paragraph size="large" textAlign="center">
              Hello! My name is Amanda Dupell and I am super excited to start
              working as a UI/UX Developer Intern as a part of HPE's Experience 
              Studio and Design System team!
            </Paragraph>
          </>
        </Box>
        <Box margin={{ top: "xlarge" }}>
          <Text weight="bold" size="xlarge">Things I'll be working on!</Text>
        </Box>
        <Paragraph size="medium">
          Here are some examples of the 
        </Paragraph>
      </Box>
    </AppContainer>
  );
}
