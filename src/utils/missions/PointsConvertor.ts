import { missionsData } from "./MissionsData";

export function convertMissionPoints(values: string[], missionId: number): any | any[] {
    const newValues = values.map((value, i) => convertValue(i, value, missionId));

    return newValues.length === 1 ? newValues[0] : newValues;
}


function convertValue(index: number, value: string, missionId: number) {
    if (value == "כן") return true;
    else if (value == "לא") return false;

    if (!isNaN(Number(value))) return Number(value);

    return missionsData.find(mission => mission.id === missionId)?.subMissions[index].options.indexOf(value);
}


export async function getScore(values: {[missionId: number]: string[]}) {
    const params = new URLSearchParams({
        missions: JSON.stringify(values),
    });

    const res = await fetch(`/api/points?${params.toString()}`)
    return await res.text();
}