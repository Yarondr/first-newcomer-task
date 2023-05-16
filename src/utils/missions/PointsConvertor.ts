import { missionsData } from "./MissionsData";

export function convertMissionPoints(values: string[], missionId: number): any | any[] {
    const newValues = values.map((value, i) => convertValue(i, value, missionId));
    if (newValues.length == 1) return newValues[0];
    return newValues;
}


function convertValue(index: number, value: string, missionId: number) {
    if (value == "כן") return true;
    else if (value == "לא") return false;

    if (!isNaN(Number(value))) return Number(value);

    return missionsData.find(mission => mission.id === missionId)?.subMissions[index].options.indexOf(value);
}