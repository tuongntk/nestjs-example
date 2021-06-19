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

export const startOfDayNow = (timeZone?: number): number => {
    return timeZone ? moment().utcOffset(timeZone).startOf('day').unix() : moment().utc().startOf('day').unix()
}

export const startOfDayTimeStamp = (timeStamp: number, timeZone?: number): number => {
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).startOf('day').unix() : moment.unix(timeStamp).utc().startOf('day').unix()
}

export const getDayOfWeekNow = (timeZone?: number): number => {
    return timeZone ? moment().utcOffset(timeZone).day() : moment().utc().day()
}

export const getDayOfWeekTimeStamp = (timeStamp: number, timeZone?: number): number => {
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).day() : moment.unix(timeStamp).utc().day()
}

export const getHourTimeStamp = (timeStamp: number, timeZone?: number): number => {
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).hour() : moment.unix(timeStamp).utc().hour()
}

export const getMinuteTimeStamp = (timeStamp: number, timeZone?: number): number => {
    return timeZone ? moment.unix(timeStamp).utcOffset(timeZone).minute() : moment.unix(timeStamp).utc().minute()
}