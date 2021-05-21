import React from "react";

import { Image, Box, Paragraph, Heading } from "grommet";

export const Quote = () => (
  <Box
    background="background-contrast"
    align="center"
    margin={{ vertical: "xlarge" }}
    pad={{ vertical: "medium" }}
  >
    <Box justify="between" align="center" gap="medium">
      <Heading level={3} margin="none">
        From HPE Intern to a Full Time Engineer
      </Heading>
      <Heading level={4} margin="none" size="small">
        Meet Jessica
      </Heading>
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
        <Box align="center">
          <Paragraph weight="bold" size="large" textAlign="center">
            <b>
              Through this internship I have gained skills in React, Typescript,
              and Github. I also got exposure to the design side of things and
              feel that I was given exciting projects to work on that enhanced
              my dev skills.
            </b>
          </Paragraph>
          <Paragraph margin="none" textAlign="center">
            Jessica Cheyenne Filben, Intern of 2020
          </Paragraph>
        </Box>
      </Box>
    </Box>
  </Box>
);
