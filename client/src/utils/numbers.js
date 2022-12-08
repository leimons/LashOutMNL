/**
 * Formats the price with peso sign and 2 decimal places
 * @param {Number} num – price to format 
 * @returns price formatted as currency string
 */
export function formatPrice (num) {
    return Number(num).toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP',
    })
}

/**
 * Converts 12hr time (ex. "1:00 PM") to 24hr time (ex. "13:00")
 * @param {String} time12h 
 * @returns 24hr time
 */
const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12')
        hours = '00';

    if (modifier === 'PM')
        hours = parseInt(hours, 10) + 12;

    return `${hours}:${minutes}`;
}

/**
 * Converts time formatted as string to integer
 * @param {String} time – time as string (ex. "8:00")
 * @returns time as integer
 */
export function parseTime(time) {
    const modifiers = ["AM", "PM", "am", "pm"];
    let time24 = modifiers.some(modifier => time.includes(modifier)) 
        ? convertTime12to24(time)   // Convert time to 24hr
        : time; 

	let parts = time24.split(":").map(n => Number(n));
    return (parts[0] * 3600) + (parts[1] * 60);
}

/**
 * Converts duration formatted as string to integer
 * @param {String} duration – duration as string (ex. "1 hr", "30 min")
 * @returns duration as integer
 */
export function parseDuration(duration) {
	let units = duration.replace(/\D/g,''); // remove "hrs" and "mins" from duration
	if (duration.includes('hr'))
        return units * 3600;	
	else if (duration.includes('min'))
        return units * 60;
    else
        throw Error('Invalid duration')
}

/**
 * Converts time formatted as integer to string
 * @param {Number} seconds 
 * @returns time as string (ex. "8:00")
 */
export function formatTime(seconds) {
	function pad(num) {
        return ( num < 10 ? "0" : "" ) + num;
    }

    return [pad(Math.floor(seconds/3600)), pad(Math.floor(seconds/60)%60)].join(":");
}

/**
 * Converts duration formatted as integer to string
 * @param {Number} seconds 
 * @returns duration as string (ex. "1 hr", "30 min", "1 hr 30 min")
 */
export function formatDuration(seconds) {
	let hrs = Math.floor(seconds/3600);
    let mins = Math.floor(seconds/60) % 60;
    
    if (hrs && mins)
        return `${hrs} hr ${mins} min`
    return (hrs > 0 ? hrs + ' hr' : '') + (mins > 0 ? mins + ' min' : '')
}

/**
 * Computes for the sum of a list of durations
 * @param {Array} listDurations – list of durations (ex. "2 hr") as array
 * @returns total duration formatted as string (ex. "2 hr 30 min")
 */
export function sumDurations(listDurations) {
    var durations = listDurations.map(duration => parseDuration(duration))
    var sum =  durations.reduce((partialSum, a) => partialSum + a, 0);
    return formatDuration(sum);
}