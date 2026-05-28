export const USER_BACKEND_API = "http://localhost:8000/api/v1/users";
export const EVENT_BACKEND_API = "http://localhost:8000/api/v1/events";

export const calculateAmount = ({ amount, discount }) => {
    return Math.floor(amount - ((amount * discount) / 100));
}

export const getStartDateTime = ({ startDateTime }) => {
    const [startDate, timeWithZ] = startDateTime.split('T');
    const startTime = timeWithZ.replace(':00.000Z', ''); // Remove seconds, milliseconds and Z
    return { startDate, startTime };
}

export const getRegistrationDeadline = (deadline) => {

    // Create Date object
    const dateObj = new Date(deadline);

    // Date -> 27/05/2026
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    // Time -> 05:46 AM
    const formattedTime = dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return `${formattedDate}, ${formattedTime}`;
};