
export function isAllMissionValuesFilled(missionValues: string[], missionRef: HTMLDivElement | null) {
    if (!missionRef) return true;

    if (missionValues.length === 0 || missionValues.includes('')) {
        missionRef.scrollIntoView({ behavior: 'smooth', block: 'end'});
        setTimeout(() => {
            missionRef.style.animationPlayState = 'running';
            setTimeout(() => {
                missionRef.style.animationPlayState = '';
            }, 2000);
        }, 700);
        return true;
    }

    return false;
}