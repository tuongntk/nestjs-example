import * as moment from "moment";
import { roundTo } from "./number-helper";

export function isValidDate(timeStamp: number, timeZone?: number) : boolean {
    return moment.unix(timeStamp).isValid()
}

export function guardValidDate(timeStamp: number, timeZone?: number) {
    if (!isValidDate(timeStamp)) {
        throw new Error('Invalid datetime timestamp format');
    }
}

export function utcNow(timeZone?: number) : moment.Moment {
    return moment().utc()
}

export function utcNowTimeStamp(timeZone?: number): number {
    return moment().utc().unix()
}

export function toDate(timeStamp: number, timeZone?: number) : moment.Moment{
    guardValidDate(timeStamp)
    return moment.unix(timeStamp)
}

export function toDateTimeStamp(timeStamp: number, timeZone?: number): number {
    guardValidDate(timeStamp)
    return moment.unix(timeStamp).unix()
}

export function durationInMinutes(startTimeStamp: number, endTimeStamp: number): number {
    return roundTo(moment.duration(toDate(endTimeStamp).diff(toDate(startTimeStamp))).asMinutes())
}

export function durationInHours(startTimeStamp: number, endTimeStamp: number): number {
    return roundTo(moment.duration(toDate(endTimeStamp).diff(toDate(startTimeStamp))).asHours())
}

export function durationInMinutesUpToNow(startTimeStamp: number): number {
    return durationInMinutes(startTimeStamp, utcNowTimeStamp())
}

export function durationInHoursUpToNow(startTimeStamp: number): number {
    return durationInHours(startTimeStamp, utcNowTimeStamp())
}