// to fixed date
export function timeUntil(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
        return "The target date has already passed.";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return {
        days: days,
        hours: hours,
        minutes: minutes
    };
}