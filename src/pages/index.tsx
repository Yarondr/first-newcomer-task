import Mission from "@/components/Mission";
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

        <Mission id="00" title="בונוס ביקורת ציוד" subMissions={[
            { description: "האם כל הציוד שלכם נכנס באזור הביקורת הקטן?", options: ["כן", "לא"] },
        ]} />

        <Mission id="02" title="קיבולת לא מנוצלת" subMissions={[
            { description: "האם המכולה עם הצירים סגורה לגמרי?", options: ["לא סגורה / ריקה", "1-5 חלקי תכולה", "כל 6 חלקי התכולה"] },
        ]} />

        <Mission id="04" title="מסע ההובלה" subMissions={[
            { description: "האם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח", options: ["כן", "לא"] },
            { description: "האם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח", options: ["כן", "לא"] },
        ]} />

        <Mission id="08" title="הצחנת מטען" subMissions={[
            { description: "האם חבילת האוכל הופרדה מהמסוק שלכם", options: ["כן", "לא"] },
            { description: "אם חבילת האוכל הופרדה מהמסוק בזירה השנייה, והיא לגמרי בתוך עיגול ה- CARGO CONNECT שלכם:", options: ["כן", "לא"] },
            { description: "אם שתי הקבוצות הפרידו את חבילת האוכל מהמסוק בזירה שלהן", options: ["כן", "לא"] },
        ]} />

        <Mission id="16" title="CARGO CONNECT" subMissions={[
            { description: "כמות מכולות חלקית בתוך עיגול כלשהו", options: ["1", "2", "3", "4", "5", "6"] },
            { description: "כמות מכולות לגמרי בתוך בתוך עיגול כלשהו", options: ["1", "2", "3", "4", "5", "6"] },
            { description: "האם המכולה הכחולה (ללא הצירים) נמצאת לגמרי בתוך העיגול הכחול?", options: ["כן", "לא"] },
            { description: "אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק?", options: ["כן", "לא"] },
            { description: "כמה עיגולים יש עם מכולה אחת לפחות לגמרי בתוך", options: ["0", "1", "2", "3", "4", "5", "6"] },
        ]} />

        <Mission id="17" title="אסימוני דיוק" subMissions={[
            { description: "כמה אסימוני דיוק נשארו על הזירה?", options: ["0", "1", "2", "3", "4", "5", "6"] },
        ]} />
    </div>
    )
}