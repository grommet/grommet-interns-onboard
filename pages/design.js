import React from "react";

import { AppContainer, InternIntro } from "../components";

import { Box, Heading } from "grommet";

export default function Home() {
  return (
    <AppContainer>
      <Box pad={{ horizontal: "large" }}>
        <Heading>Designer Intro</Heading>
        <InternIntro
          src="./kenny.jpeg"
          name="Kenny Tran"
          title="Design & Research Intern"
          location="Sacramento, CA"
          start="June 14"
          //   email="TBD"
          linkedIn="https://www.linkedin.com/in/kennytrand/"
        />
      </Box>
    </AppContainer>
  );
}
