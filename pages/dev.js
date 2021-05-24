import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading, Paragraph, List, Text, Anchor, Card, CardBody, CardFooter, Image } from "grommet";

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
            <Anchor href="https://github.com/grommet/grommet">Grommet</Anchor>
          } components. This process begins by researching and diving head first 
          into development tools to real-time inspect the web pages and 
          components I will be contributing to and building. 
        </Paragraph>
        <Box pad={{vertical: "large"}}>
          <Card width="large" elevation="xlarge">
            <CardBody height="medium">
              <Image
                fit="cover"
                src="/waveexample.png"
                a11yTitle="WAVE accessibility tool screenshot example"
              />
            </CardBody>
            <CardFooter background="#000000A0" width="large" justify="start">
              <Text>
                An example using the {
                  <Anchor href="https://wave.webaim.org/">
                    WAVE accessibility tool
                  </Anchor>
                } to evaluate a work-in-progress webpage. Using tools like this 
                provides direct feedback and resources to fixing issues with 
                your application's accessibility.
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Paragraph size="medium">
          Here is a list of helpful links in relation to accessibility and 
          how HPE is directly addressing and making contributions to better our 
          code:
        </Paragraph>
        <Box align="start" pad={{left: "medium"}}>
          <List
            primaryKey="item"
            data={[
              { item:
                <Paragraph size="small" >
                  - {
                    <Anchor href="https://github.com/grommet/grommet/issues/4068">
                      Grommet Accessibility Audit:
                    </Anchor>
                  } An open issue in our Grommet repo to help identify accessibility
                  improvements that can be made to better align the library with{" "}
                  {
                    <Anchor href="https://www.w3.org/TR/WCAG21/">
                      WCAG standards
                    </Anchor>
                  }
                </Paragraph> 
              },
              { item:
                <Paragraph size="small" >
                  - {
                    <Anchor href="https://design-system.hpe.design/foundation/accessibility">
                      HPE Design System Accessibility Principles and Resources:
                    </Anchor>
                  } An overlook of HPE's commitment to continuously bettering our 
                  accessibility as well as a list of helpful resources for developers to 
                  use on their own to learn best practices and the latest developments
                  in the industry
                </Paragraph>
              }
            ]}
          />
        </Box>
          <Paragraph size="medium">
            Learning more about accessibility standards and improving upon them
            in Grommet will allow me to build a foundation of knowledge and comfort
            within the framework. From there, my next focus will be to work with {
              <Anchor href="https://design-system.hpe.design/">
                HPE's Design System
              </Anchor>
            }, created entirely with the Grommet framework.
          </Paragraph>
          <Paragraph size="medium">
            Later into my internship, I will be working alongside my fellow 2021
            intern, Kenny, to dive deeper into this design system and make 
            meaningful contributions to launch HPE forward.
          </Paragraph>
          <Box direction="row" pad={{top: "large"}}>
            <Text weight="bold" size="4xl">Let's Get to Work!</Text>
            <Box size="small">
              <Image
                fit="contain"
                src="/stak-hurrah.svg"
                a11yTitle="grommet hurrah mascot"
              />
            </Box>
          </Box>
      </Box>
    </AppContainer>
  );
}
