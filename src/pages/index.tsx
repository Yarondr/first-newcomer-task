import NameSelectDialog from "@/components/NameSelectDialog";
import { isAllMissionValuesFilled } from "@/utils/missions/DataValidator";
import { MissionsObject, buildMissionComponents } from "@/utils/missions/MissionsData";
import { AppBar, Autocomplete, Box, Button, Fade, Slide, TextField, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined || 0,
        height: undefined || 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default function Home() {
    const { push } = useRouter();
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const missions: MissionsObject = {};
    const missionComponents = buildMissionComponents(missions);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (name == '') {
            setName(localStorage.getItem('name') || '');
        } else {
            localStorage.setItem('name', name);
        }
    }, [name]);

    async function handleSubmit() {
        let score = 0;

        for (const mission in missions) {
            console.log(missions[mission])
            const missionValues = missions[mission].values.map((value) => value.description);
            
            if (isAllMissionValuesFilled(missionValues, missions[mission].ref.current)) return;

            for (const subMission in missions[mission].values) {
                score += missions[mission].values[subMission].points;
            }
        }

        push({
            pathname: '/score',
            query: {
                score: score,
                teamNumber: team,
                refereeName: name,
            },
        });
    }

    function isTeamAndNameFilled() {
        return team != "" && name != "";
    }
    

    return (
        <div style={{ margin: '0px auto 0px auto', width: '95%'}}>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="fixed" sx={{borderRadius: '10px', backgroundColor: 'primary.main'}}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Autocomplete
                                value={team}
                                size="small"
                                id="team-select"
                                sx={{ width: "auto", textAlign: "right"}}
                                onChange={(event, newValue) => {setTeam(newValue || '');}}
                                renderInput={(params) => <TextField {...params} label="Select Team" />}
                                options={Array.from(Array(1000).keys()).map((i) => (`Team #${i + 1}`))}
                            />
                            {windowSize.width > 700 ?
                                <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                                    <Image src="/first-logo.png" alt="first-logo" width="200" height="50" style={{ marginLeft: 'auto'}} />
                                    <Typography variant="h4" component="div" sx={{ fontWeight: '900', marginLeft: '30px', fontFamily: 'Nunito'}}>
                                        CARGO CONNECT
                                    </Typography>
                                </Box> :
                                <></>
                            }
                            
                            <Box>
                                <NameSelectDialog originalName={name} onSave={(name) => {setName(name)}} />
                            </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{height: 50}}/>

            <Slide style={{ display: isTeamAndNameFilled() ? 'none' : 'block' }} direction="down" in={!isTeamAndNameFilled()} timeout={1000}>
                <div>
                    <Fade in={!isTeamAndNameFilled()} timeout={1000}>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '50px'}}>
                                אנא מלאו את מספר הקבוצה ואת שמכם
                            </Typography>
                        </Box>
                    </Fade>
                </div>
            </Slide>

            <Slide style={{ display: isTeamAndNameFilled() ? 'flex' : 'none', justifyContent: 'center'}} direction="up" in={isTeamAndNameFilled()} timeout={1000}>
                <div>
                    <Fade in={isTeamAndNameFilled()} timeout={1000}>
                        <div>
                            {missionComponents}
                            <Box sx={{textAlign: 'center'}}>
                                <Button variant="contained" color="secondary" onClick={async () => await handleSubmit()}
                                    sx={{
                                        width: 'auto',
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