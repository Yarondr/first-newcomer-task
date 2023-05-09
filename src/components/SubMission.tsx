import * as React from 'react';
import { Box, ToggleButtonGroup, Typography } from "@mui/material";
import { ToggleButton } from './ToogleButton';


interface SubMissionProps {
    description: string;
    options: string[];
}

export default function SubMission({ description, options }: SubMissionProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {description}
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={value}
                exclusive
                onChange={handleChange}
                aria-label="text alignment"
            >
                {options.map((option) => (
                    <ToggleButton
                        unselectedTextColor='black'
                        unselectedBackgroundColor='white'
                        selectedBackgroundColor='aqua'
                        selectedTextColor='black'
                        value={option}>{option}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}