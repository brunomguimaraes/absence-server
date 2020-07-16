import express, { Request, Response } from 'express';

// import moment from 'moment';
const ical = require('ical-generator');
import knex from '../db/connection';

let fs = require('fs');
const app = express();

class CalendarController {
  async getCalendar(request: Request, response: Response) {
    const members = await knex('members').select('*');
    const absences = await knex('absences').select('*');


    const cal = ical({ domain: 'localhost:3333', name: 'my first iCal' });
    const events = absences.map(absence => ({
      start: absence.startDate,
      end: absence.endDate,
      userId: absence.userId,
      title: `${members.find(
        member => member.userId === absence.userId)!.name} is 
        ${absence.type === "vacation" ?
          "on vacation"
          : "sick"}`,
      name: members.find(member => member.userId === absence.userId)!.name,
    }));
    cal.events(events)
    const ics = cal._generate();
    fs.writeFile('calendar.ics', ics, function (err: any) {
      if (err) throw err;
      console.log('File is created successfully.');
    }); 
    const file = `./calendar.ics`;
    response.download(file);
  }
}

export default CalendarController;

