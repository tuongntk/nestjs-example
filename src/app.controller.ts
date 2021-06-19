import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { formatTo } from './shared/helpers/number-helper';
import { durationInMinutes, utcNowTimeStamp, utcNow, toDate, toFormat, durationUpToNowInMinutes, isValidDate, startOfDayNow, startOfDayTimeStamp, getDayOfWeekNow, getDayOfWeekTimeStamp, getMinuteTimeStamp, getHourTimeStamp } from './shared/helpers/time-helper';

import * as moment from "moment";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): any {

    const tz = 420;
    const startTime = 1624086832;
    const startTimeUpToNow = 1624093569;
    const endTime = 1624086845;
    const nowTimeStamp = utcNowTimeStamp()
    const now = utcNow()

    const durationMinutes = durationInMinutes(startTime, endTime)
    const durationMinutesUpToNow = durationUpToNowInMinutes(startTimeUpToNow)

    console.log(`================================================================`);

    console.log(`validDate utc: ${isValidDate(1624086832)}`);
    console.log(`validDate timezone: ${isValidDate(1624086832, 420)}`);

    console.log(`================================================================`);

    console.log(`invalidDate utc: ${isValidDate(162408683216240)}`);
    console.log(`invalidDate timezone: ${isValidDate(162408683216240, 420)}`);

    console.log(`================================================================`);

    console.log(`nowTimeStamp utc: ${nowTimeStamp}`);

    console.log(`================================================================`);

    console.log(`nowString utc: ${now}`);

    console.log(`================================================================`);

    console.log(`toNowString utc: ${toDate(nowTimeStamp)}`);
    console.log(`toNowString timezone: ${toDate(nowTimeStamp, 420)}`);

    console.log(`================================================================`);

    console.log(`now toFormat utc: ${toFormat(nowTimeStamp)}`);
    console.log(`now toFormat timezone: ${toFormat(nowTimeStamp, null, 420)}`);

    console.log(`================================================================`);

    console.log(`toFormat utc: ${toFormat(1624086832)}`);
    console.log(`toFormat timezone: ${toFormat(1624086832, null, 420)}`);

    console.log(`================================================================`);

    console.log(`startOfDayNow utc: ${startOfDayNow()}`);
    console.log(`startOfDayNow timezone: ${startOfDayNow(420)}`);

    console.log(`================================================================`);

    console.log(`toTimeStamp start of the day utc: ${startOfDayTimeStamp(startTime)}`);
    console.log(`toTimeStamp start of the day timezone: ${startOfDayTimeStamp(startTime, 420)}`);

    console.log(`================================================================`);

    console.log(`getDayOfWeekNow utc: ${getDayOfWeekNow()}`);
    console.log(`getDayOfWeekNow timezone: ${getDayOfWeekNow(420)}`);

    console.log(`================================================================`);

    console.log(`getDayOfWeekTimeStamp utc June 18, 2021 2:14:05 PM GMT+07:00 : ${getDayOfWeekTimeStamp(1624000445)}`);
    console.log(`getDayOfWeekTimeStamp timezone June 18, 2021 2:14:05 PM GMT+07:00 : ${getDayOfWeekTimeStamp(1624000445, 420)}`);

    console.log(`================================================================`);

    console.log(`getHourTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getHourTimeStamp(1624112855)}`);
    console.log(`getHourTimeStamp timezone Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getHourTimeStamp(1624112855, 420)}`);

    console.log(`================================================================`);

    console.log(`getMinuteTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getMinuteTimeStamp(1624112855)}`);
    console.log(`getMinuteTimeStamp timezone Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getMinuteTimeStamp(1624112855, 420)}`);

    return {
      ABAS: moment().utc(),
      ABASTZ: moment().utcOffset(420),
      ABAS_UNIX: moment().utc().unix(),
      ABASTZ_UNIX: moment().utcOffset(420).unix(),

      H: moment().utc().hour(),
      H_TZ: moment().utcOffset(420).hour()
    }
    //return this.appService.getHello();
  }
}
