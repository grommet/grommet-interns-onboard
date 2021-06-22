import React, { useContext } from "react";

import { Box, Diagram, Paragraph, ResponsiveContext, Stack, Text } from "grommet";

import { Code, Edit, System, TestDesktop } from 'grommet-icons';

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
            {team && <Text size="xsmall">{team}</Text>}
            <Paragraph size="small">{content}</Paragraph>
        </Box>
    </Box>
);

export const IntroDiagram = () => {
    const size = useContext(ResponsiveContext);

    return (
        <>
            <Box height={"large"}>
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
                            title="Research"
                            team="HPE Product Teams"
                            content="As the first step in the design and development process,
                                research is incredibly important at HPE. The main sentiment is
                                'going wide' and then zoning in. This allows for acquiring a large
                                sample size of what research exists in the world currently and
                                where HPE wants to take it."
                            icon={<TestDesktop a11yTitle="research icon" id="research" size="large" />}
                        />
                        <IconBox 
                            title="Design"
                            team="HPE Product Teams"
                            content="Once enough research is gathered to understand the best solution,
                                design moves forward with ideation. This step happens within each 
                                HPE product team to discuss their specific needs, as a solution for
                                HPE Greenlake may differ from HPE Ezmeral. Those with UX/UI specialization 
                                factor in as well to ensure a seamless experience for the final designs."
                            icon={<Edit a11yTitle="pencil icon" id="design" size="large" />}
                        />
                        <IconBox 
                            title="Design System"
                            content="From the team-specific designs, the Design System works to create a 
                            generalized solution, ensuring that anyone at HPE understands how they can 
                            use the design in the context of their team."
                            icon={<System a11yTitle="computer system icon" id="design-system" size="large" />}
                        />
                        <IconBox 
                            title="Development"
                            content="At this point, development and design come together to discuss
                                the research information collected at the beginning and the designs
                                that have been produced as a result. Development has done their own 
                                research to know the best implementation, adhering 
                                to the industry's best and latest practices."
                            icon={<Code a11yTitle="code script icon" id="dev" size="large" />}
                        />
                    </Box>
                </Stack>
            </Box>
        { size === 'small' && <Box height='small' /> }
        </>
    );
};
