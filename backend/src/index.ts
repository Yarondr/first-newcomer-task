import express from 'express';
import { missionFunctions } from './missions';
const app = express();
const PORT = 8080;

// backend api server that will be used to serve the application
app.get('/api/points', (req, res) => {
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
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});