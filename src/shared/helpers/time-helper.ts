import * as moment from "moment";
import { roundTo } from "./number-helper";

export const utcNow = (): moment.Moment => moment().utc()
export const utcNowTimeStamp = (): number => utcNow().unix()

export const isValidUtcDate = (timeStampUtc: number): boolean => moment.unix(timeStampUtc).utc().isValid()
export const isValidLocalDate = (timeStamp: number, timeZone: number): boolean => moment.unix(timeStamp).utcOffset(timeZone).isValid()

export function guardValidUtcDate(timeStampUtc: number) {
    if (!isValidUtcDate(timeStampUtc)) {
        throw new Error('Invalid datetime timestamp format');
    }
}

export function guardValidLocalDate(timeStamp: number, timeZone: number) {
    if (!isValidLocalDate(timeStamp, timeZone)) {
        throw new Error('Invalid datetime timestamp format');
    }
}

export const toUtcDate = (timeStampUtc: number): moment.Moment => {
    guardValidUtcDate(timeStampUtc)
    return moment.unix(timeStampUtc).utc()
}

export const toLocalDate = (timeStamp: number, timeZone: number = 420): moment.Moment => {
    guardValidLocalDate(timeStamp, timeZone)
    return moment.unix(timeStamp).utcOffset(timeZone)
}

export const toUtcFormat = (timeStampUtc: number, format?: string): string => {
    guardValidUtcDate(timeStampUtc)
    return toUtcDate(timeStampUtc).format(format)
}

export const toLocalFormat = (timeStamp: number, timeZone: number = 420, format?: string): string => {
    guardValidLocalDate(timeStamp, timeZone)
    return moment.unix(timeStamp).utcOffset(timeZone).format(format)
}

export const durationInMinutes = (startTimeStampUtc: number, endTimeStampUtc: number): number => {
    return roundTo(moment.duration(toUtcDate(endTimeStampUtc).diff(toUtcDate(startTimeStampUtc))).asMinutes())
}

export const durationInHours = (startTimeStampUtc: number, endTimeStampUtc: number): number => {
    return roundTo(moment.duration(toUtcDate(endTimeStampUtc).diff(toUtcDate(startTimeStampUtc))).asHours())
}

export const durationUpToNowInMinutes = (startTimeStampUtc: number): number => durationInMinutes(startTimeStampUtc, utcNowTimeStamp())
export const durationUpToNowInHours = (startTimeStampUtc: number): number => durationInHours(startTimeStampUtc, utcNowTimeStamp())

export const startOfDayUtcNow = (): number => utcNow().startOf('day').unix()
export const startOfDayUtcTimeStamp = (timeStampUtc: number): number => toUtcDate(timeStampUtc).startOf('day').unix()

export const getDayOfWeekUtcNow = (): number => utcNow().day()
export const getDayOfWeekUtcTimeStamp = (timeStampUtc: number): number => toUtcDate(timeStampUtc).day()

export const getHourUtcTimeStamp = (timeStampUtc: number): number => toUtcDate(timeStampUtc).hour()
export const getMinuteUtcTimeStamp = (timeStampUtc: number, timeZone?: number): number => toUtcDate(timeStampUtc).minute()

export const addHourUtcNow = (hours: number = 0): number => utcNow().add(hours, 'hours').unix()
export const addMinuteUtcNow = (minutes: number = 0): number => utcNow().add(minutes, 'minutes').unix()

export const addHourUtcTimeStamp = (timeStampUtc: number, hours: number = 0): number => toUtcDate(timeStampUtc).add(hours, 'hours').unix()
export const addMinuteUtcTimeStamp = (timeStampUtc: number, minutes: number = 0): number => toUtcDate(timeStampUtc).add(minutes, 'minutes').unix()

export function getBlockListOfUtcTimes(startTimeStampUtc: number, endTimeStampUtc: number, interval: number = 30): number[] {
    let startTimeUtc = toUtcDate(startTimeStampUtc)
    const endTimeUtc = toUtcDate(endTimeStampUtc)

    while (startTimeUtc < endTimeUtc) {

    }

    return [];
}