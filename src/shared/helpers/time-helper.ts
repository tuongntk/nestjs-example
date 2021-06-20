import * as moment from "moment";
import { roundTo } from "./number-helper";

export const utcNow = (): moment.Moment => moment().utc()
export const utcNowTimeStamp = (): number => utcNow().unix()

export const newUtcDate = (date: number, months: number = 0, years: number = 0, hours: number = 0, minutes: number = 0
    , seconds: number = 0): moment.Moment => {
    if (date < 1 && date > 31) {
        throw new Error('Invalid date format. Accepts numbers from 1 to 31');
    }

    if (months < 0 && months > 11) {
        throw new Error('Invalid months format. Accepts numbers from 0 to 1');
    }

    if (years < -270000 && years > 270000) {
        throw new Error('Invalid years format. Accepts numbers from -270,000 to 270,000');
    }

    if (hours < 0 && date > 23) {
        throw new Error('Invalid hours format. Accepts numbers from 0 to 23');
    }

    if (minutes < 0 && minutes > 59) {
        throw new Error('Invalid minutes format. Accepts numbers from 0 to 59');
    }

    return moment().utc().date(date).month(months - 1).year(years).hour(hours).minute(minutes).second(seconds)
}

export const newUtcTimeStamp = (date: number, months: number = 0, years: number = 0, hours: number = 0, minutes: number = 0
    , seconds: number = 0): number => newUtcDate(date, months, years, hours, minutes, seconds).unix()

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

export const getHoursUtcTimeStamp = (timeStampUtc: number): number => toUtcDate(timeStampUtc).hour()
export const getMinutesUtcTimeStamp = (timeStampUtc: number): number => toUtcDate(timeStampUtc).minute()

export const addHoursUtcNow = (hours: number = 0): number => utcNow().add(hours, 'hours').unix()
export const addMinutesUtcNow = (minutes: number = 0): number => utcNow().add(minutes, 'minutes').unix()

export const addHoursUtcTimeStamp = (timeStampUtc: number, hours: number = 0): number => toUtcDate(timeStampUtc).add(hours, 'hours').unix()
export const addMinutesUtcTimeStamp = (timeStampUtc: number, minutes: number = 0): number => toUtcDate(timeStampUtc).add(minutes, 'minutes').unix()

const addMinutesUtc = (dateUtc: moment.Moment, minutes: number = 0): moment.Moment => dateUtc.add(minutes, 'minutes')
const getMinutesUtc = (dateUtc: moment.Moment): number => dateUtc.minute()

export function getBlockListOfUtcTimes(startTimeStampUtc: number, endTimeStampUtc: number, interval: number = 30): number[] {
    let blocks = [];
    let startTimeUtc = toUtcDate(startTimeStampUtc)
    const endTimeUtc = toUtcDate(endTimeStampUtc)

    while (startTimeUtc < endTimeUtc) {
        const currentMinutes = getMinutesUtc(startTimeUtc)

        let duration = (currentMinutes > interval) ? currentMinutes - interval : interval - currentMinutes;


        startTimeUtc = addMinutesUtc(startTimeUtc, interval)
    }

    return blocks;
}