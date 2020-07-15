import { Request, Response } from 'express';
import knex from '../db/connection';

class MembersController {
    async index (request: Request, response: Response) {
        const members = await knex ('members').select('*');
    
        const serializedMembers = members.map(member => {
            return {
                id: member.id,
                crewId: member.crewId,
                image: member.image,
                name: member.name,
                userId: member.userId
            };
        });
    
        return response.json(serializedMembers);
    }
}

export default MembersController;