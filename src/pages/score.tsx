import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Score() {
    const router = useRouter();
    const query = router.query;
    const { score, teamNumber, refereeName } = query;

    useEffect(() => {
        if (!score || !teamNumber || !refereeName) {
            router.push('/');
        }
    }, [score, teamNumber, refereeName]);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <Box sx={{ flexGrow: 1, textAlign: 'center'}}>
                <Typography variant="h4" component="div" fontSize={40}>
                    Team Number: #{teamNumber}
                </Typography>
                <Typography variant="h4" component="div" fontSize={80}>
                    Score: {score}
                </Typography>
                <Typography variant="h4" component="div" fontSize={40} sx={{ marginTop: '40px'}}>
                    Referee: {refereeName}
                </Typography>
            </Box>
        </Box>
    )
}