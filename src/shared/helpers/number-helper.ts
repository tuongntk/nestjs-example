import { format, round } from 'mathjs'

export function roundTo(value: number, precision: number = 2) : number {
    return round(value, precision)
}

export function formatTo(value: number, precision: number = 2) : string {
    return format(value, precision)
}