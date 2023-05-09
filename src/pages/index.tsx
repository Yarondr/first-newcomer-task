import NameSelectDialog from "@/components/NameSelectDialog";
import { AppBar, Autocomplete, Box, TextField, Toolbar } from "@mui/material";
import * as React from "react";

export default function Home() {
    const [name, setName] = React.useState('');


    return (
    <div>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{borderRadius: '10px'}}>
                <Toolbar>
                    <Autocomplete
                        disablePortal
                        id="team-select"
                        size="small"
                        options={Array.from(Array(1000).keys()).map((i) => (`Team #${i + 1}`))}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Select Team" />}
                    />
                    <Box sx={{ marginLeft: 'auto'}}>
                        <NameSelectDialog name={name} onSave={(name) => setName(name)} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
    )
}