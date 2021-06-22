import React from "react";

import { Box, Paragraph, Diagram, Stack, Text } from "grommet";

import { TestDesktop, Edit, Code, System } from 'grommet-icons';

const thickness = 'xxsmall';
const anchor = 'vertical';
const type = 'curved';
const color = 'brand';
const round = true;

const IconBox = ({icon, title, content, team}) => (
    <Box gap="medium" direction="row">
        {icon}
        <Box>
            <Text size="xlarge" weight="bold">{title}</Text>
            {team && <Text size="xsmall">{team} team</Text>}
            <Paragraph size="small">{content}</Paragraph>
        </Box>
    </Box>
);

export const IntroDiagram = () => (
    <Box height="large">
        <Stack fill="vertical">
            <Diagram
                connections={[
                    {
                        fromTarget: 'research',
                        toTarget: 'design',
                        thickness,
                        color,
                        type,
                        anchor,
                        round,
                    },
                    {
                        fromTarget: 'design',
                        toTarget: 'design-system',
                        thickness,
                        color,
                        type,
                        anchor,
                        round,
                    },
                    {
                        fromTarget: 'design-system',
                        toTarget: 'dev',
                        thickness,
                        color,
                        type,
                        anchor,
                        round,
                    },
                ]}
            />
            <Box gap="small">
                <IconBox 
                    title="Research with HPE Product Teams"
                    team="Product"
                    content="As the first step in the design and development process,
                        research is incredibly important at HPE. The main sentiment is
                        'going wide' and then zoning in. This allows for acquiring a large
                        sample size of what research exists in the world currently and
                        where HPE wants to take it."
                    icon={<TestDesktop a11yTitle="research icon" id="research" size="large" />}
                />
                <IconBox 
                    title="Design"
                    team="Product"
                    content="Once there is a general idea of the best solution, design moves
                        forward with ideation. Those with UX/UI specialization factor in to 
                        ensure a seamless experience for the final designs."
                    icon={<Edit a11yTitle="pencil icon" id="design" size="large" />}
                />
                <IconBox 
                    title="Design System"
                    content="From design, the Design System works to ensure anyone 
                    at HPE understands how they can use these designs in the context 
                    of our company."
                    icon={<System a11yTitle="computer system icon" id="design-system" size="large" />}
                />
                <IconBox 
                    title="Development"
                    content="Finally, the development team works with design to make
                        the final vision into a reality. At this point, development
                        has done research on their end to know the best implementation
                        for the design, adhering to the industry's best and latest practices."
                    icon={<Code a11yTitle="code script icon" id="dev" size="large" />}
                />
            </Box>
        </Stack>
    </Box>
);
