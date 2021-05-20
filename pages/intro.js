import React from "react";

import { AppContainer, Team } from "../components";

import { Anchor, Box, Heading, List, Paragraph } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Heading>Design & Dev Intro</Heading>
      <Paragraph>
        You should have received your Mac and will be receiving a YubiKey soon.
        This little YubiKey is a device that will allow you to access the HPE
        Intranet. Once we have your HPE email up and running on your Mac, we
        will be able to get your YubiKey configured, as well as the rest of your
        environment set up. This can take some time and you’ll have other tasks
        related to the HPE Internship program and HPE training as you get
        started.
      </Paragraph>
      <Paragraph>
        You'll be invited to a 'PC Set-Up Training', The PC setup training will
        partially relevant to your setup since you'll be using a Mac, and those
        calls are generally for Windows-based computers. However, they may
        provide instructions for students using their own computers (BYOD -
        Bring our Own Device), or for Aruba interns that will be using a Mac, so
        it might be relevant, and you might find that useful so stay tuned.
      </Paragraph>
      <Paragraph>
        For Mac users, the HPE Experience Studio on-boarding guide is a helpful
        resource{" "}
        <Anchor
          href="https://publisher.grommet.io/get-started?id=HPEXS-greg-furuiye-hpe-com"
          a11yTitle="Get Started for Mac"
          label="Get Started"
        />
      </Paragraph>
      <Heading level={2}>Pre installations</Heading>
      <Paragraph>
        Here are some pre installations and things you can get familiarized with
        without setting up your HPE connections.
      </Paragraph>
      <Box align="center" width={{ max: "large" }}>
        <List
          primaryKey="item"
          data={[
            {
              item: `- Install Slack – slack is the tool we use for day to day
        communications. Join the grommet workspace on slack and feel free to
        ping me (Shimi) directly once you are in so I’ll add you to our private
        channels. Get familiarized with conversations, questions and the tone of
        voice coming on the #general channel and other channels – later on,
        you’ll be an active participants in those conversations as well.`,
            },
            {
              item: `- Scan through grommet.io to familiarize yourself with its principals and components.`,
            },
            {
              item: `- Start getting familiar with grommet components listed on Storybook`,
            },
            {
              item: `- Get familiarized with Figma – Figma is the tool the designers use to create prototypes, wire frames and demonstrating the experience.`,
            },
          ]}
        />
      </Box>
      <Heading level={2}>General Set-up Info and resources</Heading>
      <Heading level={3}>YubiKey</Heading>
      <Paragraph fill>
        Follow the{" "}
        <Anchor
          label="guidelines"
          href="https://www.brainshark.com/1/player/hpelearning?pi=zIdznihIhzcf0dz0&r3f1=&fb=0"
        />{" "}
        of installing a YubiKey and install a certificate on the YubiKey itself.
      </Paragraph>
      <Heading level={3}>MFA</Heading>
      <Paragraph>
        When trying to access Outlook you will probably get an error asking to
        setup multi-factor authentication (MFA). Connect to the{" "}
        <Anchor
          label="instructions"
          href="https://mfa-registration.austin.hpe.com/uid-mfa-sso/"
        />{" "}
        for how to setup PingID to obtain MFA. Installation will occur on your
        mobile or second device as well.
      </Paragraph>
      <Heading level={3}>VPN Access</Heading>
      <Paragraph fill> </Paragraph>
      <Heading level={2}>Thank You</Heading>
      <Paragraph>
        Again, welcome to HPE and we look forward to working alongside with you!
      </Paragraph>
    </AppContainer>
  );
}
