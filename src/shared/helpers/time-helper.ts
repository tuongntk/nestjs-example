import * as moment from "moment";
import { roundTo } from "./number-helper";

export const utcNow = (): moment.Moment => moment().utc()
export const utcNowTimeStamp = (): number => moment().utc().unix()

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
    return moment.unix(timeStampUtc).utc().format(format)
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

export const startOfDayUtcNow = (): number => moment().utc().startOf('day').unix()
export const startOfDayUtcTimeStamp = (timeStampUtc: number): number => moment.unix(timeStampUtc).utc().startOf('day').unix()

export const getDayOfWeekUtcNow = (): number => moment().utc().day()
export const getDayOfWeekTimeStamp = (timeStampUtc: number): number => moment.unix(timeStampUtc).utc().day()

export const getHourTimeStampUtc = (timeStampUtc: number): number => moment.unix(timeStampUtc).utc().hour()
export const getMinuteTimeStamp = (timeStampUtc: number, timeZone?: number): number => moment.unix(timeStampUtc).utc().minute()

export const addHourUtcNow = (hours: number = 0): number => moment().utc().add(hours, 'hours').unix()
export const addMinuteUtcNow = (minutes: number = 0): number => moment().utc().add(minutes, 'minutes').unix()

export const addHourTimeStampUtc = (timeStampUtc: number, hours: number = 0): number => moment.unix(timeStampUtc).utc().add(hours, 'hours').unix()
export const addMinuteTimeStampUtc = (timeStampUtc: number, minutes: number = 0): number => moment.unix(timeStampUtc).utc().add(minutes, 'minutes').unix()

export function getBlockListOfTimes(startTimeStampUtc: number, endTimeStampUtc: number, interval: number = 30): number[] {
    let startTimeUtc = toUtcDate(startTimeStampUtc)
    const endTimeUtc = toUtcDate(endTimeStampUtc)

    while (startTimeUtc < endTimeUtc) {

    }

    return [];
}