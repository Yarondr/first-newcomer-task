import { NextApiRequest, NextApiResponse } from "next";
import { missionFunctions } from "./utils/missions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.query.missions

    try {
        const missions: object = JSON.parse(data?.toString() || '')
        let totalPoints = 0;
        for (const mission in missions) {
            const value = (missions as any)[mission];
            const missionFunction = missionFunctions[parseInt(mission)];
            totalPoints += missionFunction?.(value) || 0;
        }
        res.status(200).send(totalPoints.toString());
    } catch (e) {
        res.status(400).send('Invalid data')
    }
}