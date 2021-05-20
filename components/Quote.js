import React from "react";

import { Image, Box, Paragraph, Text } from "grommet";

export const Quote = () => (
  <Box
    background="background-contrast"
    align="center"
    margin={{ vertical: "xlarge" }}
    pad={{ vertical: "medium" }}
  >
    <Box justify="between" align="center" gap="medium">
      <Box round="full" overflow="hidden">
        <Image
          src="/jessica.jpeg"
          opacity="strong"
          a11yTitle="Jessica"
          width="120px"
          height="120px"
        />
      </Box>
      <Box justify="center" gap="small">
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
              Through this internship gained skills in React, Typescript, and
              Github. I also got exposure to the design side of things and feel
              that I was given exciting projects to work on that enhanced my dev
              skills.
            </b>
          </Paragraph>
          <Paragraph margin="none">
            Jessica Cheyenne Filben, Intern of 2020
          </Paragraph>
        </Box>
      </Box>
    </Box>
  </Box>
);
