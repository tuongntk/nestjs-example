import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { formatTo } from './shared/helpers/number-helper';
import { durationInMinutes, utcNowTimeStamp, utcNow, durationUpToNowInMinutes, toUtcDate, toLocalDate, toUtcFormat, toLocalFormat, startOfDayUtcNow, startOfDayUtcTimeStamp, getDayOfWeekUtcNow, getDayOfWeekUtcTimeStamp, getHourUtcTimeStamp, getMinuteUtcTimeStamp, addHourUtcTimeStamp, addMinuteUtcTimeStamp, addHourUtcNow, addMinuteUtcNow } from './shared/helpers/time-helper';

import * as moment from "moment";
import * as momentTz from 'moment-timezone';

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
     
    // console.log(`now: ${moment.unix(nowTimeStamp)}`);
    // console.log(`nowTimeStamp: ${moment.unix(nowTimeStamp).unix()}`);
    // console.log(`now utc: ${moment.unix(nowTimeStamp).utcOffset(tz).utc()}`);
    // console.log(`nowTimeStamp utc: ${moment(moment.unix(nowTimeStamp).utcOffset(tz).utc()).unix()}`);

    console.log(`================================================================`);

    console.log(`nowTimeStamp utc: ${nowUtcTimeStamp}`);
    console.log(`nowString utc: ${nowUtc}`);

    console.log(`================================================================`);

    console.log(`toDate utc: ${toUtcDate(nowTimeStamp)} ${toUtcDate(nowTimeStamp).utcOffset()}`);
    console.log(`toDate timezone: ${toLocalDate(nowTimeStamp, 420)} ${toLocalDate(nowTimeStamp, 420).utcOffset()}`);

    console.log(`================================================================`);

    console.log(`now toFormat utc: ${toUtcFormat(nowTimeStamp)}`);
    console.log(`now toFormat timezone: ${toLocalFormat(nowTimeStamp, 420)}`);

    console.log(`================================================================`);

    console.log(`toFormat utc: ${toUtcFormat(1624086832)}`);
    console.log(`toFormat timezone: ${toLocalFormat(1624086832, 420)}`);

    console.log(`================================================================`);

    console.log(`startOfDayNow utc: ${startOfDayUtcNow()}`);
    console.log(`startOfDayNow timezone: ${startOfDayUtcTimeStamp(1624086832)}`);

    console.log(`================================================================`);

    console.log(`getDayOfWeekNow utc: ${getDayOfWeekUtcNow()}`);
    console.log(`getDayOfWeekTimeStamp utc June 18, 2021 2:14:05 PM GMT+07:00 : ${getDayOfWeekUtcTimeStamp(1624000445)}`);

    console.log(`================================================================`);

    console.log(`getHourTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getHourUtcTimeStamp(1624112855)}`);
    console.log(`getMinuteTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${getMinuteUtcTimeStamp(1624112855)}`);

    console.log(`================================================================`);

    console.log(`addMHourTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${addHourUtcTimeStamp(1624112855, 2)}`);
    console.log(`addMinuteTimeStamp utc Date and time (your time zone): Saturday, June 19, 2021 21:27:35 GMT+07:00 : ${addMinuteUtcTimeStamp(1624112855, 5)}`);

    console.log(`================================================================`);

    console.log(`addHourNow utc : ${addHourUtcNow(2)}`);
    console.log(`addMinuteNow utc : ${addMinuteUtcNow(5)}`);

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
