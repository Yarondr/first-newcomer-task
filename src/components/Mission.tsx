import * as React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import SubMission from './SubMission';

interface MissionProps {
    id: string;
    title: string;
    subMissions: SubMissionProps[];
}

interface SubMissionProps {
    description: string;
    options: string[];
}

export default function Mission({ id, title, subMissions }: MissionProps) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                marginTop: '30px',
                direction: 'rtl',
                margin: '40px 60px 0px 60px',
                backgroundColor: 'primary.main',
                borderRadius: '10px',
                padding: '10px 20px 20px 20px',
                color: '#ffffff',
            }}
        >

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                M{id} - {title}
            </Typography>
            {subMissions.map((subMission, index) => (
                <SubMission key={index} description={subMission.description} options={subMission.options} />
            ))}
        </Box>
    )
}