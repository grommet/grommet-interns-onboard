import React from "react";

import { AppContainer, InternIntro, GrommetMascot } from "../components";

import {
  Anchor,
  Box,
  Card,
  CardFooter,
  Heading,
  Image,
  List,
  Paragraph,
  Text,
} from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Developer Intro & Project</Heading>
        <Heading level="2">Meet Amanda Dupell </Heading>
        <InternIntro
          src="./amanda.jpeg"
          name="Amanda Dupell"
          title="UI/UX Developer Intern"
          location="Boston, MA"
          start="May 17"
          email="amanda.dupell@hpe.com"
          linkedIn="https://www.linkedin.com/in/amanda-dupell-profile/"
        />
        <Heading level="3" margin="none">
          Hi, there!
        </Heading>
        <Paragraph size="large">
          "My name is Amanda Dupell and I am super excited to start working as a
          UI/UX Developer Intern as a part of HPE's Experience Studio and Design
          System team!"
        </Paragraph>
        <Heading level="2">
          The Developer challenges for the 2021 Internship
        </Heading>
        <Paragraph size="large">
          You are expecting an exciting internship diving into the open-source
          world and the community of grommet.io. So far, we have more than 3,700+
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
        <Heading level="3">First Phase - Web Accessibility</Heading>
        <Paragraph size="large">
          One of Grommet's core tenants is Accessibility. In Grommet, we aim for
          inclusive design that provides equal access and equal opportunity to
          people with diverse abilities. Access to information and
          communications technologies, including the Web, is defined as a basic
          human right and we thrive to comply it and be an inclusive component
          library.
        </Paragraph>
        <Paragraph size="large">
          Web Accessibility has many different layers and accessibility supports
          in terms of visual impaired users, screen readers, keyboard navigation
          and more. The developer intern will dive into this accessibility
          world and the WCAG standards to bring the Grommet component library
          closer to those standards and accessibility expectations.
        </Paragraph>
        <Paragraph size="large">
          Accessibility is a great learning opportunity for the developer
          internship, and the continuous improvement of accessibility across{" "}
          {
            <Anchor
              a11yTitle="grommet"
              href="https://github.com/grommet/grommet"
            >
              Grommet
            </Anchor>
          }{" "}
          components will benefit the library greatly. This process begins by
          researching and diving head first into development tools to real-time
          inspect the web pages and components, learn any accessibility caveats
          that may exist in the framework, and ultimately get them resolved.
          Learning more about accessibility standards and improving upon them in
          Grommet will allow Amanda to build a foundation of knowledge and
          comfort within the framework.
        </Paragraph>

        <Box pad={{ vertical: "large" }}>
          <Card margin={{right: 'xlarge'}} elevation="xlarge">
              <Image
                fill="horizontal"
                fit="contain"
                src="/waveexample.png"
                a11yTitle="WAVE accessibility tool screenshot example"
              />
            <CardFooter background="#000000A0" justify="start">
              <Text>
                An example using the{" "}
                {
                  <Anchor
                    a11yTitle="WAVE accessibility"
                    href="https://wave.webaim.org/"
                  >
                    WAVE accessibility tool
                  </Anchor>
                }{" "}
                to evaluate a work-in-progress webpage. Using tools like this
                provides direct feedback and resources to fixing issues with
                your application's accessibility.
              </Text>
            </CardFooter>
          </Card>
        </Box>
        <Paragraph size="large">
          Here is a list of helpful links in relation to accessibility and how
          HPE is directly addressing and making contributions to better our
          code:
        </Paragraph>
        <Box align="start" pad={{ left: "medium" }}>
          <List
            primaryKey="item"
            data={[
              {
                item: (
                  <Paragraph size="small">
                    {
                      <Anchor
                        a11yTitle="grommet accessibility audit"
                        href="https://github.com/grommet/grommet/issues/4068"
                      >
                        Grommet Accessibility Audit
                      </Anchor>
                    }{" "}
                    <br /> An open issue in our Grommet repo to help identify
                    accessibility improvements that can be made to better align
                    the library with{" "}
                    {
                      <Anchor
                        a11yTitle="WCAG standards"
                        href="https://www.w3.org/TR/WCAG21/"
                      >
                        WCAG standards
                      </Anchor>
                    }
                  </Paragraph>
                ),
              },
              {
                item: (
                  <Paragraph size="small">
                    {
                      <Anchor
                        a11yTitle="HPE Design System Accessibility"
                        href="https://design-system.hpe.design/foundation/accessibility"
                      >
                        HPE Design System Accessibility Documentation
                      </Anchor>
                    }{" "}
                    <br /> An overlook of HPE's commitment to continuously
                    bettering our accessibility as well as a list of helpful
                    resources for developers to use on their own to learn best
                    practices and the latest developments in the industry
                  </Paragraph>
                ),
              },
            ]}
          />
        </Box>
        <Heading level="3">
          Second Phase - HPE Design System Notifications
        </Heading>
        <Paragraph size="large">
          The next focus will be to work within the{" "}
          {
            <Anchor
              a11yTitle="HPE Design System"
              href="https://design-system.hpe.design/"
            >
              HPE Design System
            </Anchor>
          }
          , created entirely with the Grommet framework.
        </Paragraph>
        <Paragraph size="large">
          After gaining more knowledge and expertise around the grommet library,
          the next challenge will be to learn about real world design requirements at
          HPE.{" "}
        </Paragraph>
        <Paragraph size="large">
          The 2021 interns of both Design & Development will join hands to dive
          deeper into the world of product teams challenges by building the
          Notification component for the HPE Design System.
        </Paragraph>
        <Paragraph size="large">
          The Design intern, Kenny, will perform research across different HPE
          product teams to learn the intended use cases and reasons for using
          the Notification component, and the goal will be to find the most
          generic Notification solution for all products while still providing
          customization options of broader flexibility both in design and
          development. The generic solution will be reflected on the Design
          System guidelines and code templates. The role of the Developer intern
          will be to collect the design solutions and provide code examples that
          bring the Notification designs into life and embed those in the HPE
          Design System site along with descriptive guidelines.
        </Paragraph>
        <GrommetMascot/>
      </Box>
    </AppContainer>
  );
}
