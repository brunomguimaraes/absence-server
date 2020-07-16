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
    
    try {
      const icsFile = fs.createWriteStream('./temp/calendar.ics')
      icsFile.write('BEGIN:VCALENDAR\n');
      icsFile.write('VERSION:1.0\n');
      events.forEach((event) => {
        icsFile.write('BEGIN:VEVENT\n');
        icsFile.write(`SUMMARY:${event.title}\n`);
        icsFile.write(`DESCRIPTION:${event.name}\n`);
        icsFile.write(`UID:${event.userId}\n`);
        icsFile.write('TZID:W. Europe Standard Time \n');
        icsFile.write(`DTSTART:${event.start.replace(/-/g, '')}\n`);
        icsFile.write(`DTEND:${event.end.replace(/-/g, '')}\n`);
        icsFile.write('END:VEVENT\n');
      });
      icsFile.write('END:VCALENDAR\n');
      icsFile.end();

      icsFile.on('close', () => {
        return response.status(200).download('./temp/calendar.ics');
      });
    } catch (err) {
      return response.status(500).json({ error: 'Couldn`t get calendar ics'  });
    }

  }
}

export default CalendarController;

