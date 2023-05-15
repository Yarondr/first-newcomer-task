import { SubMissionData } from "@/components/Mission";

interface MissionData {
    id: number;
    title: string;
    subMissions: SubMissionData[];
}


export const missions = [
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
            { description: "האם המכולה עם הצירים סגורה לגמרי?", options: ["לא סגורה / ריקה", "1-5 חלקי תכולה", "כל 6 חלקי התכולה"] },
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
            { description: "כמות מכולות חלקית בתוך עיגול כלשהו", options: ["1", "2", "3", "4", "5", "6"] },
            { description: "כמות מכולות לגמרי בתוך בתוך עיגול כלשהו", options: ["1", "2", "3", "4", "5", "6"] },
            { description: "האם המכולה הכחולה (ללא הצירים) נמצאת לגמרי בתוך העיגול הכחול?", options: ["כן", "לא"] },
            { description: "אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק?", options: ["כן", "לא"] },
            { description: "כמה עיגולים יש עם מכולה אחת לפחות לגמרי בתוך", options: ["0", "1", "2", "3", "4", "5", "6"] },
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
