import express from  'express';

import MembersController from './controllers/MembersController';
import AbsencesController from './controllers/AbsencesController';
import CalendarController from './controllers/CalendarController';

const routes = express.Router();
const membersController = new MembersController();
const absencesController = new AbsencesController();
const calendarController = new CalendarController();

routes.get('/members', membersController.index);

routes.get('/calendar', calendarController.getCalendar);

routes.get('/absences', absencesController.index);
routes.get('/absences/user/:userId', absencesController.show);


export default routes;
