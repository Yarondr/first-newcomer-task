import { Box, Typography } from "@mui/material";
import { forwardRef, useState } from "react";
import styles from '../styles/Mission.module.css';
import SubMission from './SubMission';

export interface MissionProps {
    id: number;
    title: string;
    subMissions: SubMissionData[];
    onChange: (id: number, values: MissionOption[]) => void;
}

export interface SubMissionData {
    description: string;
    options: MissionOption[];
}

export interface MissionOption {
    description: string;
    points: number;
}

const Mission = forwardRef<unknown, MissionProps>(({ id, title, subMissions, onChange }: MissionProps, ref) => {
    const [values, setValues] = useState<MissionOption[]>(Array.from({ length: subMissions.length }, () => ({ description: '', points: 0 })));
    
    Mission.displayName = 'Mission';

    return (
        <Box
            className={styles.mission}
            ref={ref}
            sx={{
                flexGrow: 1,
                direction: 'rtl',
                margin: '40px 60px 0px 60px',
                backgroundColor: 'primary.main',
                borderRadius: '10px',
                padding: '10px 20px 20px 20px',
                color: '#ffffff',
            }}
        >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                M{id < 10 ? `0${id}` : id}: {title}
            </Typography>
            {subMissions.map((subMission, index) => (
                <SubMission key={index} description={subMission.description} options={subMission.options} onChange={
                    (selectedValue: MissionOption) => {
                        const newValues = [...values];
                        newValues[index] = selectedValue;
                        setValues(newValues);      
                        onChange(id, newValues);
                    }
                }/>
            ))}
        </Box>
    )
});

export default Mission;