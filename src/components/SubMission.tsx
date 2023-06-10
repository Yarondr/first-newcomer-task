import * as React from 'react';
import { Box, ToggleButtonGroup, Typography } from '@mui/material';
import { ToggleButton } from './ToogleButton';
import { theme } from './layout';
import { MissionOption } from './Mission';

interface SubMissionProps {
  description: string;
  options: MissionOption[];
  onChange: (selectedValue: MissionOption) => void;
}

export default function SubMission({ description, options, onChange }: SubMissionProps) {
  const [value, setValue]= React.useState('');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue === null) return;
    setValue(newValue);
    onChange(options.find(option => option.description === newValue)!);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: '10px 20px 10px 20px',
        direction: 'rtl',
        backgroundColor: 'secondary.main',
        borderRadius: '10px',
        padding: '10px 20px 10px 20px',
        color: '#000000'
      }}
    >
      <Typography color="white" variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '5px' }}>
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
        {options.map(option => (
          <ToggleButton
            key={option.description}
            sx={{
              direction: 'rtl',
              margin: '0px 10px 0px 10px',
              borderRadius: '10px',
              paddingLeft: '15px',
              paddingRight: '15px',
              fontSize: '16px',
            }}
            unselected-text-color="black"
            unselected-background-color={theme.button.primary}
            selected-background-color={theme.button.selected}
            selected-text-color="black"
            value={option.description}
          >
            {option.description}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
