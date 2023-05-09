import * as React from 'react';
import { Box, ToggleButtonGroup, Typography } from "@mui/material";
import { ToggleButton } from './ToogleButton';
import { BorderRight } from '@mui/icons-material';


interface SubMissionProps {
    description: string;
    options: string[];
}

export default function SubMission({ description, options }: SubMissionProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
        if (newValue === null) return;
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                margin: '10px 20px 10px 20px',
                direction: 'rtl',
                backgroundColor: '#CCCCFF',
                borderRadius: '10px',
                padding: '10px 20px 10px 20px',
            }}
        >

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '5px'}}>
                {description}
            </Typography>
            <ToggleButtonGroup
                sx={{ direction: 'ltr', margin: '5px 0px 5px 0px' }}
                color="primary"
                value={value}
                exclusive
                onChange={handleChange}
                aria-label="text alignment"
            >
                {options.map((option) => (
                    <ToggleButton
                        sx={{
                            direction: 'rtl',
                            margin: '0px 10px 0px 10px',
                            borderRadius: '10px',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                        unselected-text-color='black'
                        unselected-background-color='white'
                        selected-background-color='#9FE2BF'
                        selected-text-color='black'
                        value={option}>{option}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}