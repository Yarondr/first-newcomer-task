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
        //TODO: work on flipping text and buttons
        <Box sx={{ flexGrow: 1, marginTop: '20px', direction: 'rtl' }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                M{id} - {title}
            </Typography>
            {subMissions.map((subMission) => (
                <SubMission description={subMission.description} options={subMission.options} />
            ))}
        </Box>
    )
}