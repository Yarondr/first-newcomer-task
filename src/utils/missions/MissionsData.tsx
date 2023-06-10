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
        id: 1,
        title: "דגם פרוייקט החדשנות",
        subMissions: [
            {
                description: "אם דגם פרויקט החדשנות שלכם עוקב אחרי הכללים הבאים:\n" +
                             "עשוי מלפחות שני חלקי LEGO לבנים\n" +
                             "באורך של לפחות 4 \"בליטות\" LEGO בכיוון כלשהו.\n" + 
                             "חלק כלשהו ממנו מוגע בעיגול הCARGO CONNECT",
                options: ["כן", "לא"]
            }
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
        id: 3,
        title: "פריקת מטוס התובלה",
        subMissions: [
            { description: "אם מטוס התובלה הוכן לפריקה כך שדלת המטען מונחת לגמרי למטה, ומונגעת במסגרת השחורה שלה", options: ["כן", "לא"] },
            { description: "אם מטוס התובלה נפרק כך שמכולה נפרדת לחלוטין מהמטוס", options: ["כן", "לא"] }
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
        id: 5,
        title: "החלפת מנוע",
        subMissions: [
            { description: "אם המנוע הוחלף, ממנוע דיזל למנוע חשמלי כך שהקורה הצהובה מונחת כל הדרך למטה/דרומה", options: ["כן", "לא"] }
        ]
    },
    {
        id: 6,
        title: "הימנעות מתאונות",
        subMissions: [
            { description: "אם הרובוט שלכם חנה מעל הקו הכחול של הימנעות מתאונות בסוף המקצה והמשטח הצהוב:", options: ["לא חנה", "לא הופל למטה", "הופל למטה"] }
        ]
    },
    {
        id: 7,
        title: "פריקת ספינת התובלה",
        subMissions: [
            { description: "האם המכולה כבר לא נוגעת בסיפון המזרחי של ספינת התובלה", options: ["כן", "לא"] },
            { description: "האם המכולה נמצאת לגמרי ממזרח לסיפון המזרחי של ספינת התובלה", options: ["כן", "לא"] },
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
        id: 9,
        title: "מסילת רכבת",
        subMissions: [
            { description: "אם מסילת הרכבת תוקנה כך שהיא מונחת לגמרי למטה/מערבה", options: ["כן", "לא"] },
            { description: "האם הרכבת הגיע ליעדה, כשהיא נעולה בקצה המסילה", options: ["כן", "לא"] }
        ]
    },
    {
        id: 10,
        title: "מרכז מיון",
        subMissions: [
            { description: "האם המכולות מיונו כך שרק המכולה הכתומה נשארת לגמרי בתוך אזור המיון הכחול", options: ["כן", "לא"] }
        ]
    },
    {
        id: 11,
        title: "משלוח עד הבית",
        subMissions: [
            { description: "אם החבילה נמסרה ליעדה כך שהיא על מפתן הדלת", options: ["לא נמסרה ליעדה", "חלקית", "לגמרי על"] }
        ]
    },
    {
        id: 12,
        title: "משלוח גדול",
        subMissions: [
            { description: "אם להב הטורבינה נוגע רק במעמד הכחול ו:", options: ["לא נוגע במעמד הכחול", "בשטיח", "בשום דבר אחר"] },
            { description: "אם פסל התרנגולת עומד ישר על בסיסו בתוך העיגול", options: ["לא עומד ישר על בסיסו בתוך העיגול", "חלקית בפנים", "לגמרי בתוך"]}
        ]
    },
    {
        id: 13,
        title: "שרשור משאיות",
        subMissions: [
            { description: "אם שתי המשאיות מחוברות יחד, לגמרי מחוץ לבית", options: ["כן", "לא"] },
            { description: "אם משאית מחוברת לגשר", options: ["כן", "לא"] }
        ]
    },
    {
        id: 14,
        title: "גשר",
        subMissions: [
            { description: "כמה משטחי הגשר הורדו כך שהם נחים על התומך המרכזי שלהם", options: ["0", "1", "2"] }
        ]
    },
    {
        id: 15,
        title: "טעינת מטענים",
        subMissions: [
            { description: "כמה מכולות יש על ונוגעות רק במשאיות השרשור", options: ["0", "1", "2+"] },
            { description: "כמה מכולות יש על ונוגעות רק ברכבת", options: ["0", "1", "2+"] },
            { description: "כמה מכולות יש על ונוגעות רק בסיפון המערבי של ספינת התובלה", options: ["0", "1", "2+"] }
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
