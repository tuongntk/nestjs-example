import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { formatTo } from './shared/helpers/number-helper';
import { durationInMinutes, utcNowTimeStamp, utcNow, toDate, toDateTimeStamp, durationInMinutesUpToNow } from './shared/helpers/time-helper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {

    const startTime = 1624086832;
    const startTimeUpToNow = 1624093569;
    const endTime = 1624086845;
    const nowTimeStamp = utcNowTimeStamp()
    const now = utcNow()

    const durationMinutes = durationInMinutes(startTime, endTime)
    const durationMinutesUpToNow = durationInMinutesUpToNow(startTimeUpToNow)

    return {
      durationMinutes,
      formatTo: formatTo(2.456),
      nowTimeStamp: nowTimeStamp,
      nowString: now,
      toNowString: toDate(nowTimeStamp),
      toNowTimeStamp: toDateTimeStamp(nowTimeStamp),

      durationMinutesUpToNow,
    }
    //return this.appService.getHello();
  }
}
