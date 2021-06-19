import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { formatTo } from './shared/helpers/number-helper';
import { durationInMinutes, utcNowTimeStamp, utcNow, durationUpToNowInMinutes } from './shared/helpers/time-helper';

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
    const nowUtcTimeStamp = utcNowTimeStamp()
    const nowUtc = utcNow()

    const durationMinutes = durationInMinutes(startTime, endTime)
    const durationMinutesUpToNow = durationUpToNowInMinutes(startTimeUpToNow)

    console.log(`================================================================`);

    const nowTimeStamp = 1624107577; //Sat Jun 19 2021 19:59:37 GMT+0700
     
    console.log(`now: ${moment.unix(nowTimeStamp)}`);
    console.log(`nowTimeStamp: ${moment.unix(nowTimeStamp).unix()}`);

    console.log(`now utc: ${moment.unix(nowTimeStamp).utcOffset(tz).utc()}`);
    console.log(`nowTimeStamp utc: ${moment(moment.unix(nowTimeStamp).utcOffset(tz).utc()).unix()}`);

    // console.log(`================================================================`);

    // console.log(`nowTimeStamp utc: ${nowTimeStamp}`);
    // console.log(`nowString utc: ${now}`);

    // console.log(`================================================================`);

    // console.log(`toDate utc: ${toDate(nowTimeStamp)} ${toDate(nowTimeStamp).utcOffset()}`);
    // console.log(`toDate timezone: ${toDate(nowTimeStamp, 420)} ${toDate(nowTimeStamp, 420).utcOffset()}`);

    // console.log(`================================================================`);

    // console.log(`now toFormat utc: ${toFormat(nowTimeStamp)}`);
    // console.log(`now toFormat timezone: ${toFormat(nowTimeStamp, null, 420)}`);

    // console.log(`================================================================`);

    // console.log(`toFormat utc: ${toFormat(1624086832)}`);
    // console.log(`toFormat timezone: ${toFormat(1624086832, null, 420)}`);

    // console.log(`================================================================`);

    // console.log(`startOfDayNow utc: ${startOfDayNow()}`);
    // console.log(`startOfDayNow timezone: ${startOfDayNow(420)}`);

    // console.log(`================================================================`);

    // console.log(`toTimeStamp start of the day utc: ${startOfDayTimeStamp(startTime)}`);
    // console.log(`toTimeStamp start of the day timezone: ${startOfDayTimeStamp(startTime, 420)}`);

    // console.log(`================================================================`);

    // console.log(`getDayOfWeekNow utc: ${getDayOfWeekNow()}`);
    // console.log(`getDayOfWeekNow timezone: ${getDayOfWeekNow(420)}`);

    // console.log(`================================================================`);

    // console.log(`getDayOfWeekTimeStamp utc June 18, 2021 2:14:05 PM GMT+07:00 : ${getDayOfWeekTimeStamp(1624000445)}`);
    // console.log(`getDayOfWeekTimeStamp timezone June 18, 2021 2:14:05 PM GMT+07:00 : ${getDayOfWeekTimeStamp(1624000445, 420)}`);

    // console.log(`================================================================`);

    // console.log(`getHourTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getHourTimeStamp(1624112855)}`);
    // console.log(`getHourTimeStamp timezone Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getHourTimeStamp(1624112855, 420)}`);

    // console.log(`================================================================`);

    // console.log(`getMinuteTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getMinuteTimeStamp(1624112855)}`);
    // console.log(`getMinuteTimeStamp timezone Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getMinuteTimeStamp(1624112855, 420)}`);

    // console.log(`================================================================`);

    // console.log(`addMHourTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${addHourTimeStamp(1624112855, 2)}`);
    // console.log(`addMinuteTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${addMinuteTimeStamp(1624112855, 5)}`);

    // console.log(`================================================================`);

    // console.log(`addHourNow utc : ${addHourNow(2)}`);
    // console.log(`addMinuteNow utc : ${addMinuteNow(5)}`);

    console.log(`================================================================`);

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
