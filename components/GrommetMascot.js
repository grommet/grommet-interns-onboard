import React from "react";

import { Box, Image, Text } from "grommet";

export const GrommetMascot = () => (
    <Box direction="row-responsive" pad={{ top: "large" }}>
        <Text size="3xl" weight="bold">
        Let's get to work!
        </Text>
        <Box margin={{ horizontal: 'large'}}>
            <Image
                fill="horizontal"
                fit="contain"
                src="/stak-hurrah.svg"
                a11yTitle="grommet hurrah mascot"
            />
        </Box>
    </Box>
);
