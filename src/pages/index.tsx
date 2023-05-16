import Mission from "@/components/Mission";
import NameSelectDialog from "@/components/NameSelectDialog";
import { missionsData } from "@/utils/MissionsData";
import { AppBar, Autocomplete, Box, Button, TextField, Toolbar } from "@mui/material";
import Image from "next/image";
import { createRef, useState } from "react";

export default function Home() {
    const [name, setName] = useState('');
    const missions: { [missionId: number]: { values: string[], ref: React.RefObject<HTMLDivElement> } } = {};
    const missionComponents = buildMissionComponents();

    function handleSubmit() {
        for (const mission in missions) {
            const missionValues = missions[mission].values;
            const missionRef = missions[mission].ref.current;
            if (!missionRef) return;

            if (missionValues.length === 0 || missionValues.includes('')) {
                missionRef.scrollIntoView({ behavior: 'smooth', block: 'end'});
                return;
            }
        }
    }

    function handleChange(missionIndex: number, subMissionIndex: number, value: string) {
        missions[missionIndex]['values'][subMissionIndex] = value;
    }

    function buildMissionComponents() {
        const missionComponents = [];
        for (const missionIndex in missionsData) {
            const mission = missionsData[missionIndex];
            const ref = createRef<HTMLDivElement>();

            missions[mission.id] = {
                values: [],
                ref: ref,
            }

            missionComponents.push(
                <Mission
                    ref={ref}
                    key={mission.id} id={mission.id} title={mission.title}
                    subMissions={mission.subMissions}
                    onChange={handleChange}
                />
            )
        }
        return missionComponents;
    }
    

    return (
        <div style={{ margin: '0px auto 0px auto', width: '95%'}}>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{borderRadius: '10px', backgroundColor: 'primary.main'}}>
                    <Toolbar>
                        <Autocomplete
                            disablePortal
                            id="team-select"
                            size="small"
                            options={Array.from(Array(1000).keys()).map((i) => (`Team #${i + 1}`))}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Select Team" />}
                        />
                        <Image src="/first-logo.png" alt="first-logo" width="200" height="50" style={{ marginLeft: 'auto'}} />
                        <Image src="/cargo-connect.png" alt="cargo-connect-logo" width="100" height="50" />
                        <Box sx={{ marginLeft: 'auto'}}>
                            <NameSelectDialog name={name} onSave={(name) => setName(name)} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>


            {missionComponents}

            <Box sx={{textAlign: 'center'}}>
                <Button variant="contained" color="primary" onClick={handleSubmit}
                    sx={{
                        margin: '50px 0px 40px 0px',
                        width: '800px',
                        height: '100px',
                    }}
                    style={{ fontSize: '40px'}}>
                    Submit
                </Button>
            </Box>
        </div>
    )
}