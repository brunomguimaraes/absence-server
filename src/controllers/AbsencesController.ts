import { Request, Response } from 'express';
import knex from '../db/connection';



class AbsencesController {
    async index(request: Request, response: Response) {
        const absences = await knex('absences').select('*');

        const serializedAbsences = absences.map(absence => {
            return {
                id: absence.id,
                admitterId: absence.admitterId,
                admitterNote: absence.admitterNote,
                confirmedAt: absence.confirmedAt,
                createdAt: absence.createdAt,
                crewId: absence.crewId,
                endDate: absence.endDate,
                memberNote: absence.memberNote,
                rejectedAt: absence.rejectedAt,
                startDate: absence.startDate,
                type: absence.type,
                userId: absence.userId
            };
        });

        return response.json(serializedAbsences);
    }
}

export default AbsencesController;

