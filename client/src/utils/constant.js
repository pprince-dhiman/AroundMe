export const USER_BACKEND_API = "http://localhost:8000/api/v1/users";
export const EVENT_BACKEND_API = "http://localhost:8000/api/v1/events";

export const calculateAmount = ({ amount, discount }) => {
    return Math.floor(amount - ((amount * discount) / 100));
}

export const getStartDateTime = ({ startDateTime }) => {
    const [startDate, timeWithZ] = startDateTime.split('T');
    const startTime = timeWithZ.replace('00.000Z', ''); // Remove seconds, milliseconds and Z
    return { startDate, startTime };
}