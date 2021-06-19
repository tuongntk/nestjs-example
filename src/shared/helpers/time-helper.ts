import * as moment from "moment";
import { roundTo } from "./number-helper";

export const utcNow = (): moment.Moment => moment().utc()
export const utcNowTimeStamp = (): number => moment().utc().unix()

export function isValidDate(timeStamp: number, timeZone?: number): boolean {
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).isValid() : moment.unix(timeStamp).isValid()
}

export function guardValidDate(timeStamp: number, timeZone?: number) {
    if (!isValidDate(timeStamp, timeZone)) {
        throw new Error('Invalid datetime timestamp format');
    }
}

export const toDate = (timeStamp: number, timeZone?: number): moment.Moment => {
    guardValidDate(timeStamp, timeZone)
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone) : moment.unix(timeStamp).utc()
}

export const toFormat = (timeStamp: number, format?: string, timeZone?: number): string => {
    guardValidDate(timeStamp, timeZone)

    if (!format) {
        return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).format() : moment.unix(timeStamp).utc().format()
    }

    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).format(format) : moment.unix(timeStamp).utc().format(format)
}

export const durationInMinutes = (startTimeStamp: number, endTimeStamp: number): number => {
    return roundTo(moment.duration(toDate(endTimeStamp).diff(toDate(startTimeStamp))).asMinutes())
}

export const durationInHours = (startTimeStamp: number, endTimeStamp: number): number => {
    return roundTo(moment.duration(toDate(endTimeStamp).diff(toDate(startTimeStamp))).asHours())
}

export const durationUpToNowInMinutes = (startTimeStamp: number): number => durationInMinutes(startTimeStamp, utcNowTimeStamp())

export const durationUpToNowInHours = (startTimeStamp: number): number => durationInHours(startTimeStamp, utcNowTimeStamp())