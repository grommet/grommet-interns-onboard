import React from "react";
import Head from "next/head";
import { hpe } from "grommet-theme-hpe";
import { Github, Slack } from "grommet-icons";
import { Anchor, Avatar, Box, Footer, Grommet, Nav } from "grommet";

import { Header } from "../components";

const gravatarLink =
  "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

export const AppContainer = ({ children }) => (
  <Grommet theme={hpe} full>
    <Box
      background={{
        image: "url(/bg2.jpeg)",
      }}
    >
      <Box
        flex
        fill
        margin={{ horizontal: "auto", vertical: "large" }}
        width={{ max: "xlarge" }}
        height={{ min: "100%" }}
        background="white"
      >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box flex role="main">
          <Header />
          {children}
          <Footer
            background="light-2"
            pad={{ vertical: "small", horizontal: "medium" }}
          >
            <Anchor href="https://github.com/ShimiSun">
              <Avatar src={gravatarLink} />
            </Anchor>
            <Nav direction="row" align="center">
              <Anchor
                a11yTitle="Reach out to the Grommet Community on Slack"
                href="https://slack-invite.grommet.io/"
                icon={<Slack color="plain" />}
                target="_blank"
                rel="noreferrer noopener"
              />
              <Anchor
                a11yTitle="Github repository"
                href="https://github.com/grommet/grommet-interns-onboard"
                icon={<Github color="black" />}
                target="_blank"
                rel="noreferrer noopener"
              />
            </Nav>
          </Footer>
        </Box>
      </Box>
    </Box>
  </Grommet>
);
