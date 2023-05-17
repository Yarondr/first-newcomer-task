export const missionFunctions: {[key: number]: (status: any) => number} = {
    0: calcMissionZero,
    2: calcMissionTwo,
    4: calcMissionFour,
    8: calcMissionEight,
    16: calcMissionSixteen,
    17: calcMissionSeventeen,
}
/**
 * if all the equipment is inside the base, return 20 points.
 * @param complete whether all the equipment is inside the base
 * @returns points
 * @example true -> 20 points
 */
function calcMissionZero(complete: boolean) {
    return complete ? 20 : 0;
}

/**
 * if the truck is fully closed and full, return 30 (status == 0).
 * if the truck is fully closed and partly full, return 20 (status == 1).
 * otherwise, return 0 (status == 2).
 * @param status the status of the truck
 * @returns points
 * @example 1 -> 30 points
 */
function calcMissionTwo(status: number) {
    return status == 0 ? 30 : status == 1 ? 20 : 0;
}

/**
 * if the truck reached the destination, add 10 points
 * if the plane reached the destination, add 10 points
 * if both reached the destination, add 10 bonus points
 * @param status the status of the truck and the plane
 * @returns points
 * @example [true, true] -> 30 points
*/
function calcMissionFour(status: boolean[]) {
    const points = [10, 10];
    return points.reduce((acc, cur, i) => acc + (status[i] ? cur : 0), 0) + (status[0] && status[1] ? 10 : 0);
}

/**
 * if the food package has been separated from the helicopter in your field, add 20 points.
 * if the food package has been separated from the helicopter in the opponent's field, and the food package is in your CARGO CONNECT circle, add 10 points.
 * if the food package has been separated from the helicopter in your field and in the opponent's field, add 10 points.
 * @param status the status of the food package in your field and in the opponent's field
 * @returns points
 * @example [true, false, false] -> 20 points
 */
function calcMissionEight(status: boolean[]) {
    const points = [20, 10, 10];
    return points.reduce((acc, cur, i) => acc + (status[i] ? cur : 0), 0);
}

/**
 * for each container that is partly in some circle, add 5 points.
 * for each container that is fully in some circle, add 10 points.
 * if the blue container is fully in the blue circle, add 20 points.
 * if the green container is fully in the green circle, add 20 points.
 * for each circle with at least one container fully inside, add 10 points.
 * @param status the status of the containers [number, number, boolean, boolean, number]
 * @returns points
 * @example [2, 1, true, false, 2] -> 50 points
*/
function calcMissionSixteen(status: (number|boolean)[]) {
    const points = [5, 10, 20, 20, 10]
    return status.reduce((acc: number, cur, i) => {
        return typeof cur == "boolean" ? acc + (cur ? points[i] : 0) : acc + points[i] * cur; 
    }, 0)
}

/**
 * according to the amount of precision tokens left on the field, determine the points to be awarded
 * @param amount the amount of precision tokens left on the field
 * @returns points
 * @example 3 -> 25 points
*/
function calcMissionSeventeen(amount: number) {
    const points = [10, 15, 25, 35, 50, 50];
    return points[amount! - 1];
}