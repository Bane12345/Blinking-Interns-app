// import { EntityManager, FindManyOptions, FindOneOptions, getManager } from "typeorm";
// import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Intern } from "../entities/intern";
import { getManager, FindManyOptions, EntityManager} from "typeorm";
import { InternModel } from "../entities/models";
import * as bcrypt from "bcrypt";

export class InternRepository {

    public static async insert(model: InternModel, entityManager?: EntityManager): Promise<void> {
        const manager = entityManager || getManager();

        const salt = await bcrypt.genSalt();
        model.password = await bcrypt.hash(model.password, salt);

        await manager.save(Intern, { ...model });
    }

    public static async findOneById(id: number): Promise<Intern> {
        return await getManager().findOneOrFail(Intern, id);
    }

    public static async find(options: FindManyOptions<Intern>): Promise<Intern[]> {
        return await getManager().find(Intern, options);
    }

    // public static async update(criteria: any, partialEntity: QueryDeepPartialEntity<Action>): Promise<void> {
    //     await getManager().update(Action, criteria, partialEntity);
    // }

    // public static async updateById(id: number, partialEntity: QueryDeepPartialEntity<Action>): Promise<void> {
    //     await getManager().update(Action, id, partialEntity);
    // }

    // public static async delete(criteria: any): Promise<void> {
    //     await getManager().delete(Action, criteria);
    // }

    // public static async deleteById(id: number): Promise<void> {
    //     await getManager().delete(Action, id);
    // }
    
}