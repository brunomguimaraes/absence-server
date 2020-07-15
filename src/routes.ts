import express from  'express';

import MembersController from './controllers/MembersController';
import AbsencesController from './controllers/AbsencesController';

const routes = express.Router();
const membersController = new MembersController();
const absencesController = new AbsencesController();

routes.get('/members', membersController.index);

routes.get('/abscences', absencesController.index);


export default routes;
