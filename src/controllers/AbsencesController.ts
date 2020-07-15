import { Request, Response } from 'express';
import knex from '../db/connection';



class AbsencesController {
    async index(request: Request, response: Response) {
        const absences = await knex('absences').select('*');

        const serializedAbsences= absences.map(absence => {
            return {
                id: absence.id,
            };
        });

        return response.json(serializedAbsences);
    }
}

export default AbsencesController;