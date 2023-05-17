import Mission from "@/components/Mission";
import NameSelectDialog from "@/components/NameSelectDialog";
import { missionsData } from "@/utils/missions/MissionsData";
import { convertMissionPoints } from "@/utils/missions/PointsConvertor";
import { AppBar, Autocomplete, Box, Button, Fade, Slide, TextField, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { createRef, useState } from "react";
import '../styles/Home.module.css';

export default function Home() {
    const { push } = useRouter();
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const missions: { [missionId: number]: { values: string[], ref: React.RefObject<HTMLDivElement> } } = {};
    const missionComponents = buildMissionComponents();

    function handleSubmit() {
        const values: {[missionId: number]: string[]} = {};

        for (const mission in missions) {
            const missionValues = missions[mission].values;

            // check that all values are filled
            const missionRef = missions[mission].ref.current;
            if (!missionRef) return;

            // if not all values are filled, scroll and blink the mission
            if (missionValues.length === 0 || missionValues.includes('')) {
                missionRef.scrollIntoView({ behavior: 'smooth', block: 'end'});
                setTimeout(() => {
                    missionRef.style.animationPlayState = 'running';
                    setTimeout(() => {
                        missionRef.style.animationPlayState = '';
                    }, 2000);
                }, 700);
                return;
            }

            // add values to values object
            values[mission] = convertMissionPoints(missionValues, Number(mission));
        }

        // get score
        const params = new URLSearchParams({
            missions: JSON.stringify(values),
        });
        fetch(`/api/points?${params.toString()}`).then(async (res) => {
            const score = await res.text();

            // navigate to score page
            push({
                pathname: '/score',
                query: {
                    score: score,
                    teamNumber: team,
                    refereeName: name,
                },
            });
        });
    }

    function handleChange(missionIndex: number, values: string[]) {
        missions[missionIndex]['values'] = values;
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
        return <div>{missionComponents}</div>;
    }

    function isTeamAndNameFilled() {
        return team != "" && name != "";
    }
    

    return (
        <div style={{ margin: '0px auto 0px auto', width: '95%'}}>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{borderRadius: '10px', backgroundColor: 'primary.main', marginTop: '15px'}}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Autocomplete
                                value={team}
                                size="small"
                                id="team-select"
                                sx={{ width: 300, textAlign: "right"}}
                                onChange={(event, newValue) => {setTeam(newValue || '');}}
                                renderInput={(params) => <TextField {...params} label="Select Team" />}
                                options={Array.from(Array(1000).keys()).map((i) => (`Team #${i + 1}`))}
                            />
                            <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                                <Image src="/first-logo.png" alt="first-logo" width="200" height="50" style={{ marginLeft: 'auto'}} />
                                <Image src="/cargo-connect.png" alt="cargo-connect-logo" width="100" height="50" style={{ marginRight: 'auto'}} />
                            </Box>
                            
                            <Box>
                                <NameSelectDialog onSave={(name) => {setName(name)}} />
                            </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <Slide style={{ display: isTeamAndNameFilled() ? 'none' : 'block' }} direction="down" in={!isTeamAndNameFilled()} timeout={1000}>
                <div>
                    <Fade in={!isTeamAndNameFilled()} timeout={1000}>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '50px'}}>
                                Please fill in a team number and your name
                            </Typography>
                        </Box>
                    </Fade>
                </div>
            </Slide>

            <Slide style={{ display: isTeamAndNameFilled() ? 'block' : 'none' }} direction="up" in={isTeamAndNameFilled()} timeout={1000}>
                <div>
                    <Fade in={isTeamAndNameFilled()} timeout={1000}>
                        <div>
                            {missionComponents}
                            <Box sx={{textAlign: 'center'}}>
                                <Button variant="contained" color="primary" onClick={handleSubmit}
                                    sx={{
                                        width: '800px',
                                        height: '100px',
                                        margin: '50px 0px 40px 0px',
                                    }}
                                    style={{ fontSize: '40px' }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </div>
                    </Fade>
                </div>
            </Slide>

            
        </div>
    )
}