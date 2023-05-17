import Mission, { SubMissionData } from "@/components/Mission";
import { createRef } from "react";

interface MissionData {
    id: number;
    title: string;
    subMissions: SubMissionData[];
}

export type MissionsObject = { [missionId: number]: { values: string[], ref: React.RefObject<HTMLDivElement> } };


export function buildMissionComponents(missions: MissionsObject) {
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
                onChange={(missionIndex: number, values: string[]) => {
                    missions[missionIndex]['values'] = values;
                }}
            />
        )
    }
    return <div>{missionComponents}</div>;
}


export const missionsData = [
    {
        id: 0,
        title: "בונוס ביקורת ציוד",
        subMissions: [
            { description: "האם כל הציוד שלכם נכנס באזור הביקורת הקטן?", options: ["כן", "לא"] },
        ]
    },
    {
        id: 2,
        title: "קיבולת לא מנוצלת",
        subMissions: [
            { description: "האם המכולה עם הצירים סגורה לגמרי?", options: ["כל 6 חלקי התכולה", "1-5 חלקי תכולה", "לא סגורה / ריקה"] },
        ]
    },
    {
        id: 4,
        title: "מסע ההובלה",
        subMissions: [
            { description: "האם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח", options: ["כן", "לא"] },
            { description: "האם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח", options: ["כן", "לא"] },
        ]
    },
    {
        id: 8,
        title: "הצחנת מטען",
        subMissions: [
            { description: "האם חבילת האוכל הופרדה מהמסוק שלכם", options: ["כן", "לא"] },
            { description: "אם חבילת האוכל הופרדה מהמסוק בזירה השנייה, והיא לגמרי בתוך עיגול ה- CARGO CONNECT שלכם:", options: ["כן", "לא"] },
            { description: "אם שתי הקבוצות הפרידו את חבילת האוכל מהמסוק בזירה שלהן", options: ["כן", "לא"] },
        ]
    },
    {
        id: 16,
        title: "CARGO CONNECT",
        subMissions: [
            { description: "כמות מכולות חלקית בתוך עיגול כלשהו", options: ["6", "5", "4", "3", "2", "1"] },
            { description: "כמות מכולות לגמרי בתוך בתוך עיגול כלשהו", options: ["6", "5", "4", "3", "2", "1"] },
            { description: "האם המכולה הכחולה (ללא הצירים) נמצאת לגמרי בתוך העיגול הכחול?", options: ["כן", "לא"] },
            { description: "אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק?", options: ["כן", "לא"] },
            { description: "כמה עיגולים יש עם מכולה אחת לפחות לגמרי בתוך", options: ["6", "5", "4", "3", "2", "1", "0"] },
        ]
    },
    {
        id: 17,
        title: "אסימוני דיוק",
        subMissions: [
            { description: "כמה אסימוני דיוק נשארו על הזירה?", options: ["0", "1", "2", "3", "4", "5", "6"] },
        ]
    }
] as MissionData[];
