import Mission, { MissionOption, SubMissionData } from "@/components/Mission";
import { createRef } from "react";

interface MissionData {
    id: number;
    title: string;
    subMissions: SubMissionData[];
    subMissionsBonus?: number;
}

export type MissionsObject = { [missionId: number]: { values: MissionOption[], ref: React.RefObject<HTMLDivElement> } };


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
                onChange={(missionIndex: number, values: MissionOption[]) => {
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
            {
                description: "האם כל הציוד שלכם נכנס באזור הביקורת הקטן?",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            }
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
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "קיבולת לא מנוצלת",
        subMissions: [
            {
                description: "האם המכולה עם הצירים סגורה לגמרי?",
                options: [
                    { description: "לא סגורה / ריקה", points: 0 },
                    { description: "1-5 חלקי תכולה", points: 20 },
                    { description: "כל 6 חלקי התכולה", points: 30 }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "פריקת מטוס התובלה",
        subMissions: [
            {
                description: "אם מטוס התובלה הוכן לפריקה כך שדלת המטען מונחת לגמרי למטה, ומונגעת במסגרת השחורה שלה",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "אם מטוס התובלה נפרק כך שהמכולה נפרדת לחלוטין מהמטוס",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "מסע ההובלה",
        subMissions: [
            {
                description: "האם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "האם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
        ],
        subMissionsBonus: 10
    },
    {
        id: 5,
        title: "החלפת מנוע",
        subMissions: [
            {
                description: "אם המנוע הוחלף, ממנוע דיזל למנוע חשמלי כך שהקורה הצהובה מונחת כל הדרך למטה/דרומה",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "הימנעות מתאונות",
        subMissions: [
            {
                description: "אם הרובוט שלכם חנה מעל הקו הכחול של הימנעות מתאונות בסוף המקצה והמשטח הצהוב:",
                options: [
                    { description: "לא חנה", points: 0},
                    { description: "לא הופל למטה", points: 20 },
                    { description: "הופל למטה", points: 30 }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "פריקת ספינת התובלה",
        subMissions: [
            {
                description: "האם המכולה כבר לא נוגעת בסיפון המזרחי של ספינת התובלה",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "האם המכולה נמצאת לגמרי ממזרח לסיפון המזרחי של ספינת התובלה",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
        ]
    },
    {
        id: 8,
        title: "הצחנת מטען",
        subMissions: [
            {
                description: "האם חבילת האוכל הופרדה מהמסוק שלכם",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "אם חבילת האוכל הופרדה מהמסוק בזירה השנייה, והיא לגמרי בתוך עיגול ה- CARGO CONNECT שלכם:",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "אם שתי הקבוצות הפרידו את חבילת האוכל מהמסוק בזירה שלהן",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
        ]
    },
    {
        id: 9,
        title: "מסילת רכבת",
        subMissions: [
            {
                description: "אם מסילת הרכבת תוקנה כך שהיא מונחת לגמרי למטה/מערבה",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "האם הרכבת הגיע ליעדה, כשהיא נעולה בקצה המסילה",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "מרכז מיון",
        subMissions: [
            {
                description: "האם המכולות מיונו כך שרק המכולה הכתומה נשארת לגמרי בתוך אזור המיון הכחול",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "משלוח עד הבית",
        subMissions: [
            {
                description: "אם החבילה נמסרה ליעדה כך שהיא על מפתן הדלת",
                options: [
                    { description: "לא נמסרה ליעדה", points: 0 },
                    { description: "חלקית", points: 20 },
                    { description: "לגמרי על", points: 30 }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "משלוח גדול",
        subMissions: [
            {
                description: "אם להב הטורבינה נוגע רק במעמד הכחול ו:",
                options: [
                    { description: "לא נוגע במעמד הכחול", points: 0 },
                    { description: "בשטיח", points: 20 },
                    { description: "בשום דבר אחר", points: 30 }
                ]
            },
            {
                description: "אם פסל התרנגולת עומד ישר על בסיסו בתוך העיגול",
                options: [
                    { description: "לא עומד ישר על בסיסו בתוך העיגול", points: 0 },
                    { description: "חלקית בפנים", points: 5 },
                    { description: "לגמרי בתוך", points: 10 }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "שרשור משאיות",
        subMissions: [
            {
                description: "אם שתי המשאיות מחוברות יחד, לגמרי מחוץ לבית",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "אם משאית מחוברת לגשר",
                options: [
                    { description: "כן", points: 10 },
                    { description: "לא", points: 0}
                ]
            }
        ],
        subMissionsBonus: 10
    },
    {
        id: 14,
        title: "גשר",
        subMissions: [
            {
                description: "כמה משטחי הגשר הורדו כך שהם נחים על התומך המרכזי שלהם",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 10 },
                    { description: "2", points: 20 },
                ]
            }
        ]
    },
    {
        id: 15,
        title: "טעינת מטענים",
        subMissions: [
            {
                description: "כמה מכולות יש על ונוגעות רק במשאיות השרשור",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 10 },
                    { description: "2+", points: 20 },
                ]
            },
            {
                description: "כמה מכולות יש על ונוגעות רק ברכבת",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 20 },
                    { description: "2+", points: 40 },
                ]
            },
            {
                description: "כמה מכולות יש על ונוגעות רק בסיפון המערבי של ספינת התובלה",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 30 },
                    { description: "2+", points: 60 },
                ]
            }
        ]
    },
    {
        id: 16,
        title: "CARGO CONNECT",
        subMissions: [
            {
                description: "כמות מכולות חלקית בתוך עיגול כלשהו",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 5 },
                    { description: "2", points: 10 },
                    { description: "3", points: 15 },
                    { description: "4", points: 20 },
                    { description: "5", points: 25 },
                    { description: "6", points: 30 },
                ]
            },
            {
                description: "כמות מכולות לגמרי בתוך בתוך עיגול כלשהו",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 10 },
                    { description: "2", points: 20 },
                    { description: "3", points: 30 },
                    { description: "4", points: 40 },
                    { description: "5", points: 50 },
                    { description: "6", points: 60 },
                ]
            },
            {
                description: "האם המכולה הכחולה (ללא הצירים) נמצאת לגמרי בתוך העיגול הכחול?",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק?",
                options: [
                    { description: "כן", points: 20 },
                    { description: "לא", points: 0 }
                ]
            },
            {
                description: "כמה עיגולים יש עם מכולה אחת לפחות לגמרי בתוך",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 10 },
                    { description: "2", points: 20 },
                    { description: "3", points: 30 },
                    { description: "4", points: 40 },
                    { description: "5", points: 50 },
                    { description: "6", points: 60 },
                ]
            },
        ]
    },
    {
        id: 17,
        title: "אסימוני דיוק",
        subMissions: [
            {
                description: "כמה אסימוני דיוק נשארו על הזירה?",
                options: [
                    { description: "0", points: 0 },
                    { description: "1", points: 10 },
                    { description: "2", points: 15 },
                    { description: "3", points: 25 },
                    { description: "4", points: 35 },
                    { description: "5", points: 50 },
                    { description: "6", points: 50 },
                ]
            },
        ]
    }
] as MissionData[];
