import React from "react";

import { Anchor, Box, Image, Text } from "grommet";
import { Linkedin } from "grommet-icons";

export const InternIntro = ({
  email,
  linkedIn,
  location,
  name,
  title,
  src,
  start,
}) => (
  <Box gap="medium" margin={{ bottom: "large" }}>
    <Box
      round="full"
      overflow="hidden"
      width="small"
      height="small"
      elevation="large"
    >
      <Image fit="cover" src={src} a11yTitle={name} opacity="strong" />
    </Box>
    <Box gap="small">
      <Text weight="bold" size="large">
        {title}
      </Text>
      <Anchor icon={<Linkedin role="img" aria-roledescription="img" color="plain" />} href={linkedIn} label={name} />
      <Text>Internship Start Date {start}, 2021</Text>
      <Text>{location}</Text>
      <Text>{email}</Text>
    </Box>
  </Box>
);
