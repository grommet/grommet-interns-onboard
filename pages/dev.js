import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph, Image, Text, Anchor, Card, CardBody } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <InternIntro
          src="./amanda.jpeg"
          name="Amanda Dupell"
          title="UI/UX Developer Intern"
          location="Boston, MA"
          start="May 17"
          email="amanda.dupell@hpe.com"
          linkedIn="https://www.linkedin.com/in/amanda-dupell-profile/"
        />
        <Text size="4xl" weight="bold" >Hi, there!</Text>
        <Paragraph size="large">My name is Amanda Dupell and I am super excited to start
          working as a UI/UX Developer Intern as a part of HPE's Experience 
          Studio and Design System team!
        </Paragraph>
        <Paragraph size="medium">
          As I begin my internship at HPE, I have a lot of exciting projects and 
          learning opportunities to look forward to this summer and beyond. One of
          the first things I will be working on is the continuous improvement of 
          accessibility across {
            <Anchor href="https://github.com/grommet/grommet">grommet</Anchor>
          } components. This process begins by researching and diving head first 
          into development tools to real-time inspect the web pages and 
          components I will be contributing to and building. 
        </Paragraph>
        <Box pad={{ vertical: "large" }}>
          <Card pad="small" gap="medium">
            <CardBody>body</CardBody>
          </Card>
        </Box>
      </Box>
    </AppContainer>
  );
}
