import React from "react";

import { AppContainer, Team } from "../components";

import { Anchor, Box, Heading, List, Paragraph } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Design & Dev Intro</Heading>
        <Paragraph>
          We are excited to have you join our team! HPE is one of the most
          dynamic, industry-leading companies in the technology world, with
          ample opportunities for growth and a relentless commitment to being
          the best at everything we do. HPE has developed an onboarding program
          designed to prepare you for success in your internship. Your virtual
          intern orientation class is where you will meet fellow interns, and
          learn about strategies for success in your HPE internship, as well as
          receive information about the many useful resources at HPE.
        </Paragraph>
        <Paragraph>
          The orientation will be mostly focused on PC setup. Since the HPE
          Experience Studio is mostly using Mac, some of the instructions might
          not be relevant for you and you'll have to use other resources to go
          through the Set Up process successfully. Do not contact HPE IT with
          questions, since they do not support Mac.
        </Paragraph>
        <Paragraph>
          The following is a list of resources you can use to brave the Set-Up
          process
        </Paragraph>
        <Box align="start">
          <List
            primaryKey="name"
            secondaryKey="value"
            data={[
              { name: "Aruba IT Help Desk", value: "martin.mench@hpe.com" },
              {
                name: "HR - Aruba Set-Up training on Mac",
                value: "sylvia.ruiz@hpe.com",
              },
              {
                name: (
                  <Anchor
                    a11yTitle="HPEXS Guide"
                    href="https://publisher.grommet.io/get-started?name=HPEXS"
                    label="HPEXS Guide"
                  />
                ),
              },
            ]}
          />
        </Box>

        <Paragraph>
          The following is a list of resources you can use to start to get
          familiarized with our vision
        </Paragraph>
        <Box align="start">
          <List
            primaryKey="name"
            secondaryKey="value"
            data={[
              {
                name: "The Grommet Open Source",
                value: <Anchor a11yTitle="Grommet site" label="Website" href="https://v2.grommet.io/" />,
              },
              {
                name: "The HPE Design-System Open Source",
                value: (
                  <Anchor
                    a11yTitle="HPE Design System site"
                    label="Website"
                    href="https://design-system.hpe.design/"
                  />
                ),
              },
            ]}
          />
        </Box>
        <Paragraph>
          You should have received your Mac and will be receiving a YubiKey
          soon. This little YubiKey is a device that will allow you to access
          the HPE Intranet. You will need to download the HPE Yubikey DigitalBadge
          application. If this application is not on your device upon initial launch, 
          you will need to contact Aruba support to recieve and install the software 
          from them. Once your Yubikey is configured, we will be able to get your HPE 
          email, as well as the rest of your environment properly set up. This can 
          take some time and you’ll have other tasks related to the HPE Internship 
          program and HPE training as you get started.
        </Paragraph>
        <Paragraph>
          You'll be invited to a 'PC Set-Up Training'. The PC setup training
          will only be partially relevant to your setup since you'll be using 
          a Mac, and those calls are generally for Windows-based computers. 
          However, they may provide instructions for students using their own 
          computers (BYOD - Bring our Own Device), or for Aruba interns that 
          will be using a Mac, so it might be relevant, and you might find 
          that useful so stay tuned.
        </Paragraph>
        <Paragraph>
          For Mac users, the HPE Experience Studio on-boarding guide is a
          helpful resource{" "}
          <Anchor
            href="https://publisher.grommet.io/get-started?id=HPEXS-greg-furuiye-hpe-com"
            a11yTitle="Get Started for Mac"
            label="Get Started"
          />
        </Paragraph>
        <Heading level={2}>Pre installations</Heading>
        <Paragraph>
          Here are some pre installations and things you can get familiarized
          with without setting up your HPE connections.
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
        <Heading level={3} size="small">
          YubiKey
        </Heading>
        <Paragraph>
          Follow the{" "}
          <Anchor
            a11yTitle="Yubikey guidelines"
            label="guidelines"
            href="https://www.brainshark.com/1/player/hpelearning?pi=zIdznihIhzcf0dz0&r3f1=&fb=0"
          />{" "}
          of installing a YubiKey and install a certificate on the YubiKey
          itself.
        </Paragraph>
        <Heading level={3} size="small">
          Pulse Secure
        </Heading>
        <Paragraph>
          Pulse Secure is used to establish a secure connection with HPE networks. Follow{" "}
          <Anchor
            a11yTitle="steps for Pulse Secure installation"
            label="these steps"
            href="https://myitsupport.ext.hpe.com/myITsupport/ITSArticle?ArticleNumber=000009020#nojamf"
          />{" "}
          to install Pulse Secure on your Mac. We recommend installing the software via the{" "}
          <Anchor
            a11yTitle="HPE Remote Access Site"
            label="HPE Remote Access Site"
            href="https://hpe.sharepoint.com/teams/hpe-remoteaccess/SitePages/Home.aspx"
          />.
        </Paragraph>
        <Heading level={3} size="small">
          MFA
        </Heading>
        <Paragraph>
          PingID is a multi-factor authentication (MFA) software. When trying to
          access Outlook, you will probably get an error asking to setup
          multi-factor authentication. Connect to the MFA{" "}
          <Anchor
            a11yTitle="Multi-Factor Authentication instructions"
            label="instructions"
            href="https://mfa-registration.austin.hpe.com/uid-mfa-sso/"
          />{" "}
          to learn how to setup PingID to obtain MFA. Installation on
          your mobile or a second hardware device will be required as well.
        </Paragraph>
        <Heading level={3} size="small">
          Reset Password
        </Heading>
        <Paragraph>
          You'll get an initial password from your manager, and during the
          set-up process, you'll need to reset it. Regardless, HPE is requesting
          to change passwords every 90 days, so you'll need to use the{" "}
          <Anchor
            a11yTitle="Reset Password Tool"
            label="Reset Password Tool"
            href="https://domain-services.corp.hpecorp.net/ResetDomainPassword/"
          />{" "}
          every once in a while in case you are using a Mac.{" "}
        </Paragraph>

        <Paragraph fill> </Paragraph>
        <Heading level={2}>Thank You</Heading>
        <Paragraph>
          Again, welcome to HPE and we look forward to working alongside with
          you!
        </Paragraph>
      </Box>
    </AppContainer>
  );
}
