import { getLastSunday, getNextSaturday, getHM, to12H } from './timeHelpers'
import STRINGS from '../constants/strings'

// Gives time in H:MM AM/PM format, for humans to read.
export function makeTimeString(time) {
  if (time.length === 5) {
    const timeArr = time.split(":");
    let amPm = timeArr[0] >= 12 ? "pm" : "am"

    // -12 hours if we're at 13:00 or onward
    timeArr[0] -= timeArr[0] > 12 ? 12 : 0;
    return `${timeArr.join(":")} ${amPm}`
  }
  return new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit'})
}

// Give time in HH:MM without AM or PM.
export function makeHHMMTimeString(time) {
  time = time || Date.now();
  return new Date(time).toLocaleTimeString([], 
    {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
}

export function makeWeekDayString(lang, time) {
  if (!lang || !time) {
    return "";
  }
  return new Date(time).toLocaleDateString(lang, { weekday: 'long' });
}

export function makeShortWeekdayString(lang, time) {
  if (!lang || !time) {
    return "";
  }
  return new Date(time).toLocaleDateString(lang, { weekday: 'short' });
}

export function makeDateString(lang, time) {
  if (!lang || !time) {
    return "";
  }
  return new Date(time).toLocaleDateString(lang, { month: 'long', year: 'numeric', day:'numeric' });
}

export function makeShortDateString(lang, time) {
  if (!lang || !time) {
    return "";
  }
  return new Date(time).toLocaleDateString(lang, { month: '2-digit', year: '2-digit', day:'numeric' });
}

export function makeWeekString(lang, time) {
  if (!lang || !time) {
    return "";
  }
  const sun = getLastSunday(time);
  const sat = getNextSaturday(time);

  const sunStr = sun.toLocaleDateString(lang, { month: 'long', day:'numeric' });
  const satStr = sat.toLocaleDateString(lang, { month: 'long', day: 'numeric' });

  return(`${sunStr} – ${satStr}`)
}

export function makeDurationFromHHMM(start, end) {
  // Get numbers from HH:MM strings
  const [startH, startM] = start.split(':').map(str => Number(str))
  const [endH, endM] = end.split(':').map(str => Number(str))
  let h = endH - startH;
  let m = endM - startM;
  // Account for negative minutes value
  // e.g. 2h -40m becomes 1h 20m (same number of minutes but in normal time terms)
  if (m < 0) {
    h--;
    m += 60;
  }
  const hours = h ? `${h}h ` : '';
  const mins = `${m}m`
  return hours + mins
}

// Takes in a 24h hour and returns AM or PM.
export function amOrPm(hour) {
  return hour < 12 ? "am" : "pm"
}

/* Return an array containing the two AM/PM strings to add to
  the start and end of a time interval.
*/
export function intervalAMPM(hour1, hour2) {
  if (amOrPm(hour1) === amOrPm(hour2)) {
    return ["", amOrPm(hour1)];
  }
  return ["am", "pm"]
}

export function makeShortIntervalString(start, end) {
  const [startH24, startM] = getHM(start);
  const [endH24, endM] = getHM(end);
  const [AMPM1, AMPM2] = intervalAMPM(startH24, endH24);
  const [startH12, endH12] = to12H(startH24, endH24);

  const startStr = `${startH12}${startM ? ":" + startM : ""}${AMPM1}`
  const endStr = `${endH12}${endM ? ":" + endM : ""}${AMPM2}`
  return `${startStr} – ${endStr}`
}

export function makeErrorString(errorType, errorData, LANG) {
  return STRINGS[LANG].NEW_BLOCK_VALIDATION[errorType](errorData)
}